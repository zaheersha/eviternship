interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}

export default Section