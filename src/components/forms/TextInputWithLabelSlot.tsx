import React from 'react';
import {UseFormRegister} from "react-hook-form";

interface Props {
    label: string;
    name: string;
    error?: string
    placeholder?: string;
    register: UseFormRegister<any>

}

const TextInputWithLabelSlot = ({label, name, error, placeholder = "", register}: Props) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={label} className="block text-xs font-bold text-gray-600">{label}</label>
            <div className="flex">
                <span
                    className="p-2 rounded-l-lg font-bold border bg-neutral-200">GHS</span>
                <input
                    id={name}
                    {...register(name, {valueAsNumber: true})}
                    placeholder={placeholder}
                    className="p-2 w-full border rounded-l-none rounded-lg focus:outline-none focus:bg-purple-100"
                />


            </div>
            {error && <span className="text-xs text-red-700 text-left ">{error}</span>}


        </div>
    );
};

export default TextInputWithLabelSlot;