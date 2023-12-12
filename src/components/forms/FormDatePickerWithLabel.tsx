import React from 'react';
import {useFormContext} from "react-hook-form";
import {extractErrorMessage} from "@/utils/functions";

interface Props {
    name: string,
    label: string
}


const FormDatePickerWithLabel = ({name, label}: Props) => {

    const {register, formState: {errors}} = useFormContext()
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-xs font-bold text-gray-600">{label}</label>
            <input type="date" id={name}
                   className="px-2 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:bg-purple-100" {...register(name)}/>
            <span className="text-xs text-red-700 text-left ">{extractErrorMessage(name, errors)}</span>
        </div>
    );
};

export default FormDatePickerWithLabel;