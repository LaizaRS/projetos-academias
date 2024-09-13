import './Abcdef.css'

const Abcdef = ({ label, items, obrigatorio, quandoDigitar, valor }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <select
        onChange={evento => quandoDigitar(evento.target.value)}
        value={valor}
        required={obrigatorio}
      >
        <option value=""></option>
        {items.map(item =>
          <option key={item}>{item}</option>
        )}
      </select>
    </div>
  )
}

export default Abcdef