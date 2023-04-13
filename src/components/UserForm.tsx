import React, { FormEvent, SyntheticEvent, useState } from 'react';
import { FormFieldsType } from '../types';
import FormInput from './FormInput';

interface UserFormProps {
  handleSubmit: (formFields: FormFieldsType) => void,
  defaultFromFields: FormFieldsType
}

const UserForm = ({handleSubmit, defaultFromFields} : UserFormProps) => {
    const [formFields, setFormFields] = useState<FormFieldsType>(defaultFromFields);
    const {
      username,
      name,
      website,
      phone,
      email,
      company_name,
      bs,
      catchPhrase,
      city,
      street,
      zipcode,
      suite,
      lng,
      lat
    } = formFields;

    const handleChange = (event: SyntheticEvent) => {
      const { name: nameField, value } = event.target as HTMLInputElement;

      setFormFields({ ...formFields, [nameField]: value });
    }

    const formSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        handleSubmit(formFields); 
    };

  return (
    <main className="main">
      <form className="main-form" onSubmit={formSubmit}>
          <FormInput
            label="Login"
            type="text"
            required
            onChange={(event: SyntheticEvent) => handleChange(event)}
            name="username"
            value={username}
          />
          <FormInput
            label="Name"
            type="text"
            required
            onChange={(event: SyntheticEvent) => handleChange(event)}
            name="name"
            value={name}
          />
          <FormInput
            label="Website"
            type="text"
            required
            onChange={(event: SyntheticEvent) => handleChange(event)}
            name="website"
            value={website}
          />
          <FormInput
            label="Phone"
            type="text"
            required
            onChange={(event: SyntheticEvent) => handleChange(event)}
            name="phone"
            value={phone}
          />
          <FormInput
            label="Mail"
            type="text"
            required
            onChange={(event: SyntheticEvent) => handleChange(event)}
            name="email"
            value={email}
          />
          <FormInput
            label="Name"
            type="text"
            required
            onChange={(event: SyntheticEvent) => handleChange(event)}
            name="company_name"
            value={company_name}
          />
          <FormInput
            label="Catch phrase"
            type="text"
            required
            onChange={(event: SyntheticEvent) => handleChange(event)}
            name="catchPhrase"
            value={catchPhrase}
          />
          <FormInput
            label="BS"
            type="text"
            required
            onChange={(event: SyntheticEvent) => handleChange(event)}
            name="bs"
            value={bs}
          />
          <FormInput
            label="City"
            type="text"
            required
            onChange={(event: SyntheticEvent) => handleChange(event)}
            name="city"
            value={city}
          />
          <FormInput
            label="Street"
            type="text"
            required
            onChange={(event: SyntheticEvent) => handleChange(event)}
            name="street"
            value={street}
          />
          <FormInput
            label="Suite"
            type="text"
            required
            onChange={(event: SyntheticEvent) => handleChange(event)}
            name="suite"
            value={suite}
          />
          <FormInput
            label="Zipcode"
            type="text"
            required
            onChange={(event: SyntheticEvent) => handleChange(event)}
            name="zipcode"
            value={zipcode}
          />
          <div className="form-row">
            <FormInput
              label="lat"
              type="text"
              required
              onChange={(event: SyntheticEvent) => handleChange(event)}
              name="lat"
              value={lat}
            />
            <FormInput
              label="lng"
              type="text"
              required
              onChange={(event: SyntheticEvent) => handleChange(event)}
              name="lng"
              value={lng}
            />
          </div>
          <button className="form_btn" type="submit">Submit</button>
      </form>
    </main>
  )
}

export default UserForm;