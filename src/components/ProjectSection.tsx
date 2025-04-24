import { ChevronsRightIcon } from 'lucide-react'

import { DynamicIcon } from './DynamicIcon'
import { TitleContainer } from './TitleContainer'

interface ProjectCardProps {
  title: string
  description: string
  liveLink?: string
  githubLink?: string
  imageUrl?: string
}

function ProjectCard({
  title,
  description,
  liveLink,
  githubLink,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="border-primary flex w-full max-w-sm flex-col items-center justify-center gap-4 rounded-2xl border-2 p-4">
      <div className="rounded-lg">
        <img src={imageUrl} alt="" />
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="rounded-md bg-blue-700 p-2">
          <DynamicIcon name="Monitor" />
        </div>
        <div className="rounded-md bg-blue-700 p-2">
          <DynamicIcon name="Monitor" />
        </div>
      </div>

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
        >
          Live
          <DynamicIcon name="Globe" />
        </a>

        <a
          href={githubLink}
          className="bg-primary flex items-center gap-4 rounded-md p-4"
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

      <div className="flex w-full items-center justify-end">
        <button className="border-primary hover:bg-primary hover:text-text text-primary flex cursor-pointer items-center gap-1 rounded-md border-2 p-2 transition-all duration-300 ease-in-out">
          <span className="font-fira">Ver Todos</span>
          <ChevronsRightIcon />
        </button>
      </div>

      <div className="flex w-full items-center justify-center">
        <div className="grid max-w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center gap-8">
          <ProjectCard title="Nome" description="Descrição" />
        </div>
      </div>
    </section>
  )
}
