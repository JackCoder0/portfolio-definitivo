import { icons } from 'lucide-react'

import logoHeader from '@/assets/Logo.svg'

interface HeaderIconProps {
  iconName: keyof typeof icons
  text: string
  href: string
  hoverColor: string
}

function HeaderIcon({ iconName, text, href, hoverColor }: HeaderIconProps) {
  const LucideIcon = icons[iconName]

  return (
    <a
      href={href}
      target="_blank"
      className={`flex items-center gap-2 p-1 text-sm font-bold text-white no-underline transition-colors duration-300 hover:${hoverColor}`}
      rel="noopener noreferrer"
    >
      <LucideIcon size={20} />
      <span>{text}</span>
    </a>
  )
}

export function Header() {
  const socialLinks: HeaderIconProps[] = [
    {
      iconName: 'Github',
      href: 'https://github.com/seuusuario',
      text: 'GitHub',
      hoverColor: 'text-zinc-400',
    },
    {
      iconName: 'Instagram',
      href: 'https://instagram.com/seuusuario',
      text: 'Instagram',
      hoverColor: 'text-pink-500',
    },
    {
      iconName: 'Linkedin',
      href: 'https://linkedin.com/in/seuusuario',
      text: 'LinkedIn',
      hoverColor: 'text-sky-600',
    },
  ]

  return (
    <header className="bg-header flex items-center justify-between rounded-2xl px-[30px] py-[2px]">
      <img
        className="cursor-pointer"
        src={logoHeader}
        alt="Jackson Silva Logo"
      />

      <nav className="flex items-center justify-center gap-6">
        {socialLinks.map((item) => (
          <HeaderIcon key={item.text} {...item} />
        ))}
      </nav>

      <div>Theme Toggle</div>
    </header>
  )
}
