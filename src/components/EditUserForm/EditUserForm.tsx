import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormFieldsType, UserType } from '../../types';
import UserForm from '../UserForm';

interface EditUserFormProps {
    user: UserType,
    setUsers: Dispatch<SetStateAction<UserType[]>>,
    users: UserType[]
}

export const EditUserForm = ({user, setUsers, users}: EditUserFormProps) => {
    const navigate = useNavigate();
    const defaultFromFields = {
        username: user.username,
        name: user.name,
        website: user.website,
        phone: user.phone,
        email: user.email,
        company_name: user.company.name,
        catchPhrase: user.company.catchPhrase,
        lng: user.address.geo.lng,
        lat: user.address.geo.lat,
        zipcode: user.address.zipcode,
        suite: user.address.suite,
        street: user.address.street,
        bs: user.company.bs,
        city: user.address.city
    };

    const handleEdit = (form: FormFieldsType) => {
        const updatingUser = {
            id: user.id,
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
            }
        }
        const updatedUsers = users.map(user => user.id === updatingUser.id ? updatingUser : user)
        setUsers(updatedUsers);
        navigate(`/${user.id}`);
    }

    return user &&
        <UserForm defaultFromFields={defaultFromFields} handleSubmit={handleEdit} />
}