import React from 'react';

const Option = ({ optionText, reqType, setReqType }) => {
  const isSelected = optionText === reqType;

  const handleOptionChange = () => {
    setReqType(optionText);
    console.log(reqType)
  };

  return (
    <option
      className={isSelected ? "selected" : ""}
      value={optionText} // Añadir el valor para el elemento option
      onChange={handleOptionChange} // Agregar el evento onChange
    >
      {optionText}
    </option>
  );
}

export default Option;

