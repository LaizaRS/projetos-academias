import Botao from "../Botao/Botao"
import Treino from "../Treino/Treino"
import "./ListaDeTreino"

const ListaDeTreino = ({ verdade }) => {
  const treino = {
    nomeExercicio: "Puxada alta na frente",
    serie: "4",
    repeticao: "10"
  }
  return (
    <>
      <Treino
        treino={treino}
      />
      <Botao finalizar={"Finalizar Treino"} />
    </>
  )
}

export default ListaDeTreino