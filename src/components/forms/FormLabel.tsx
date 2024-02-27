import React from 'react';

interface Props {
    name: string,
    label: string,
    overrideClassName?: string
    required?: boolean

}

const FormLabel = ({name, label, overrideClassName, required}: Props) => {
    return (
        <>
            <label htmlFor={name} className={`text-xs font-bold text-gray-600 ${overrideClassName}`}>
                {label} {required && <span className="text-red-500">*</span>}
            </label>
        </>
    );
};

export default FormLabel;