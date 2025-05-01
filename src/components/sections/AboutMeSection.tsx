import { TitleContainer } from '../TitleContainer'

const aboutMeParagraphs = [
  '👨‍💻 Olá! Me chamo Jackson Antonio Silva, tenho 20 anos e estou no 3º semestre de Análise e Desenvolvimento de Sistemas (ADS). Sou desenvolvedor de software apaixonado por tecnologia, inovação e criação de soluções digitais que geram impacto real.',
  'Atualmente, atuo como Desenvolvedor Web na Prefeitura Municipal de Santo André, contribuindo diretamente para a criação e manutenção de sistemas que otimizam processos internos, promovem eficiência e transformam a gestão pública por meio da tecnologia. Tenho experiência em lidar com desafios complexos, sempre buscando implementar soluções modernas, práticas e escaláveis que atendam às reais necessidades dos usuários.',
  'A programação, para mim, é a união perfeita entre lógica e criatividade. Meu objetivo é continuar crescendo como desenvolvedor, expandindo meus conhecimentos e contribuindo para projetos que transformem ideias em soluções inovadoras e impactantes para a sociedade.',
  'Estou sempre buscando evoluir. Atualmente, foco em aprofundar conhecimentos em APIs, banco de dados e arquitetura full stack, especialmente com React, TypeScript e Zustand. Também estou estudando Node.js para reforçar minha atuação no back-end e, em breve, pretendo explorar Java e frameworks amplamente utilizados no mercado.',
  'Ao longo da minha trajetória, desenvolvi competências essenciais como trabalho em equipe, comunicação interpessoal, resolução de problemas e adaptabilidade. Essas habilidades me permitem colaborar de forma eficiente em qualquer time, entender os desafios com empatia e buscar soluções que realmente façam a diferença.',
]

const funFacts = [
  '🍕🍖 Pizza e churrasco são minhas comidas favoritas.',
  '🎮 Amo Red Dead Redemption 2 e God of War.',
  '🏀 Gosto de jogar e assistir basquete.',
  '💪 Curto academia e treinos.',
  '❄️ Prefiro o frio ao calor.',
  '✈️ Sonho em conhecer o mundo.',
]

function AboutMeContent({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center rounded-md border-2 border-gray-600 p-2 text-sm sm:text-base">
      <span>{text}</span>
    </div>
  )
}

export function AboutMeSection() {
  return (
    <section
      id="aboutMe"
      className="flex flex-col items-center justify-around px-4 py-10 sm:px-8 md:px-16"
    >
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <TitleContainer iconName="CircleUser" text="Sobre mim" />

        <div className="w-full max-w-4xl space-y-4 text-justify text-sm sm:text-base">
          {aboutMeParagraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <h2 className="font-fira text-accent text-2xl font-bold sm:text-3xl">
          Fatos sobre mim
        </h2>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {funFacts.map((fact, index) => (
            <AboutMeContent key={index} text={fact} />
          ))}
        </div>
      </div>
    </section>
  )
}
