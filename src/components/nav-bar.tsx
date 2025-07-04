import { GlobeIcon } from 'lucide-react'
import { useEffect, useId, useState } from 'react'

import logoHeader from '@/assets/Logo.svg'

import { DynamicIcon } from './DynamicIcon'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

const navigationLinks = [
  {
    href: 'https://github.com/JackCoder0',
    label: 'GitHub',
    icon: 'FaGithub',
    hoverColor: 'hover:text-tertiary!',
  },
  {
    href: 'https://instagram.com/jacksilva_dev',
    label: 'Instagram',
    icon: 'FaInstagram',
    hoverColor: 'hover:text-pink-500!',
  },
  {
    href: 'https://www.linkedin.com/in/jackson-silva-coder/',
    label: 'LinkedIn',
    icon: 'FaLinkedin',
    hoverColor: 'hover:text-sky-600!',
  },
]

// Language options
const languages = [
  { value: 'pt-BR', label: 'Br' },
  { value: 'en', label: 'En' },
]

export function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const id = useId()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Rola pra baixo: esconde
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
      className={`sticky top-0 z-50 rounded-b-xl px-4 shadow-md backdrop-blur-md transition-transform duration-500 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    return (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          target="_blank"
                          className="flex-row items-center gap-2 py-1.5"
                        >
                          <DynamicIcon name={link.icon} />
                          <span>{link.label}</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          <div className="flex items-center gap-6">
            <a href="#" className="text-primary hover:text-primary/90">
              <img
                className="w-20 cursor-pointer"
                src={logoHeader}
                alt="Jackson Silva Logo"
              />
            </a>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-2">
                <TooltipProvider>
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.label}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <NavigationMenuLink href={link.href} target="_blank">
                            <DynamicIcon name={link.icon} />
                            <span className="sr-only">{link.label}</span>
                          </NavigationMenuLink>
                        </TooltipTrigger>
                        <TooltipContent
                          side="bottom"
                          className="px-2 py-1 text-xs"
                        >
                          <p>{link.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    </NavigationMenuItem>
                  ))}
                </TooltipProvider>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ModeToggle />

          <Select defaultValue="pt-BR">
            <SelectTrigger
              id={`language-${id}`}
              className="[&>svg]:text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground h-8 border-none px-2 shadow-none [&>svg]:shrink-0"
              aria-label="Select language"
            >
              <GlobeIcon size={16} aria-hidden="true" />
              <SelectValue className="hidden sm:inline-flex" />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2">
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  <span className="flex items-center gap-2">
                    <span className="truncate">{lang.label}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  )
}
