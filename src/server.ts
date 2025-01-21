import express from 'express'
import payload from 'payload'
let nodemailer = require("nodemailer");

require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT)||587,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
    ...(process.env.AWS_SECRET_ACCESS_KEY
      ? {
        email: {
          fromName: "Korczak's Heritage, Inc.",
          fromAddress: "noreply@korczaksheritage.khonline.biz",
          transport: transporter
        },
      }
      : {}),
  })

  // Add your own express routes here

  app.listen(3000)
}

start()
