import './index.css'

import { AboutMeSection } from './components/AboutMeSection'
import { ContactSection } from './components/ContactSection'
import { DynamicIcon } from './components/DynamicIcon'
import { EducationSection } from './components/EducationSection'
import { Header } from './components/Header'
import { HomeSection } from './components/HomeSection'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectSection'
import { SkillsSection } from './components/SkillsSection'

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
      <div className="h-screen w-full p-10" id="home">
        <Header />
        <Navbar />

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

        <footer className="border-primary flex h-15 items-center justify-evenly border-t">
          <span className="font-light text-gray-500">
            Copyright © Jackson Silva · 2025
          </span>

          <div className="flex items-center gap-2">
            <DynamicIcon name="FaInstagram" />
            <DynamicIcon name="FaLinkedin" />
            <DynamicIcon name="FaGithub" />
          </div>
        </footer>
      </div>
    </>
  )
}
