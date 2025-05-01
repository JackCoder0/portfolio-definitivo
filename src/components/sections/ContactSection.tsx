import resume from '@/assets/Jackson Antonio Silva 2025 Currículo.pdf'

import { DynamicIcon } from '../DynamicIcon'
import { TitleContainer } from '../TitleContainer'

interface ContactInfoProps {
  iconName: string
  text: string
  nickname: string
  link: string
}

function ContactInfo({ iconName, text, nickname, link }: ContactInfoProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-primary flex items-center gap-2">
        <DynamicIcon name={iconName} size={30} />
        <span>{text}</span>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="hover:text-text font-medium text-gray-400 transition-colors duration-300 hover:underline"
      >
        {nickname}
      </a>
    </div>
  )
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-8 px-4 py-10 text-center sm:px-8 md:px-16"
    >
      <TitleContainer iconName="Mail" text="Contato" />

      <h1 className="font-roboto text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Vamos conversar!
      </h1>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href="https://api.whatsapp.com/send?phone=5511952909057&text=Oi%20tudo%20bem%3F%20Vim%20pelo%20seu%20portfolio!"
          target="_blank"
          rel="noreferrer"
          className="border-primary hover:bg-primary text-primary hover:text-text flex items-center gap-2 rounded-2xl border-2 px-6 py-3 text-base transition-colors duration-300"
        >
          <DynamicIcon name="BsWhatsapp" size={24} />
          <span>Vamos conversar</span>
        </a>

        <a
          href={resume}
          download
          className="text-primary hover:text-text flex items-center gap-2 rounded-2xl px-6 py-3 text-base transition-colors duration-300"
        >
          <span>Baixar CV</span>
          <DynamicIcon name="DownloadIcon" size={24} />
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        <ContactInfo
          iconName="Send"
          text="E-mail:"
          nickname="jacksonxcontato13"
          link="mailto:jacksonxcontato13@gmail.com"
        />
        <ContactInfo
          iconName="FaLinkedin"
          text="Linkedin:"
          nickname="@jackson-silva-coder"
          link="https://www.linkedin.com/in/jackson-silva-coder/"
        />
        <ContactInfo
          iconName="FaGithub"
          text="GitHub:"
          nickname="@JackCoder0"
          link="https://github.com/JackCoder0"
        />
      </div>
    </section>
  )
}
