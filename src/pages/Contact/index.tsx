import React from 'react'

import { useForm } from 'react-hook-form'
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
    try {
      await axios.get('api/mail', { params })
      toast.success('O e-mail foi enviado com sucesso.')
    } catch (error) {
      toast.error('Erro ao enviar o email.')
    }
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
              href="https://wa.me/+5511958520407?text=Olá%20Guilherme,%20tudo%20bem?%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20com%20você."
              aria-label="Mandar mensagem no Whatsapp"
              target="_blank"
              rel="noreferrer"
              title="Enviar mensagem via WhatsApp"
            >
              <img src="/assets/whatsIcon.svg" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/guilherme-santos-652b49174/"
              aria-label="Visite meu Linkedin"
              target="_blank"
              rel="noreferrer"
              title="Visite meu Linkedin"
            >
              <img src="/assets/linkedinIcon.svg" alt="" />
            </a>
            <a
              href="https://github.com/guuilhermessantos"
              aria-label="Visite meu Github"
              target="_blank"
              rel="noreferrer"
              title="Visite meu Github"
            >
              <img src="/assets/githubIcon.svg" alt="" />
            </a>
          </div>
        </section>
      </article>
    </DivContainer>
  )
}

export default Contact
