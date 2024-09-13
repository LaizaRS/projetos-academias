import { useState } from 'react';
import Nome from './components/Cabecalho/Nome';
import Formulario from './components/Formulario/Formulario';
import Categoria from './components/Indice/Categoria';

function App() {
  const [treinos, setTreinos] = useState([])

  const novoTreinoAdicionado = (treino) => {
    setTreinos([...treinos, treino])
  }

  const categorias = [
    {
      id: 1,
      tipo_treino: 'mobilidade'
    },
    {
      id: 2,
      tipo_treino: 'força'
    },
    {
      id: 3,
      tipo_treino: 'flexibilidade'
    },
    {
      id: 4,
      tipo_treino: 'aerobico'
    }
  ];

  const focoTreino = [
    {
      id: 1,
      foco: 'peito'
    },
    {
      id: 2,
      foco: 'costas'
    },
    {
      id: 3,
      foco: 'perna'
    },
    {
      id: 4,
      foco: 'braço'
    }
  ];

  const tipoDeTreino = categorias.map((categoria) => categoria.tipo_treino);
  const focoDoTreino = focoTreino.map((focoTreino) => focoTreino.foco);

  console.log('treinos', treinos);
  return (
    <>
      <Nome
        nome="LogoAleatorio"
      />
      <Formulario
        tipoDeTreino={tipoDeTreino}
        focoDoTreino={focoDoTreino}
        novoTreinoCadastrado={treino => novoTreinoAdicionado(treino)}
      />

      {treinos && (
        categorias.map(categoria => (
          <Categoria
            key={categoria.id}
            categoria={categoria}
            focoTreino={focoTreino}
            treinos={treinos}
          />
        ))
      )}

    </>
  );
}

export default App;
