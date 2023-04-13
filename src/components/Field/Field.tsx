import React from 'react';

interface FieldProps {
    property: string,
    value: string
}

const Field = ({property, value }: FieldProps) => {

    return (
        <div className="field_wrapper">
            <h3 className="field_title">{property}:</h3>
            <span className="field_value">{value}</span>
        </div>
    )
};

export default Field;