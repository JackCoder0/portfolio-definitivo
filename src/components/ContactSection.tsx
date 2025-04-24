import { DynamicIcon } from './DynamicIcon'
import { TitleContainer } from './TitleContainer'

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
      className="flex flex-col items-center justify-center gap-8 p-8 text-center sm:p-16"
    >
      <TitleContainer iconName="Mail" text="Contato" />

      <h1 className="font-roboto text-6xl">Vamos conversar!</h1>

      <div className="flex flex-col items-center gap-2">
        <button className="border-primary hover:bg-primary text-primary hover:text-text flex cursor-pointer items-center gap-2 rounded-2xl border-2 p-3 transition-colors duration-300">
          <DynamicIcon name="BsWhatsapp" size={30} />
          <span>Vamos conversar</span>
        </button>

        <button className="text-primary hover:text-text flex cursor-pointer items-center gap-2 rounded-2xl p-3 transition-colors duration-300">
          <span>Baixar CV</span>
          <DynamicIcon name="DownloadIcon" size={30} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-8">
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
