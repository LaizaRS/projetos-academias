import { useState } from "react"
import Abcdef from "../ABCDEF/Abcdef"
import Botao from "../Botao/Botao"
import Texto from "../Texto/Texto"
import "./Form.css"

const Form = ({ cadastrar, dias }) => {

  const [exercicio, setExercicio] = useState('')
  const [repeticoes, setRepeticoes] = useState('')
  const [serie, setSeries] = useState('')
  const [modalidade, setModalidade] = useState('')
  const [musculo, setMusculo] = useState('')
  const [imagem, setImagem] = useState('')
  const [dia, setDia] = useState('')
  const [botaoDesativado, setBotaoDesativado] = useState(false)

  const chamar = (evento) => {
    setBotaoDesativado(true)
    evento.preventDefault()

    cadastrar({
      dia,
      exercicio,
      repeticoes,
      serie,
      modalidade,
      musculo,
      imagem,
    })
    setDia('')
    setDia('')
    setExercicio('')
    setRepeticoes('')
    setSeries('')
    setModalidade('')
    setMusculo('')
    setImagem('')

    setBotaoDesativado(false)
  }

  return (
    <form onSubmit={chamar}>
      <Abcdef
        label='Dia de Treino'
        items={dias}
        obrigatorio={true}
        valor={dia}
        quandoDigitar={valor => setDia(valor)}
      />

      <Texto
        label="Nome do exercicio"
        placeholder='Digite aqui o nome do exercicio...'
        obrigatorio={true}
        valor={exercicio}
        quandoDigitar={valor => setExercicio(valor)}
      />

      <Texto
        label="Quantas repetições?"
        placeholder='Digite numero de repetições...'
        obrigatorio={true}
        valor={repeticoes}
        quandoDigitar={valor => setRepeticoes(valor)}
      />

      <Texto
        label="Quantas series?"
        placeholder='Digite numero de series...'
        obrigatorio={true}
        valor={serie}
        quandoDigitar={valor => setSeries(valor)}
      />

      <Texto
        label="Qual modalidade?"
        placeholder='Força, flexibilidade, resistencia...'
        valor={modalidade}
        quandoDigitar={valor => setModalidade(valor)}
      />

      <Texto
        label="Qual musculo trabalha?"
        placeholder='Digite aqui qual musculo trabalha'
        valor={musculo}
        quandoDigitar={valor => setMusculo(valor)}
      />

      <Texto
        label="Insira o link de uma imagem de auxilio"
        placeholder='Digite aqui o link...'
        valor={imagem}
        quandoDigitar={valor => setImagem(valor)}
      />

      <Botao
        texto='Criar Treino'
        disabled={botaoDesativado}
      />
    </form>
  )
}

export default Form