import React from "react";
import './ListaSelect.css';

const ListaSelect = ({ itens, nome, aoAlterado, valor }) => {
  const opcoesUnicas = [...new Set(itens)];

  return (
    <div className='arrumando'>
      <p>{nome}</p>
      <select onChange={evento => aoAlterado(evento.target.value)} value={valor}>
        {opcoesUnicas.map((item, index) => <option key={`${nome}_${item}_${index}`} value={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default ListaSelect;
