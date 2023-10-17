import DatosPersonalesForm from './DatosPersonalesForm';
import Seleccionador from './Seleccionador';
import Solicitud from './Solicitud';
import Queja from './Queja';
// ... (import Seleccionador, Solicitud, Queja if needed)

const Main = ({ nombre, setNombre, apellidoMaterno, setApellidoMaterno, apellidoPaterno, setApellidoPaterno, dni, setDni, direccion, setDireccion, telefono, setTelefono, reqType, setReqType }) => {
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
    