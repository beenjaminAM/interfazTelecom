import React, { useState } from 'react';
import "./reclamo.css"

const Reclamo = () => {
  const [motivo, setMotivo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  // Puedes agregar más estados para otros campos de la Reclamo

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos de la Reclamo
    console.log("Datos de la Reclamo:", { motivo, descripcion });
  };

  return (
    <div className='Reclamo'>
      <h2>Reclamo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Motivo de la Reclamo:
          <input
            type="text"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            required
          />
        </label>
        <label>
          Descripción:
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </label>
        {/* Agrega más campos de la Reclamo aquí */}
        <button className='buttonReclamo' type="submit">Enviar Reclamo</button>
      </form>      
    </div>
  );
};

export default Reclamo;
