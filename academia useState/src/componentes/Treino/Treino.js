import './Treino.css'

const Treino = ({ exercicio, repeticoes, serie, modalidade, musculo, imagem }) => {
  return (
    <div className='pai'>
      <div className='cabecalho'>
        <p>{exercicio}</p>
      </div>

      <div className='tres-colunas'>
        <div className='coluna-esquerda'>
          <p>Repetições: {repeticoes}</p>
          <p> Series: {serie}</p>
        </div>
        <div className='coluna-meio'>
          <p>{modalidade}</p>
          <p>{musculo}</p>
        </div>
        <div className='coluna-direita'>

          <img className='imagem-treino' src={imagem} alt={exercicio} />

        </div>
      </div>

    </div>
  )
}

export default Treino