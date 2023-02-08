import React, { useEffect, useState } from 'react';
import FieldsGroup from '../Field/FieldsGroup';

const PrivateCabinet = ({user}) => {
    const [userInfo, setUserInfo] = useState(user);

    useEffect(() => {
        setUserInfo(user);
    }, [user]);

    if(!userInfo) return <></>;
    return (
        <main className="main">
            <article className="user-info">
                <FieldsGroup title="user" data={userInfo} />
                <FieldsGroup title="company" data={userInfo.company} />
                <FieldsGroup title="address" data={userInfo.address} />
                <FieldsGroup title="geo" data={userInfo.address.geo} />
            </article>
        </main>
    )
};

export default PrivateCabinet;