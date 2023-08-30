import React from 'react';
import './datospersonales.css'

const DatosPersonalesForm = ({ nombre, setNombre, apellidoPaterno, setApellidoPaterno, apellidoMaterno, setApellidoMaterno, dni, setDni, direccion, setDireccion, telefono, setTelefono }) => {
  return (
    <div className ="datospersonales">
      <h2>Datos Personales</h2>
      <label>
        Apellido Paterno:
        <input type="text" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)} />
      </label>
      <label>
        Apellido Materno:
        <input type="text" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} />
      </label>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label>
        DNI:
        <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} />
      </label>
      <label>
        Dirección:
        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
      </label>
      <label>
        Teléfono:
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </label>
    </div>
  );
};

export default DatosPersonalesForm;
