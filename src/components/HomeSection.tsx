import Avatar2D from '@/assets/avatar2d.svg'

// TODO: Deixar a empresa e o highlight dinamicos

export function HomeSection() {
  const destaqueLista = [
    { num: 6, text: 'Playlists para dar aquele gás no trabalho' },
    { num: 5, text: 'Cafés que não podem faltar no meu dia' },
    { num: 4, text: 'Cursos para turbinar minhas skills' },
    { num: 3, text: 'Jogos de história que me marcaram' },
  ]

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <section className="bg-transparente text-accent font-fira rounded-2xl p-4 font-bold">
          👋 Saudações!
        </section>

        <div>
          <h1 className="m-4 text-3xl">JACKSON SILVA</h1>
          <span className="text-accent text-2xl">Desenvolvedor Web</span>
          <p className="text-2xl">e</p>
          <span className="text-accent text-2xl">Desenvolvedor Front-End</span>
        </div>
      </div>

      <section className="flex flex-col items-center">
        <img
          className="w-[25rem]"
          src={Avatar2D}
          alt="Avatar estilizado de Jackson Silva"
        />
        <div className="bg-tertiary font-fira mt-[calc(-1rem)] flex items-center rounded-md p-2 text-center font-medium">
          <div className="bg-accent mr-4 h-4 w-4"></div>
          <main>
            <p>Atualmente tabalhando na</p>
            <p className="text-accent">Prefeitura de Santo André</p>
          </main>
        </div>
      </section>

      <div className="bg-tertiary flex flex-col gap-10 rounded-4xl px-5 py-12">
        <ul className="flex flex-col gap-4">
          {destaqueLista.map(({ num, text }) => (
            <li key={text} className="flex items-center gap-4 py-2.5">
              <span className="font-ibm text-accent text-4xl font-medium">
                {num}
              </span>
              <p className="font-fira w-[230px] text-left font-light">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
