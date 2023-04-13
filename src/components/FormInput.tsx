import React, { SyntheticEvent } from 'react'

interface FormInputProps {
  label: string,
  type?:"text"
  required?: boolean
  onChange?: (event: SyntheticEvent) => void
  name?: string
  value?: string
}

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  return (
    <div className="form_input-wrapper">
      <label className="form_input-label">{label}</label>
      <input className="form_input" {...otherProps} />
    </div>
  )
}

export default FormInput;