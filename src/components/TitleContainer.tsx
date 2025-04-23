import { icons } from 'lucide-react'

interface TitleContainerProps {
  iconName: keyof typeof icons
  text: string
}

export function TitleContainer({ text, iconName }: TitleContainerProps) {
  const LucideIcon = icons[iconName]

  return (
    <section className="bg-transparente text-accent font-fira rounded-2xl p-4 font-bold">
      <div className="flex items-center gap-2">
        <LucideIcon size={25} />
        {text}
      </div>
    </section>
  )
}
