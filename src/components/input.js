import React from 'react';

function Input(props){
  const { type, onChange, className, placeholder, name, value } = props;

  return(
    <input 
      type={type} 
      onChange={(e) => onChange(e.target.value)} 
      className={`w-full border-1 border-gray-200 border-2 p-3 ${className}`}
      placeholder={placeholder}
      name={name}
      value={value}
      {...props}
    />
  )
}

export default React.memo(Input);