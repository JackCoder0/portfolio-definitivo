interface TitleContainerProps {
  text: string
}

export function TitleContainer({ text }: TitleContainerProps) {
  return (
    <section className="bg-transparente text-accent font-fira rounded-2xl p-4 font-bold">
      {text}
    </section>
  )
}
