import Avatar2D from '@/assets/avatar2d.svg'

import { TitleContainer } from '../TitleContainer'

// TODO: Deixar a empresa e o highlight dinamicos

export function HomeSection() {
  const destaqueLista = [
    { num: 6, text: 'Playlists para dar aquele gás no trabalho' },
    { num: 5, text: 'Cafés que não podem faltar no meu dia' },
    { num: 4, text: 'Cursos para turbinar minhas skills' },
    { num: 3, text: 'Jogos de história que me marcaram' },
  ]

  return (
    <section className="flex flex-col items-center justify-center gap-8 px-4 py-10 md:flex-row md:items-center md:justify-around md:gap-8 md:px-16">
      {/* Bloco de saudação e título */}
      <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
        <TitleContainer iconName="Hand" text="Saudações!" />
        <div>
          <h1 className="m-4 text-3xl sm:text-4xl">JACKSON SILVA</h1>
          <div className="text-accent text-2xl sm:text-3xl">
            <p>Desenvolvedor Web</p>
            <p className="text-foreground">e</p>
            <p>Desenvolvedor Front-End</p>
          </div>
        </div>
      </div>

      {/* Bloco do avatar e status */}
      <div className="flex w-full flex-col items-center gap-4">
        <img
          // className="w-48 sm:w-64 md:w-[20rem] lg:w-[25rem]"
          className="w-96"
          src={Avatar2D}
          alt="Avatar estilizado de Jackson Silva"
        />
        <aside
          className="bg-tertiary font-fira mt-[-1rem] flex items-center gap-2 rounded-md p-2 text-center text-sm font-medium sm:text-base"
          aria-label="Status profissional atual"
        >
          <div className="bg-accent h-6 w-6 rounded-full" aria-hidden="true" />
          <div>
            <p>Atualmente trabalhando na</p>
            <p className="text-accent">Prefeitura de Santo André</p>
          </div>
        </aside>
      </div>

      {/* Bloco de destaques */}
      <div className="bg-tertiary flex w-full max-w-md flex-col gap-10 rounded-2xl px-4 py-8 sm:max-w-lg sm:px-6 sm:py-10 md:max-w-md lg:max-w-lg xl:max-w-xl">
        <ul className="flex flex-col gap-4">
          {destaqueLista.map(({ num, text }) => (
            <li key={text} className="flex items-center gap-4 font-medium">
              <span className="font-ibm text-accent text-3xl sm:text-4xl">
                {num}
              </span>
              <p className="font-fira text-left text-sm sm:text-base">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
