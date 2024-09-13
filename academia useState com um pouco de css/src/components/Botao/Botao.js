import "./Botao.css"

const Botao = ({ finalizar }) => {

  return (
    <div className="botao">
      <button> {finalizar} </button>
    </div>
  )
}

export default Botao