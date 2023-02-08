import React from 'react';

const Field = ({property, value }) => {

    return (
        <div className="field_wrapper">
            <h3 className="field_title">{property}:</h3>
            <span className="field_value">{value}</span>
        </div>
    )
};

export default Field;