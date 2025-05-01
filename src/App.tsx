import './index.css'

import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { AboutMeSection } from './components/sections/AboutMeSection'
import { ContactSection } from './components/sections/ContactSection'
// import { DynamicIcon } from './components/DynamicIcon'
import { EducationSection } from './components/sections/EducationSection'
import { HomeSection } from './components/sections/HomeSection'
import { ProjectsSection } from './components/sections/ProjectSection'
import { SkillsSection } from './components/sections/SkillsSection'

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
      <Header />
      <Navbar />

      <main className="w-full px-4 sm:px-6 md:px-10" id="home">
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

        <footer className="border-primary mt-10 flex items-center justify-center border-t py-4 text-center text-sm text-gray-500">
          Copyright © Jackson Silva · 2025
        </footer>
      </main>
    </>
  )
}
