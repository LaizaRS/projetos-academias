import React, { useState } from "react";
import Formulario from "../Formulario/Formulario";

const Modal = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <h1>Criar Treino</h1>
      <button onClick={openModal}>Abrir Modal</button>

      <Modal isOpen={modalOpen} closeModal={closeModal}>
        <Formulario />
      </Modal>
    </div>
  )
}


export default Modal;
