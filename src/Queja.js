import React, { useState } from 'react';
import "./queja.css"

const Queja = () => {
  const [motivo, setMotivo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  // Puedes agregar más estados para otros campos de la queja

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos de la queja
    console.log("Datos de la Queja a procesar:", { motivo, descripcion });
  };

  return (
    <div className='queja'>
      <h2>Queja</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Motivo de la queja ahoras:
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
        {/* Agrega más campos de la queja aquí */}
        <button className='buttonQueja' type="submit">Enviar Queja</button>
      </form>    
    </div>
  );
};

export default Queja;
