import React from 'react';
import Field from './Field';

interface FieldsGroupProps {
    title: string,
    data: {
        [property: string]: string
    }
}

const FieldsGroup = ({title, data }: FieldsGroupProps) => {
    return (
        <div className="fields-group">
            <h2 className="fields-group_title">{title}</h2>
            {Object.keys(data).map((property, index) => {
                if (typeof data[property] !== 'object' && property !== 'id') {
                    return <Field key={index} property={property} value={data[property]} />
                }
                return null;
            })}
        </div>
    )
};

export default FieldsGroup;