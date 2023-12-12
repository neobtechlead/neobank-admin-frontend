import React from 'react';
import {UseFormRegister} from "react-hook-form";


interface Props {
    label: string;
    error?: string
    name: string;
    placeholder?: string;
    register: UseFormRegister<any>
    overrideClassName?: string

}

const TextInputWithLabel = ({label, name, error, overrideClassName, placeholder = "", register}: Props) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-xs font-bold text-gray-600">{label}</label>
            <input id={name}
                   {...register(name)}
                   placeholder={placeholder}
                   className={`p-2 w-full border border-gray-300 rounded-lg  focus:outline-none focus:bg-purple-100 ${overrideClassName}`}
            />
            {error && <span className="text-xs text-red-700 text-left ">{error}</span>}
        </div>
    );
};

export default TextInputWithLabel;