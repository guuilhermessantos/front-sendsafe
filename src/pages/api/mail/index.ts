import nodemailer from 'nodemailer'

// import dotenv from 'dotenv'
// dotenv.config()

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello World' })

  const query = req.query
  console.log('query', query)

  // Configurar o transporte
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    logger: true,
    auth: {
      user: 'guuilhermessantos@gmail.com',
      pass: 'fqdo frtn ezex sspi'
    }
  })

  // Configurar o email
  const mailOptions = {
    from: query.email,
    to: 'guuilhermessantos@gmail.com',
    subject: `Contato de ${query.nome} no portfolio`,
    text: query.descEmail
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
