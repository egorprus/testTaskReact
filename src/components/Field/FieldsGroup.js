import React from 'react';
import Field from './Field';

const FieldsGroup = ({title, data }) => {

    return (
        <div className="fields-group">
            <h2 className="fields-group_title">{title}</h2>
            {Object.keys(data).map((property, index) => {
                if (typeof data[property] !== 'object' && property !== 'id') {
                    return <Field key={index} property={property} value={data[property]} />
                }
                return <></>;
            })}
        </div>
    )
};

export default FieldsGroup;