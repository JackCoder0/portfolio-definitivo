import logoHeader from '@/assets/Logo.svg'

import { DynamicIcon } from './DynamicIcon'

interface HeaderIconProps {
  iconName: any
  text: string
  href: string
  hoverColor: string
}

function HeaderIcon({ iconName, text, href, hoverColor }: HeaderIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={`text-text flex items-center gap-2 p-1 text-sm font-bold no-underline transition-colors duration-300 ${hoverColor}`}
      rel="noopener noreferrer"
    >
      <DynamicIcon name={iconName} size={24} />
      <span>{text}</span>
    </a>
  )
}

export function Header() {
  const socialLinks: HeaderIconProps[] = [
    {
      iconName: 'FaGithub',
      href: 'https://github.com/seuusuario',
      text: 'GitHub',
      hoverColor: 'hover:text-tertiary',
    },
    {
      iconName: 'FaInstagram',
      href: 'https://instagram.com/seuusuario',
      text: 'Instagram',
      hoverColor: 'hover:text-pink-500',
    },
    {
      iconName: 'FaLinkedin',
      href: 'https://linkedin.com/in/seuusuario',
      text: 'LinkedIn',
      hoverColor: 'hover:text-sky-600',
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
