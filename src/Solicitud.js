import React, { useState } from 'react';

const Solicitud = () => {
  const [motivo, setMotivo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  // Puedes agregar más estados para otros campos de la solicitud

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos de la solicitud
    console.log("Datos de la solicitud:", { motivo, descripcion });
  };

  return (
    <div>
      <h2>Solicitud</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Motivo de la solicitud:
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
        {/* Agrega más campos de la solicitud aquí */}
        <button type="submit">Enviar Solicitud</button>
      </form>
    </div>
  );
};

export default Solicitud;
