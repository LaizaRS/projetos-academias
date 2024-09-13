import './Botao.css'

const Botao = ({ texto, isDesativado }) => {
  return (
    <button disabled={isDesativado}>
      {texto}
    </button>
  )
}

export default Botao