// Utilizamos o children pois somente assim conseguimos associar ao que está dentro da tag Titulo. Caso contrario teriamos que passar o valor como uma propriedade.
type Props = {
  children: string
}

// Para melhor entendimento: (props: Props) --> props recebe as tipagens de Props
const Titulo = (props: Props) => <span>{props.children}</span>

export default Titulo
