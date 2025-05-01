// import { ChevronsRightIcon } from 'lucide-react'

import { DynamicIcon } from '../DynamicIcon'
import { TitleContainer } from '../TitleContainer'

interface ProjectCardProps {
  title: string
  description: string
  liveLink?: string
  githubLink?: string
  imageUrl?: string
  stacks?: string[]
  icons?: string[]
}

// TODO: Adicionar os projetos, pelo menos 3

function ProjectCard({
  title,
  description,
  liveLink,
  githubLink,
  imageUrl,
  icons,
}: ProjectCardProps) {
  return (
    <div className="border-primary flex w-full max-w-sm flex-col items-center justify-center gap-4 rounded-2xl border-2 p-4">
      <div className="rounded-lg">
        <img src={imageUrl} alt="" />
      </div>

      {icons && icons.length > 0 && (
        <div className="flex items-center justify-center gap-2">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="rounded-md bg-gray-400/50 p-2 transition-transform hover:scale-105"
            >
              <DynamicIcon name={icon} />
            </div>
          ))}
        </div>
      )}

      <div className="flex w-full flex-col gap-4 p-2 text-center">
        <div className="flex flex-col items-center gap-2">
          <p className="font-fira font-medium">{title}</p>
          <p className="font-fira font-light">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <a
          href={liveLink}
          className="bg-primary flex items-center gap-4 rounded-md p-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
          <DynamicIcon name="Globe" />
        </a>

        <a
          href={githubLink}
          className="bg-primary flex items-center gap-4 rounded-md p-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <DynamicIcon name="Github" />
        </a>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-8 p-8 text-center sm:p-16"
    >
      <TitleContainer iconName="FileCode" text="Projetos" />

      <div className="flex w-full items-center justify-center">
        <div className="grid max-w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center gap-8">
          <ProjectCard
            title="Firebase Chat"
            description="Um chat usando a autenticação do Firebase e o Firestore como banco de dados."
            liveLink="https://react-chat-lovat.vercel.app/"
            githubLink="https://github.com/JackCoder0/react-chat"
            icons={[
              'ReactOriginal',
              'FirebaseOriginal',
              'TailwindcssOriginal',
              'VitejsOriginal',
            ]}
          />

          <ProjectCard
            title="DevTalk API"
            description="Uma API RESTful usando Python e FastAPI, para um projeto da faculdade de uma plataforma de idiomas."
            liveLink="https://github.com/JackCoder0/DevTalkAPI"
            githubLink="https://github.com/JackCoder0/DevTalkAPI"
            icons={['PythonOriginal', 'FastapiOriginal']}
          />
        </div>
      </div>
    </section>
  )
}
