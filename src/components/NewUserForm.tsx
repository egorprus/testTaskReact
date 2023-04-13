import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormFieldsType, UserType } from '../types';
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

interface NewUserFormProps {
    setUsers: Dispatch<SetStateAction<UserType[]>>,
    users: UserType[]
}

export const NewUserForm = ({ setUsers, users}: NewUserFormProps) => {
    const navigate = useNavigate();
    const handleCreate = (form: FormFieldsType) => {
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
            id: users.length ? users[users.length - 1].id + 1 : 1
        }
        setUsers(users.concat([newUser]));
        navigate('/');
    };

    return (
        <>
            <UserForm defaultFromFields={defaultFromFields} handleSubmit={handleCreate} />
        </>
    )
};