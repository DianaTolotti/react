import React from 'react';
import InputMask from 'react-input-mask';
import '../src/components/formadd/Form.css'

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const MaskedInput = ({ value, onChange, name, mask }) => {
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: onlyNumbers(event.target.value)
      }
    });
  }

  return (
    <InputMask className="Form-Field" 
      name={name}
      mask={mask}
      value={value}
      onChange={handleChange}
    />
  );
};

export default MaskedInput;
