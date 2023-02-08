import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../UserForm';



const EditUserForm = ({user, setUsers, users}) => {
    const defaultFromFields = {
        username: user.username,
        name: user.name,
        website: user.website,
        phone: user.phone,
        email: user.phone,
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
    const navigate = useNavigate();
    useEffect(() => {

    }, []);

    const handleEdit = (form) => {
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
        navigate('/');
    }

    return user &&
        <UserForm setUsers={setUsers} users={users}  defaultFromFields={defaultFromFields} handleSubmit={handleEdit} />
}

export default EditUserForm;