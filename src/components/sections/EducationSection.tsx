import faculLogo from '@/assets/anhangueraText.png'
import psaLogo from '@/assets/psaVerticalLogo.svg'

import { TitleContainer } from '../TitleContainer'

// TODO: Colocar um hover/modal nos cards com mais informações
// TODO: Adicionar date-fns para adicionar o tempo de experiência e faultade
// Prefeitura: 08/05/2024 - Atualmente
// Anhanguera: 02/2024 - 07/2026

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
    date: 'Fevereiro/2024 - Julho/2026',
    current: true,
  },
]

const workData: CardProps[] = [
  {
    logo: psaLogo,
    work: 'Prefeitura de Santo André',
    description: 'Análise e Desenvolvimento de Sistemas',
    date: 'Maio/2024 - Atualmente',
    current: true,
  },
]

function EducationCard({ course, date, school, logo, current }: CardProps) {
  return (
    <div
      className={`flex h-auto min-h-[200px] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-gray-600 p-4 shadow-md ${current ? 'bg-tertiary border-tertiary' : ''}`}
    >
      <img
        src={logo}
        className="w-50 object-contain"
        alt={`Logo da ${school}`}
      />
      <h1 className="text-lg font-semibold">{school}</h1>
      <p className="text-md font-semibold">{course}</p>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  )
}

function WorkCard({ logo, work, date, description, current }: CardProps) {
  return (
    <div
      className={`flex h-auto min-h-[200px] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-gray-600 p-4 shadow-md ${current ? 'bg-tertiary border-tertiary' : ''}`}
    >
      <img src={logo} className="w-50 object-contain" alt={`Logo da ${work}`} />
      <h1 className="text-lg font-semibold">{work}</h1>
      <p className="text-md font-semibold">{description}</p>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  )
}

export function EducationSection() {
  return (
    <section
      id="career"
      className="flex flex-col items-center justify-center gap-12 px-4 py-12 sm:px-8 md:px-16"
    >
      <TitleContainer iconName="Monitor" text="Carreira" />

      <div className="flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-start lg:justify-around">
        {/* Acadêmica */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div>
            <h2 className="text-xl font-bold">Acadêmica</h2>
            <p className="text-sm text-gray-400">2024 - Atualmente</p>
          </div>

          <div className="grid w-full max-w-md grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {educationData.map((item, index) => (
              <EducationCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Profissional */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div>
            <h2 className="text-xl font-bold">Profissional</h2>
            <p className="text-sm text-gray-400">2024 - Atualmente</p>
          </div>

          <div className="grid w-full max-w-md grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {workData.map((item, index) => (
              <WorkCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
