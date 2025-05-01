import clsx from 'clsx'
import {
  CircleUser,
  CodeXml,
  FileCode,
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

    { icon: CodeXml, name: 'Skills', href: '#skills' },
    { icon: FileCode, name: 'Projetos', href: '#projects' },
    { icon: Mail, name: 'Contato', href: '#contact' },
  ]

  return (
    <nav
      className={clsx(
        'bg-tertiary border-text fixed z-[999]',
        // Mobile styles
        'right-0 left-0 flex flex-row items-center justify-around rounded-t-2xl p-2 max-md:bottom-0',
        // Desktop styles
        'md:top-[30%] md:left-8 md:ml-8 md:w-14 md:flex-col md:gap-2.5 md:rounded-full md:border md:p-[17px] md:leading-none',
      )}
    >
      {iconsWithNames.map(({ icon: Icon, name, href }) => (
        <a
          key={name}
          href={href}
          data-name={name}
          onClick={() => setActive(name)}
          className={clsx(
            'group relative flex flex-col items-center rounded-full p-1 transition-colors duration-300',
            active === name ? 'text-white md:bg-white' : 'text-gray-500',
            'hover:bg-white',
          )}
        >
          <Icon
            size={28}
            className={clsx(
              'transition-colors duration-300',
              active === name ? 'md:stroke-black' : 'md:stroke-white',
              'group-hover:stroke-black',
            )}
          />

          <span className="mt-1 text-xs md:hidden">{name}</span>

          <span className="font-nunito pointer-events-none absolute top-1/2 left-[150%] -translate-y-1/2 rounded-md bg-white px-4 py-2 text-sm whitespace-nowrap text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {name}
          </span>
        </a>
      ))}
    </nav>
  )
}
