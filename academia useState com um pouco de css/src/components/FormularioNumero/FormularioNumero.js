import './FormularioNumero.css'

const FormularioNumero = ({ numero, aoAlterado, valor, obrigatorio }) => {
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value)
  }

  return (
    <div className="numero">
      <p>{numero}</p>
      <input
        value={valor}
        onChange={aoDigitado}
        type="number"
        required={obrigatorio}
      />
    </div>
  )
}

export default FormularioNumero