import React from 'react';
import {useFormContext} from "react-hook-form";
import {extractErrorMessage} from "@/utils/functions";
import FormLabel from "@/components/forms/FormLabel";

interface Props {
    name: string,
    label: string,
    required?: boolean
}


const FormDatePickerWithLabel = ({name, label, required}: Props) => {

    const {register, formState: {errors}} = useFormContext()
    return (
        <div className="flex flex-col gap-1">
            <FormLabel name={name} label={label} required={required}/>
            <input type="date" id={name}
                   className="px-2 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:bg-purple-100" {...register(name)}/>
            <span className="text-xs text-red-700 text-left ">{extractErrorMessage(name, errors)}</span>
        </div>
    );
};

export default FormDatePickerWithLabel;