import React from "react";
import ListaSelect from "../ListaSelect/ListaSelect";
import "./Nome.css";

const Nome = ({ nome }) => {

  const opcoes = [
    'Escolher Treino',
    'Criar Treino'
  ]


  return (
    <header>
      <div className="ajuste">
        <div> {nome} </div>
        <ListaSelect itens={opcoes} />
      </div>
    </header>
  );
}

export default Nome;
