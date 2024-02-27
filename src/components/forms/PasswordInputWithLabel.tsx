import React, {useState} from "react";
import FormLabel from "@/components/forms/FormLabel";

import {FaEye, FaEyeSlash} from "react-icons/fa";
import {UseFormRegister} from "react-hook-form";


interface Props {
    label: string;
    error?: string
    name: string;
    isDirty?: boolean
    placeholder?: string;
    register: UseFormRegister<any>
    required?: boolean
    extraLabelClassName?: string
    overrideClassName?: string

}

interface EyeProps {
    onClick: () => void
    isEyeOpen: boolean
}

const Eye = ({onClick, isEyeOpen}: EyeProps) => {
    return (
        <button type="button" className="absolute right-2 top-1/3 cursor-pointer" onClick={onClick}>
            {isEyeOpen ? <FaEye/> : <FaEyeSlash/>}
        </button>
    );
};


const PasswordInputWithLabel = ({
                                    isDirty,
                                    label,
                                    name,
                                    extraLabelClassName,
                                    required,
                                    error,
                                    overrideClassName,
                                    placeholder = "",
                                    register
                                }: Props) => {
    const [showPassword, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col gap-1">
            <FormLabel name={name} label={label} required={required} overrideClassName={extraLabelClassName}/>
            <div className="relative">
                <input id={name}
                       type={showPassword ? "text" : "password"}
                       {...register(name)}
                       placeholder={placeholder}
                       className={`p-2 w-full border border-gray-300 rounded-lg  focus:outline-none focus:bg-purple-100 ${overrideClassName}`}
                />
                {isDirty && <Eye isEyeOpen={showPassword} onClick={togglePasswordVisibility}/>}
            </div>

            {error && <span className="text-xs text-red-700 text-left ">{error}</span>}
        </div>

    );
};

export default PasswordInputWithLabel;






