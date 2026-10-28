# Orbit & Oak

A responsive digital marketing agency landing page built with React and Vite.

## Run locally

Use Node.js 22.13 or newer. The contact database uses Node's built-in
`node:sqlite` module, so there is no separate database server to install.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. The SQLite database is created on the first
successful contact form submission at `data/inquiries.sqlite`. It stores the
sender's name, email, optional phone, selected service and budget, message, and
submission time.

The local Vite development server and Vite preview server provide the
`POST /api/contact` endpoint. A production deployment needs an API runtime and
persistent database; Vite's static build by itself does not host this endpoint.

## Before launch

- Replace the portfolio preview photos in `public/images/portfolio/` and
  example testimonials with approved client work and feedback.
- Portfolio project descriptions are illustrative and do not claim verified
  client campaign results.
- Set a real WhatsApp contact number before adding a direct WhatsApp link.
- Configure a production API and persistent database before deploying the
  contact form.

## Checks

```sh
npm run lint
npm run build
```
"# Digital-Marketing-Project" 
