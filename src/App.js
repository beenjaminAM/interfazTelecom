import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {

  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [dni, setDni] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [reqType, setReqType] = useState('Select'); 
  return (
    <div className="App">
      <Header
        title={"Solicitudes y reclamos"}
      /> 
      <Main
        nombre={nombre}
        setNombre={setNombre}
        apellidoMaterno={apellidoMaterno}
        setApellidoMaterno={setApellidoMaterno}
        apellidoPaterno={apellidoPaterno}
        setApellidoPaterno={setApellidoPaterno}
        dni={dni}
        setDni={setDni}
        direccion={direccion}
        setDireccion={setDireccion}
        telefono={telefono}
        setTelefono={setTelefono}
        reqType={reqType}
        setReqType={setReqType}
      />
    </div>
  );
}

export default App;
