import React from 'react'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form_input">
      <label>{label}</label>
      <input {...otherProps} />
    </div>
  )
}

export default FormInput;