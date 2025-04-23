import { TitleContainer } from './TitleContainer'

// TODO: Atualizar o texto e deixar por JSON e dinamico

const aboutMeParagraphs = [
  'Olá! Meu nome é Jackson Antonio Silva, sou desenvolvedor de software apaixonado por tecnologia e inovação. Atualmente, estou no 3º semestre de Análise e Desenvolvimento de Sistemas, onde venho aprofundando meus conhecimentos em arquitetura de sistemas, programação e gestão de projetos.',
  'Atuo como Desenvolvedor Web na Prefeitura Municipal de Santo André, onde contribuo diretamente para a criação e manutenção de sistemas web que otimizam processos internos, promovem eficiência e geram impacto positivo na gestão pública. Tenho experiência em lidar com desafios complexos, buscando sempre implementar soluções práticas e modernas para atender às necessidades dos usuários.',
  'Sou motivado por desafios que envolvem aprendizado contínuo e trabalho em equipe, sempre com o objetivo de desenvolver tecnologias que façam a diferença. 🚀',
  'Tenho experiência no desenvolvimento full stack, utilizando uma ampla variedade de tecnologias modernas, incluindo ASP.NET Core, C#, Python, JavaScript e React. Minha atuação abrange desde a criação de interfaces intuitivas até a construção de backends robustos, garantindo soluções completas e escaláveis.',
  'Também tenho sólida experiência na integração com APIs REST, no uso de bancos de dados como Oracle PL/SQL e na aplicação de boas práticas em desenvolvimento de software. Além disso, sou adepto de metodologias ágeis, como SCRUM, para garantir eficiência, colaboração e entrega contínua de valor aos projetos.',
  'Sou apaixonado por tecnologia e inovação, sempre buscando transformar ideias em soluções práticas, inteligentes e impactantes. Meu foco é criar aplicações que realmente façam a diferença e ofereçam experiências excepcionais para os usuários. 💡',
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
  return <div className="rounded-md border-2 border-gray-600 p-1">{text}</div>
}

export function AboutMeSection() {
  return (
    <div className="flex items-center justify-around gap-8 p-16" id="aboutMe">
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <TitleContainer iconName="CircleUser" text="Sobre mim" />

        <div className="flex w-[80%] flex-col gap-4">
          {aboutMeParagraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <h1 className="font-fira text-accent text-3xl font-bold">
          Fatos sobre mim
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {funFacts.map((fact, index) => (
            <AboutMeContent key={index} text={fact} />
          ))}
        </div>
      </div>
    </div>
  )
}
