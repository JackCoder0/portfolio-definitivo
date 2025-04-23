import './index.css'

import { AboutMeSection } from './components/AboutMeSection'
import { EducationSection } from './components/EducationSection'
import { Header } from './components/Header'
import { HomeSection } from './components/HomeSection'
import { Navbar } from './components/Navbar'
import { SkillsSection } from './components/SkillsSection'

// TODO: Adicionar animações
// TODO: Adicionar Theme Toggle
// TODO: Adicionar API Spotify
// TODO: Adicionar API PSN
// TODO: Adicionar O que esta codando atualmente?
// TODO: Deixar responsivo
// TODO: Quando der reload ou algo parecido manter o navbar
// TODO: Quando der o scroll e chegar no id mudar o navbar

export function App() {
  return (
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

      <div
        className="flex items-center justify-around gap-8 p-16"
        id="projects"
      >
        {/* Projects Section */}
        {/* <HomeSection /> */}
      </div>

      <div className="flex items-center justify-around gap-8 p-16" id="contact">
        {/* Contact Section */}
        {/* <HomeSection /> */}
      </div>
    </div>
  )
}
