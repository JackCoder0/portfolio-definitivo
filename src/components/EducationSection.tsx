import faculLogo from '@/assets/anhangueraText.png'
import psaLogo from '@/assets/psaVerticalLogo.svg'

import { TitleContainer } from './TitleContainer'

// TODO: Colocar um hover/modal nos cards com mais informações

interface CardProps {
  logo: string
  school?: string
  work?: string
  course?: string
  date: string
  description?: string
  current?: boolean
}

const educationData: CardProps[] = [
  {
    logo: faculLogo,
    school: 'Anhanguera',
    course: 'Análise e Desenvolvimento de Sistemas',
    date: 'Fevereiro de 2024 - Julho de 2026',
    current: true,
  },
]

const workData: CardProps[] = [
  {
    logo: psaLogo,
    work: 'Prefeitura de Santo André',
    description: 'Desenvolvedor Frontend',
    date: 'Maio de 2024 - Atualmente',
    current: true,
  },
]

function EducationCard({ course, date, school, logo, current }: CardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-2xl border-2 border-gray-600 p-4 shadow-md ${current ? 'bg-tertiary' : ''}`}
    >
      <img
        src={logo}
        className="w-30 object-contain"
        alt={`Logo da ${school}`}
      />
      <p className="text-lg font-semibold">{school}</p>
      <h3 className="text-md font-semibold">{course}</h3>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  )
}

function WorkCard({ logo, work, date, description, current }: CardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-2xl border-2 border-gray-600 p-4 shadow-md ${current ? 'bg-tertiary' : ''}`}
    >
      <img src={logo} className="w-30 object-contain" alt={`Logo da ${work}`} />
      <p className="text-lg font-semibold">{work}</p>
      <h3 className="text-md font-semibold">{description}</h3>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  )
}

export function EducationSection() {
  return (
    <section
      id="career"
      className="flex flex-col items-center justify-center gap-8 p-8 text-center sm:p-16"
    >
      <TitleContainer text="💼 Carreira" />

      <div className="flex gap-15">
        <div className="education">
          <div>
            <h1>Acadêmica</h1>
            <p>2024 - Atualmente</p>
          </div>
          <div
          // className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {educationData.map((item, index) => (
              <EducationCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="carrer">
          <div>
            <h1>Área profissional</h1>
            <p>2024 - Atualmente</p>
          </div>
          <div
          // className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {workData.map((item, index) => (
              <WorkCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
