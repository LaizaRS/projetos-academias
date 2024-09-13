import { ArrowClockwise, Trash } from "@phosphor-icons/react";
import Switch from "../Switch/Switch";
import "./Treino.css";


const Treino = ({ treino }) => {

  return (
    <div className="treino" key={treino.id}>
      <div className="parte-superior">
        <div className="mesma-linha">
          <button>
            <Trash size={16} className="icon" />
          </button>
          <p>{treino.nomeExercicio}</p>
        </div>
        <div>
          <Switch />
        </div>
      </div>
      <div className="parte-inferior">
        <div><p>video</p></div>
        <div>
          <p>{treino.serie}</p>
          <p>Séries</p>
        </div>
        <ArrowClockwise size={16} />
        <div>
          <p>{treino.repeticao}</p>
          <p>Repetições</p>
        </div>
        <div>
          <input className="treino" type="number" />
          <p>carga</p>
        </div>
      </div>
    </div>
  )
}

export default Treino