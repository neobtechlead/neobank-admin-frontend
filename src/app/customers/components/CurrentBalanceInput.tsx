import React from 'react';

interface Props {
    label: string
    placeholder?: string
    name: string,
    value: string | number

}

const CurrentBalanceInput = ({label, placeholder, name, value}: Props) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={label} className="block text-xs font-bold text-gray-600">{label}</label>
            <div className="flex">
                <span
                    className="p-2 rounded-l-lg font-bold border bg-neutral-200">GHS</span>
                <input
                    disabled
                    value={value}
                    id={name}
                    placeholder={placeholder}
                    className="p-2 w-full border rounded-l-none rounded-lg focus:outline-none focus:bg-purple-100"
                />


            </div>
        </div>
    );
};

export default CurrentBalanceInput;