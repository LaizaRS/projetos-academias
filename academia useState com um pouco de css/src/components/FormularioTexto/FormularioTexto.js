import './FormularioTexto.css';

const FormularioTexto = ({ texto, aoAlterado, valor, obrigatorio }) => {

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value)
  }

  return (
    <div className="texto">
      <p>{texto}</p>
      <input
        value={valor}
        onChange={aoDigitado}
        type="text"
        required={obrigatorio} />
    </div>

  )
}

export default FormularioTexto