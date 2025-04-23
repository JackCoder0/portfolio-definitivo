import { icons } from 'lucide-react'

import { StackCategory } from '@/@types/skills'
import { DynamicIcon } from '@/components/DynamicIcon'
import rawSkills from '@/data/skills.json'

import { TitleContainer } from './TitleContainer'

// TODO: Além das que vai estudar
// TODO: Realizei projetos e uso atualmente

interface SkillsCardProps {
  type: StackCategory['type']
  iconName: string
  children?: React.ReactNode
}

const skills = rawSkills as StackCategory[]

const bgByType = {
  front: 'bg-primary/60',
  back: 'bg-green-400/60',
  full: 'bg-purple-600/60',
  tools: 'bg-blue-700/60',
  other: 'bg-amber-400/50',
}

function SkillsCard({ type, iconName, children }: SkillsCardProps) {
  const LucideIcon = icons[iconName as keyof typeof icons]

  return (
    <div
      className={`${bgByType[type]} text-text flex w-full max-w-sm flex-col gap-3 rounded-2xl p-4`}
    >
      <div className="flex items-center justify-center gap-3 text-lg font-semibold">
        <LucideIcon size={28} />
        {type === 'front' && 'Front-End'}
        {type === 'back' && 'Back-End'}
        {type === 'full' && 'Fullstack'}
        {type === 'tools' && 'Ferramentas'}
        {type === 'other' && 'Ágeis'}
      </div>
      {children}
    </div>
  )
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-8 p-8 text-center sm:p-16"
    >
      <TitleContainer iconName="CodeXml" text="Skills" />

      <div className="flex w-full max-w-6xl flex-wrap justify-center gap-8">
        {skills.map((group) => (
          <SkillsCard
            key={group.type}
            iconName={group.iconName}
            type={group.type}
          >
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
              {group.stacks.map((stack) => (
                <div
                  key={stack.name}
                  className="rounded-lg bg-gray-400/50 p-2.5"
                >
                  <a
                    href={stack.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 text-center transition-transform hover:scale-105"
                  >
                    <DynamicIcon
                      name={stack.icon}
                      size={40}
                      className="text-tertiary"
                    />
                    <span className="text-text text-sm">{stack.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </SkillsCard>
        ))}
      </div>
    </section>
  )
}
