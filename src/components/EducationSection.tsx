import faculLogo from '@/assets/anhangueraText.png'

// import dioLogo from '@/assets/dioIcon.webp'
import { TitleContainer } from './TitleContainer'

interface EducationCardProps {
  logo: string
  school?: string
  course: string
  date: string
}

const educationData: EducationCardProps[] = [
  {
    logo: faculLogo,
    school: 'Anhanguera',
    course: 'Análise e Desenvolvimento de Sistemas',
    date: 'Fevereiro de 2024 - Julho de 2026',
  },
  // {
  //   logo: dioLogo,
  //   school: 'DIO',
  //   course: 'CSS Web Developer',
  //   date: 'Março de 2024',
  // },
  // {
  //   logo: dioLogo,
  //   school: 'DIO',
  //   course: 'HTML Web Developer',
  //   date: 'Março de 2024',
  // },
]

function EducationCard({ course, date, school, logo }: EducationCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border-2 border-gray-600 p-4 shadow-md">
      <img
        src={logo}
        className="w-40 object-contain"
        alt={`Logo da instituição ${school}`}
      />
      <h3 className="text-lg font-semibold">{course}</h3>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  )
}

export function EducationSection() {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center gap-8 p-8 text-center sm:p-16"
    >
      <TitleContainer text="📚 Educação" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {educationData.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}
