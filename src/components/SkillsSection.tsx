import { icons } from 'lucide-react'

import { TitleContainer } from './TitleContainer'

// TODO: Colocar stacks de front e back
// TODO: Além das que vai estudar
// TODO: Realizei projetos e uso atualmente
// TODO: Pegar de um JSON

interface SkillsCardProps {
  type: 'front' | 'back' | 'full'
  iconName: keyof typeof icons
}

const bgByType = {
  front: 'bg-primary/60',
  back: 'bg-green-400/60',
  full: 'bg-purple-600/60',
}

function SkillsCard({ type, iconName }: SkillsCardProps) {
  const LucideIcon = icons[iconName]

  return (
    <div className={`${bgByType[type]} text-text rounded-2xl p-4`}>
      <div className="flex items-center gap-2 text-lg font-semibold">
        <LucideIcon size={28} />
        {type === 'front' && 'Front-End'}
        {type === 'back' && 'Back-End'}
        {type === 'full' && 'Fullstack'}
      </div>
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

      <SkillsCard iconName="MonitorSmartphone" type="front" />
      <SkillsCard iconName="Server" type="back" />
      <SkillsCard iconName="Layers" type="full" />

      <p>Adicionar as stacks de front/back</p>
    </section>
  )
}
