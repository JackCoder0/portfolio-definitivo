import { useEffect, useState } from 'react'

import logoHeader from '@/assets/Logo.svg'

import { DynamicIcon } from './DynamicIcon'

interface HeaderIconProps {
  iconName: any
  text: string
  href: string
  hoverColor: string
}

const socialLinks: HeaderIconProps[] = [
  {
    iconName: 'FaGithub',
    href: 'https://github.com/JackCoder0',
    text: 'GitHub',
    hoverColor: 'hover:text-tertiary',
  },
  {
    iconName: 'FaInstagram',
    href: 'https://instagram.com/jacksilva_dev',
    text: 'Instagram',
    hoverColor: 'hover:text-pink-500',
  },
  {
    iconName: 'FaLinkedin',
    href: 'https://www.linkedin.com/in/jackson-silva-coder/',
    text: 'LinkedIn',
    hoverColor: 'hover:text-sky-600',
  },
]

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
  const [menuOpen, setMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  // Detecta rolagem e mostra/esconde o header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Rola pra baixo: esconde
        setMenuOpen(false)
        setShowHeader(false)
      } else {
        // Rola pra cima ou no topo: mostra
        setShowHeader(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={`bg-header/80 sticky top-0 z-50 flex items-center justify-between rounded-b-2xl px-6 py-1.5 shadow-md backdrop-blur-sm transition-transform duration-500 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <img
        className="w-20 cursor-pointer"
        src={logoHeader}
        alt="Jackson Silva Logo"
      />

      {/* Desktop Menu */}
      <nav className="hidden items-center justify-center gap-6 md:flex">
        {socialLinks.map((item) => (
          <HeaderIcon key={item.text} {...item} />
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="relative h-8 w-8 cursor-pointer md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? 'scale-75 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}
        >
          <DynamicIcon name="FaBars" size={24} />
        </span>

        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-75 -rotate-90 opacity-0'}`}
        >
          <DynamicIcon name="FaTimes" size={24} />
        </span>
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="bg-header absolute top-full right-4 mt-2 flex flex-col items-end gap-2 rounded-xl p-4 shadow-lg md:hidden">
          {socialLinks.map((item) => (
            <div
              key={item.text}
              className="w-full"
              onClick={() => setMenuOpen(false)}
            >
              <HeaderIcon {...item} />
            </div>
          ))}
        </div>
      )}

      <div className="hidden md:flex"></div>
    </header>
  )
}
