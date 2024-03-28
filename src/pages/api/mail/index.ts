import nodemailer from 'nodemailer'

import dotenv from 'dotenv'
dotenv.config()

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello World' })

  const body = req.query

  // Configurar o transporte
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    logger: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  // Configurar o email
  const mailOptions = {
    from: body.email,
    to: process.env.EMAIL_USER,
    subject: `Contato de ${body.nome} no portfolio`,
    text: body.descEmail
  }

  // Enviar o email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email enviado: ' + info.response)
    }
  })
}
