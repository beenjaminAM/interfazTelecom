import React, { useState } from 'react';
import DatosPersonalesForm from './DatosPersonalesForm';
import Seleccionador from './Seleccionador';
import Solicitud from './Solicitud';
import Queja from './Queja';
// ... (import Seleccionador, Solicitud, Queja if needed)

const Main = () => {
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [dni, setDni] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [reqType, setReqType] = useState('Select');

  return (
    <main>
      <DatosPersonalesForm
        nombre={nombre}
        setNombre={setNombre}
        apellidoPaterno={apellidoPaterno}
        setApellidoPaterno={setApellidoPaterno}
        apellidoMaterno={apellidoMaterno}
        setApellidoMaterno={setApellidoMaterno}
        dni={dni}
        setDni={setDni}
        direccion={direccion}
        setDireccion={setDireccion}
        telefono={telefono}
        setTelefono={setTelefono}
        />
        <Seleccionador 
            reqType={reqType} setReqType={setReqType}   
        />
      {reqType === "Solicitud" && <Solicitud />}
      {reqType === "Queja" && <Queja />}        

      {/* Renderizar Seleccionador, Solicitud o Queja aquí */}
    </main>

  );
};

export default Main;
