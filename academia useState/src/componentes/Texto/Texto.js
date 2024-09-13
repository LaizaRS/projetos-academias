import "./Texto.css"


const Texto = ({ label, placeholder, obrigatorio, quandoDigitar, valor }) => {


  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        value={valor}
        onChange={evento => quandoDigitar(evento.target.value)}
        required={obrigatorio}
        type="text"
        placeholder={placeholder} />


    </div>
  )
}

export default Texto