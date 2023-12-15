import React from 'react';

interface Props {
    name: string,
    label: string,
    required?: boolean

}

const FormLabel = ({name, label, required}: Props) => {
    return (
        <>
            <label htmlFor={name} className="text-xs font-bold text-gray-600">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
        </>
    );
};

export default FormLabel;