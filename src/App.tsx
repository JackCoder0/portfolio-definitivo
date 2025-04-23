import './index.css'

import { AboutMeSection } from './components/AboutMeSection'
import { EducationSection } from './components/EducationSection'
import { Header } from './components/Header'
import { HomeSection } from './components/HomeSection'
import { Navbar } from './components/Navbar'
import { SkillsSection } from './components/SkillsSection'

export function App() {
  return (
    <div className="h-screen w-full p-10">
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
        <HomeSection />
      </div>

      <div className="flex items-center justify-around gap-8 p-16" id="contact">
        {/* Contact Section */}
        <HomeSection />
      </div>
    </div>
  )
}
