import React from 'react';
import {UseFormRegister} from "react-hook-form";
import FormLabel from "@/components/forms/FormLabel";


interface Props {
    label: string;
    error?: string
    name: string;
    type?: string,
    placeholder?: string;
    register: UseFormRegister<any>
    required?: boolean
    extraLabelClassName?: string
    overrideClassName?: string

}

const TextInputWithLabel = ({
                                label,
                                name,
                                extraLabelClassName,
                                required,
                                error,
                                overrideClassName,
                                type = "text",
                                placeholder = "",
                                register
                            }: Props) => {
    return (
        <div className="flex flex-col gap-1">
            <FormLabel name={name} label={label} required={required} overrideClassName={extraLabelClassName}/>
            <input id={name}
                   type={type}
                   {...register(name)}
                   placeholder={placeholder}
                   className={`p-2 w-full border border-gray-300 rounded-lg  focus:outline-none focus:bg-purple-100 ${overrideClassName}`}
            />
            {error && <span className="text-xs text-red-700 text-left ">{error}</span>}
        </div>
    );
};

export default TextInputWithLabel;