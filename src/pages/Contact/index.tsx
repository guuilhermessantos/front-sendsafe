import React from 'react'

import { useForm } from 'react-hook-form'
import sendEmail from '../api/mail'
import { useRouter } from 'next/router'
import axios from 'axios'
import { toast } from 'react-toastify'
import DivContainer from './styled'

// import transporter from '../../utils/nodemailer'

// dotenv.config()

type IProps = React.ButtonHTMLAttributes<HTMLButtonElement>

interface ISendMail {
  name: string
  email: string
  descEmail: string
}

// const sendEmail = async () => {
//   // Configurar o transporter do Nodemailer
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS
//     }
//   })

//   // Opções do e-mail
//   const mailOptions = {
//     from: 'seu_email@example.com',
//     to: 'destinatario@example.com',
//     subject: 'Assunto do E-mail',
//     text: 'Conteúdo do E-mail'
//   }

//   // Enviar o e-mail
//   const info = await transporter.sendMail(mailOptions)
//   console.log('E-mail enviado:', info.messageId)
// }

// const SendEmailPage = () => {
//   useEffect(() => {
//     sendEmail()
//   }, [])

//   return (
//     <div>
//       <h1>Enviando E-mail...</h1>
//     </div>
//   )
// }

// export default SendEmailPage

const Contact: React.FC<IProps> = ({ ...rest }) => {
  const { register, handleSubmit } = useForm<ISendMail>({
    criteriaMode: 'all'
  })

  const onSubmit = async data => {
    const params = {
      nome: data.name,
      email: data.email,
      descEmail: data.descEmail
    }
    // try {
    //   await axios.get('api/mail', { params })

    //   toast.success('O e-mail foi enviado com sucesso.')
    // } catch (error) {
    //   toast.error('Erro ao enviar o email.')
    // }
  }
  return (
    <DivContainer {...rest}>
      <article>
        <section>
          <div>
            <img src="/assets/formIcon.svg" />
            <h1 className="h1-responsive">Fale comigo</h1>
          </div>
          <p>Entre em contato comigo através do formulário abaixo.</p>

          {/* onSubmit="event.preventDefault(); sendMail();" */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <input
                type="text"
                id="name"
                name="name"
                required
                {...register('name')}
              />
              <label htmlFor="name" className="label">
                {/* <span className="material-symbols-outlined">mood</span> icone */}
                Seu nome
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="email"
                id="email"
                name="email"
                required
                {...register('email')}
              />
              <label htmlFor="email" className="label">
                {/* <span className="material-symbols-outlined">
                  alternate_email icone
                </span> */}
                E-mail para contato
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <textarea
                id="message"
                name="message"
                required
                {...register('descEmail')}

                // rows="4"
                // cols="50"
              ></textarea>
              <label htmlFor="message" className="label">
                O que tem em mente?
              </label>
              <div className="underline"></div>
            </div>
            <cite>
              Caso deseje contato por Whats App ou alguma rede social, basta
              especificar no corpo da mensagem.
            </cite>
            <button className="sendButton" type="submit">
              Enviar
            </button>
          </form>
        </section>
        <section
          className="social-links"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-anchor=".container"
        >
          <span>ou me encontre nas redes sociais</span>
          <div className="social-links-icons">
            <a
              href="https://wa.me/+5521967048484?text=Olá%20Nunes,%20tudo%20bem?%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20com%20você."
              aria-label="Mandar mensagem no Whatsapp"
              // target="_blank"
              title="Enviar mensagem via WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.4rem"
                height="2.4rem"
                viewBox="0 0 50 50"
              >
                <path
                  fill="#898989"
                  d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/nu7nes"
              aria-label="Visite meu Linkedin"
              // target="_blank"
              title="Visite meu Linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.4rem"
                height="2.4rem"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#898989"
                  d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nu7nes"
              aria-label="Visite meu Instagram"
              // target="_blank"
              title="Visite meu Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.4rem"
                height="2.4rem"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#898989"
                  d="M13 10a3 3 0 1 1-6 0c0-.171.018-.338.049-.5H6v3.997c0 .278.225.503.503.503h6.995a.503.503 0 0 0 .502-.503V9.5h-1.049c.031.162.049.329.049.5m-3 2a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 12m2.4-4.1h1.199a.301.301 0 0 0 .301-.3V6.401a.301.301 0 0 0-.301-.301H12.4a.301.301 0 0 0-.301.301V7.6c.001.165.136.3.301.3M10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 0 0 9.6 9.6a9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 10 .4m5 13.489C15 14.5 14.5 15 13.889 15H6.111C5.5 15 5 14.5 5 13.889V6.111C5 5.5 5.5 5 6.111 5h7.778C14.5 5 15 5.5 15 6.111z"
                />
              </svg>
            </a>
          </div>
        </section>
      </article>
    </DivContainer>
  )
}

export default Contact
