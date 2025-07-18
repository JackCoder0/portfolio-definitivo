import './index.css'

import { Drill, Hammer } from 'lucide-react'

import { Header } from './components/nav-bar'
import { Navbar } from './components/Navbar'
import { AboutMeSection } from './components/sections/AboutMeSection'
import { ContactSection } from './components/sections/ContactSection'
// import { DynamicIcon } from './components/DynamicIcon'
import { EducationSection } from './components/sections/EducationSection'
import { HomeSection } from './components/sections/HomeSection'
import { ProjectsSection } from './components/sections/ProjectSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ThemeProvider } from './components/theme-provider'

// TODO: Adicionar animações
// TODO: Adicionar Theme Toggle
// TODO: Adicionar API Spotify
// TODO: Adicionar API PSN
// TODO: Adicionar O que esta codando atualmente?
// TODO: Adicionar LeetCode
// TODO: Deixar responsivo
// TODO: Quando der reload ou algo parecido manter o navbar
// TODO: Quando der o scroll e chegar no id mudar o navbar

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Header />
        <Navbar />

        <main className="w-full px-4 sm:px-6 md:px-10" id="home">
          <div className="bg-muted border-muted-foreground mx-auto my-0 mt-4 flex max-w-xs items-center justify-center gap-2 rounded-lg border p-2 text-sm">
            <Hammer />
            <p>Estamos passando por mudanças</p>
            <Drill className="scale-x-[-1]" />
          </div>

          {/* Home Section */}
          <HomeSection />

          {/* About Me Section */}
          <AboutMeSection />

          {/* Education/Experiencie Section */}
          <EducationSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Projects Section */}
          <ProjectsSection />

          {/* Contact Section */}
          <ContactSection />

          <footer className="border-primary mb-18 flex items-center justify-center border-t py-4 text-center text-sm text-gray-500 md:mb-0">
            Copyright © Jackson Silva · 2025
          </footer>
        </main>
      </ThemeProvider>
    </>
  )
}
