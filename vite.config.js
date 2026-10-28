import { Buffer } from 'node:buffer'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const maxBodyBytes = 10 * 1024
const projectDirectory = fileURLToPath(new URL('.', import.meta.url))

class ApiError extends Error {
  constructor(status, message) {
    super(message)
    this.status = status
  }
}

function sendJson(response, status, body) {
  response.statusCode = status
  response.setHeader('Content-Type', 'application/json; charset=utf-8')
  response.setHeader('Cache-Control', 'no-store')
  response.end(JSON.stringify(body))
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let size = 0
    let tooLarge = false
    const chunks = []

    request.on('data', (chunk) => {
      size += chunk.length
      if (size > maxBodyBytes) {
        tooLarge = true
      } else {
        chunks.push(chunk)
      }
    })

    request.on('end', () => {
      if (tooLarge) {
        reject(new ApiError(413, 'Your message is too large.'))
        return
      }

      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')))
      } catch {
        reject(new ApiError(400, 'Please send a valid JSON request.'))
      }
    })

    request.on('error', reject)
  })
}

function validateInquiry(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new ApiError(400, 'Please send a valid contact form.')
  }

  const fields = ['name', 'email', 'phone', 'service', 'budget', 'message']
  const inquiry = {}
  for (const field of fields) {
    const value = body[field] ?? ''
    if (typeof value !== 'string') {
      throw new ApiError(422, 'Please check the contact form fields.')
    }
    inquiry[field] = value.trim()
  }

  if (inquiry.name.length < 2 || inquiry.name.length > 100) {
    throw new ApiError(422, 'Name must be between 2 and 100 characters.')
  }
  if (
    inquiry.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)
  ) {
    throw new ApiError(422, 'Please enter a valid email address.')
  }
  if (inquiry.phone.length > 40) {
    throw new ApiError(422, 'Phone number must be 40 characters or fewer.')
  }
  if (inquiry.service.length > 80 || inquiry.budget.length > 40) {
    throw new ApiError(422, 'Please check the selected service and budget.')
  }
  if (inquiry.message.length < 10 || inquiry.message.length > 2000) {
    throw new ApiError(422, 'Message must be between 10 and 2,000 characters.')
  }

  return inquiry
}

function createContactMiddleware() {
  let database

  function getDatabase() {
    if (database) return database

    const dataDirectory = join(projectDirectory, 'data')
    mkdirSync(dataDirectory, { recursive: true })
    database = new DatabaseSync(join(dataDirectory, 'inquiries.sqlite'))
    database.exec(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id INTEGER PRIMARY KEY,
        created_at TEXT NOT NULL DEFAULT (datetime('now')),
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL DEFAULT '',
        service TEXT NOT NULL DEFAULT '',
        budget TEXT NOT NULL DEFAULT '',
        message TEXT NOT NULL
      )
    `)
    return database
  }

  return (request, response, next) => {
    const pathname = new URL(request.url ?? '/', 'http://localhost').pathname
    if (pathname !== '/api/contact') {
      next()
      return
    }

    if (request.method !== 'POST') {
      sendJson(response, 405, { error: 'Use POST to submit the contact form.' })
      return
    }

    const contentType = request.headers['content-type']
      ?.split(';', 1)[0]
      .trim()
      .toLowerCase()
    if (contentType !== 'application/json') {
      sendJson(response, 415, { error: 'Please send the form as JSON.' })
      return
    }

    readJsonBody(request)
      .then(validateInquiry)
      .then((inquiry) => {
        const result = getDatabase()
          .prepare(`
            INSERT INTO inquiries (name, email, phone, service, budget, message)
            VALUES (?, ?, ?, ?, ?, ?)
          `)
          .run(
            inquiry.name,
            inquiry.email,
            inquiry.phone,
            inquiry.service,
            inquiry.budget,
            inquiry.message,
          )

        sendJson(response, 201, { ok: true, id: Number(result.lastInsertRowid) })
      })
      .catch((error) => {
        if (error instanceof ApiError) {
          sendJson(response, error.status, { error: error.message })
          return
        }

        console.error('Contact inquiry could not be saved:', error)
        sendJson(response, 500, {
          error: 'We could not save your inquiry. Please try again later.',
        })
      })
  }
}

function contactDatabasePlugin() {
  return {
    name: 'orbit-oak-contact-database',
    configurePreviewServer(server) {
      server.middlewares.use(createContactMiddleware())
    },
    configureServer(server) {
      server.middlewares.use(createContactMiddleware())
    },
  }
}

export default defineConfig({
  plugins: [react(), contactDatabasePlugin()],
})
