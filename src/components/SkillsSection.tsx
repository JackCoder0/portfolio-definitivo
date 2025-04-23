import * as DevIcons from 'devicons-react'
import { icons } from 'lucide-react'
import * as SiIcons from 'react-icons/si'

import skills from '@/data/skills.json'

import { TitleContainer } from './TitleContainer'

// TODO: Além das que vai estudar
// TODO: Realizei projetos e uso atualmente

interface SkillsCardProps {
  type: 'front' | 'back' | 'full' | 'tools' | 'other'
  iconName: string
  children?: React.ReactNode
}

const bgByType = {
  front: 'bg-primary/60',
  back: 'bg-green-400/60',
  full: 'bg-purple-600/60',
  tools: 'bg-purple-600/60',
  other: 'bg-purple-600/60',
}

function SkillsCard({ type, iconName, children }: SkillsCardProps) {
  const LucideIcon = icons[iconName as keyof typeof icons]

  return (
    <div
      className={`${bgByType[type]} text-text flex flex-col gap-3 rounded-2xl p-4`}
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

      {/* TODO: Melhorar layout */}

      <div className="flex items-center justify-center gap-8">
        {skills.map((group) => (
          <SkillsCard
            key={group.type}
            iconName={group.iconName}
            type={group.type}
          >
            <div className="grid grid-cols-3 gap-4">
              {group.stacks.map((stack) => {
                const StackIconSi = SiIcons[stack.icon as keyof typeof SiIcons]
                const StackIconDev =
                  DevIcons[stack.icon as keyof typeof DevIcons]

                const StackIcon = StackIconSi || StackIconDev

                return (
                  <div key={stack.name} className="rounded-lg p-2">
                    <a
                      href={stack.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-2 text-center transition-transform hover:scale-105"
                    >
                      {StackIcon && (
                        <StackIcon size={30} className="text-tertiary" />
                      )}
                      <span className="text-text/80 text-sm">{stack.name}</span>
                    </a>
                  </div>
                )
              })}
            </div>
          </SkillsCard>
        ))}
      </div>

      <p>Adicionar as stacks de front/back</p>
    </section>
  )
}
