import './index.css'

import { Header } from './components/Header'
import { HomeSection } from './components/HomeSection'
import { Navbar } from './components/Navbar'

export function App() {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <Navbar />

      <div className="flex items-center justify-around gap-8 p-16" id="home">
        {/* Home Section */}
        <HomeSection />
      </div>

      <div className="flex items-center justify-around gap-8 p-16" id="aboutMe">
        {/* About Me Section */}
        <HomeSection />
      </div>

      <div
        className="flex items-center justify-around gap-8 p-16"
        id="education"
      >
        {/* Education Section */}
        <HomeSection />
      </div>

      <div
        className="flex items-center justify-around gap-8 p-16"
        id="experience"
      >
        {/* Experience Section */}
        <HomeSection />
      </div>

      <div className="flex items-center justify-around gap-8 p-16" id="skills">
        {/* Skills Section */}
        <HomeSection />
      </div>

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
