import React, { useState } from 'react';

const Queja = () => {
  const [motivo, setMotivo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  // Puedes agregar más estados para otros campos de la queja

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos de la queja
    console.log("Datos de la queja:", { motivo, descripcion });
  };

  return (
    <div>
      <h2>Queja</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Motivo de la queja:
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
        <button type="submit">Enviar Queja</button>
      </form>
    </div>
  );
};

export default Queja;