import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundaria'
}

// Fizemos a desestruturação de props
const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
