import { useState } from 'react';
import Dia from "../Dia/Dia";
import Form from '../form/Form';
import "./OrganizandoDia.css";

const OrganizandoDia = () => {

  const dias = ['A', 'B', 'C', 'D', 'E', 'F'];
  const [treinos, setTreinos] = useState([]);

  return (
    <div>
      <Form
        cadastrar={treino => setTreinos([...treinos, treino])}
        dias={dias}
      />

      <div className='flex'>
        {dias.map(dia => {
          return (
            <Dia
              nome={dia}
              key={dia}
              treinos={treinos.filter(treino => treino.dia === dia)}
            />
          );
        })}
      </div>
    </div>
  )
}

export default OrganizandoDia