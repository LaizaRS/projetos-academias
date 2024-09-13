import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Botao from "../Botao/Botao";
import FormularioNumero from "../FormularioNumero/FormularioNumero";
import FormularioTexto from "../FormularioTexto/FormularioTexto";
import ListaSelect from "../ListaSelect/ListaSelect";
import "./Formulario.css";

const Formulario = ({ novoTreinoCadastrado, tipoDeTreino, focoDoTreino }) => {

  const [nomeExercicio, setNomeExercicio] = useState('')
  const [video, setVideo] = useState('')
  const [serie, setSerie] = useState('')
  const [repeticao, setRepeticao] = useState('')
  const [trocaTreino, setTrocaTreiono] = useState('')
  const [focoTreino, setFocoTreino] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log('formulario foi submetido');
    novoTreinoCadastrado({
      id: uuidv4(),
      tipoDeTreino: focoTreino,
      focoDoTreino: trocaTreino,
      nomeExercicio,
      video,
      serie,
      repeticao,
    });

  };

  return (
    <form onSubmit={aoSalvar}>

      <ListaSelect
        obrigatorio={true}
        itens={tipoDeTreino}
        nome={'Tipo do treino'}
        valor={focoTreino}
        aoAlterado={(valor) => setFocoTreino(valor)}
      />

      <ListaSelect
        obrigatorio={true}
        itens={focoDoTreino}
        nome={'Foco do treino'}
        valor={trocaTreino}
        aoAlterado={(valor) => setTrocaTreiono(valor)}
      />

      <FormularioTexto
        obrigatorio={true}
        texto={"Nome do Exercicio"}
        valor={nomeExercicio}
        aoAlterado={valor => setNomeExercicio(valor)}
      />
      <FormularioTexto
        obrigatorio={false}
        texto={"Link para o Video"}
        valor={video}
        aoAlterado={valor => setVideo(valor)}
      />
      <FormularioNumero
        obrigatorio={true}
        numero={"Numero de Series"}
        valor={serie}
        aoAlterado={valor => setSerie(valor)}
      />
      <FormularioNumero
        obrigatorio={true}
        numero={"Numero de Repetições"}
        valor={repeticao}
        aoAlterado={valor => setRepeticao(valor)}
      />
      <Botao
        finalizar={"Criar Treino"}
      />
    </form>
  )
}

export default Formulario;