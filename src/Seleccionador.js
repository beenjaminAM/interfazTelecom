import Option from "./Option";

const Seleccionador = ({reqType, setReqType}) => {
    return(
        // <form onSubmit={(e) => e.preventDefault()}>
            
        // </form>
		<select className="form-control" id="select1">
            <Option
                optionText = {"Select"}
                reqType = {reqType}
                setReqType = {setReqType}
            />
            <Option
                optionText = {"Solicitud"}
                reqType = {reqType}
                setReqType = {setReqType}
            />
            <Option
                optionText = {"Queja"}  
                reqType = {reqType}
                setReqType = {setReqType}
            />
		</select>    
    )
};

export default Seleccionador;