import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Treino from '../Treino/Treino';
import './Dia.css';

const Dia = ({ nome, treinos }) => {
  const navigate = useNavigate();
  const [mostraExercicio, setMostraExercicio] = useState(false);

  const handleExercicio = (nome) => {
    let novoEstado = !mostraExercicio;
    setMostraExercicio(novoEstado);

    if (novoEstado) {
      navigate(`/exercicio/${encodeURIComponent(nome)}`);
    } else {
      navigate(`/`);
    }
  }

  return (
    treinos.length > 0 && <section className='displayFlex'>
      <h1 onClick={() => handleExercicio(nome)}>
        {nome}
      </h1>
      {mostraExercicio &&
        <div>
          {treinos.map((treino, index) => <Treino
            key={index}
            exercicio={treino.exercicio}
            repeticoes={treino.repeticoes}
            serie={treino.serie}
            modalidade={treino.modalidade}
            musculo={treino.musculo}
            imagem={treino.imagem}
          />)}
        </div>
      }
    </section>
  )
}

export default Dia