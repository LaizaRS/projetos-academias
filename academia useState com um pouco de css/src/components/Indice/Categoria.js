import Treino from "../Treino/Treino";
import "./Indice.css";

const Categoria = ({ categoria, focoTreino, treinos }) => {
  const treinosFiltrados = treinos.filter(treinoSalvo => treinoSalvo.tipoDeTreino === categoria.tipo_treino);

  return (
    <div className="indice" key={categoria.id}>

      <p>Tipo de treino: <br /> {categoria.tipo_treino}</p>
      <div className="onde">
        {focoTreino.map((foco) => (
          <div className="tipo" key={`${foco.id}`}>
            <p>{foco.foco}</p>
          </div>
        ))}
      </div>

      {treinosFiltrados.map((treinoSalvo) => (
        <Treino
          key={`treino_${treinoSalvo.id}`}
          treino={treinoSalvo}
        />
      ))}
    </div>
  );
}



export default Categoria;
