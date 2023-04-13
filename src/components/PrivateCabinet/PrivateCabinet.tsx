import React, { useEffect, useState } from 'react';
import { FormFieldsType, UserType } from '../../types';
import FieldsGroup from '../Field/FieldsGroup';

interface PrivateCabinetProps {
    user: UserType
}
export const PrivateCabinet = ({user}: PrivateCabinetProps) => {
    const [userInfo, setUserInfo] = useState(user);

    useEffect(() => {
        setUserInfo(user);
    }, [user]);

    if(!userInfo) return <></>;

    return (
        <main className="main">
            <article className="user-info">
                <FieldsGroup title="User" data={userInfo} />
                <FieldsGroup title="Company" data={userInfo.company} />
                <FieldsGroup title="Address" data={userInfo.address} />
                <FieldsGroup title="Geo" data={userInfo.address.geo} />
            </article>
        </main>
    )
};