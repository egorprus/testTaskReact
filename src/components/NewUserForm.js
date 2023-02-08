import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';
const defaultFromFields = {
    username: '',
    name: '',
    website: '',
    phone: '',
    email: '',
    company_name: '',
    catchPhrase: '',
    lng: '',
    lat: '',
    zipcode: '',
    suite: '',
    street: '',
    bs: '',
    city: ''
};

const NewUserForm = ({ setUsers, users}) => {
    const navigate = useNavigate();
    const handleCreate = (form) => {
        const newUser = {
            website: form.website,
            username: form.username,
            phone: form.phone,
            name: form.name,
            email: form.email,
            company: {
                name: form.company_name,
                catchPhrase: form.catchPhrase,
                bs: form.bs
            },
            address: {
                city: form.city,
                street: form.street,
                suite: form.suite,
                zipcode: form.zipcode,
                geo: {
                    lat: form.lat,
                    lng: form.lng
                }
            },
            id: users[users.length - 1].id + 1
        }
        setUsers(users.concat([newUser]));
        navigate('/');
    };

    return (
        <>
            <UserForm defaultFromFields={defaultFromFields} handleSubmit={handleCreate} />
        </>
    )
}

export default NewUserForm;