import clsx from 'clsx'
import {
  CircleUser,
  CodeXml,
  FileCode,
  // GraduationCap,
  LayoutGrid,
  Mail,
  Monitor,
} from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [active, setActive] = useState('Home')

  const iconsWithNames = [
    { icon: LayoutGrid, name: 'Home', href: '#home' },
    { icon: CircleUser, name: 'Sobre Mim', href: '#aboutMe' },
    { icon: Monitor, name: 'Carreira', href: '#career' },
    // { icon: GraduationCap, name: 'Educação', href: '#education' },
    // { icon: Monitor, name: 'Experiências', href: '#experience' },
    { icon: CodeXml, name: 'Habilidades', href: '#skills' },
    { icon: FileCode, name: 'Projetos', href: '#projects' },
    { icon: Mail, name: 'Contato', href: '#contact' },
  ]

  return (
    <nav className="border-text bg-tertiary fixed top-[30%] z-[999] flex w-14 flex-col items-center gap-2.5 rounded-full border p-[17px] leading-none">
      {iconsWithNames.map(({ icon: Icon, name, href }) => (
        <a
          key={name}
          href={href}
          data-name={name}
          onClick={() => setActive(name)}
          className={clsx(
            'group relative rounded-full p-[5px] transition-colors duration-300',
            active === name && 'bg-white',
            'hover:bg-white',
          )}
        >
          <Icon
            size={28}
            className={clsx(
              'transition-colors duration-300',
              active === name ? 'stroke-black' : 'stroke-white',
              'group-hover:stroke-black',
            )}
          />
          <span className="font-nunito pointer-events-none absolute top-1/2 left-[150%] -translate-y-1/2 rounded-md bg-white px-4 py-2 text-sm whitespace-nowrap text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {name}
          </span>
        </a>
      ))}
    </nav>
  )
}
