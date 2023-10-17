import "./seleccionador.css"

const Seleccionador = ({ reqType, setReqType }) => {
  const handleSelectChange = (event) => {
    setReqType(event.target.value);
  };

  return (
    <div className="motivo">
        <h2>
            Motivo
        </h2>
        <select className="form-control" id="select1" onChange={handleSelectChange} value={reqType}>
        <option value="Select">Select</option>
        <option value="Solicitud">Solicitud</option>
        <option value="Queja">Queja</option>
        </select>
    </div>
  );
};

export default Seleccionador;
