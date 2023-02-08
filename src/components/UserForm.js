import React, { useState } from 'react';
import FormInput from './FormInput';

const UserForm = ({handleSubmit, defaultFromFields}) => {
    const [formFields, setFormFields] = useState(defaultFromFields);
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

    const handleChange = (event) => {
      const { name, value } = event.target;

      setFormFields({ ...formFields, [name]: value });
    }

    const formSubmit = (event) => {
        event.preventDefault();

        handleSubmit(formFields); 
    };

  return (
    <form className="main-form" onSubmit={formSubmit}>
        <FormInput
          label="Login"
          type="text"
          required
          onChange={handleChange}
          name="username"
          value={username}
        />
        <FormInput
          label="Name"
          type="text"
          required
          onChange={handleChange}
          name="name"
          value={name}
        />
        <FormInput
          label="Website"
          type="text"
          required
          onChange={handleChange}
          name="website"
          value={website}
        />
        <FormInput
          label="Phone"
          type="text"
          required
          onChange={handleChange}
          name="phone"
          value={phone}
        />
        <FormInput
          label="Mail"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Name"
          type="text"
          required
          onChange={handleChange}
          name="company_name"
          value={company_name}
        />
        <FormInput
          label="catch phrase"
          type="text"
          required
          onChange={handleChange}
          name="catchPhrase"
          value={catchPhrase}
        />
        <FormInput
          label="BS"
          type="text"
          required
          onChange={handleChange}
          name="bs"
          value={bs}
        />
        <FormInput
          label="City"
          type="text"
          required
          onChange={handleChange}
          name="city"
          value={city}
        />
        <FormInput
          label="street"
          type="text"
          required
          onChange={handleChange}
          name="street"
          value={street}
        />
        <FormInput
          label="suite"
          type="text"
          required
          onChange={handleChange}
          name="suite"
          value={suite}
        />
        <FormInput
          label="zipcode"
          type="text"
          required
          onChange={handleChange}
          name="zipcode"
          value={zipcode}
        />
        <FormInput
          label="lat"
          type="text"
          required
          onChange={handleChange}
          name="lat"
          value={lat}
        />
        <FormInput
          label="lng"
          type="text"
          required
          onChange={handleChange}
          name="lng"
          value={lng}
        />
        <button type="submit">Submit</button>
    </form>
  )
}

export default UserForm;