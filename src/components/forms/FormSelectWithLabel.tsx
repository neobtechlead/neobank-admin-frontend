import React from 'react';
import Select from "react-select";
import {useFormContext} from "react-hook-form";
import {extractErrorMessage} from "@/utils/functions";


interface Props {
    name: string,
    label: string
    required?: boolean,
    isLoading?: boolean
    defaultValue: { value: string | number; label: string };
    options: { value: string; label: string }[];


}

const FormSelectWithLabel = ({
                                 options,
                                 defaultValue,
                                 name,
                                 label,
                                 isLoading,
                                 required

                             }: Props) => {

    const {setValue, formState: {errors}} = useFormContext()

    const handleOnChange = (selectedOption: any) => {
        setValue(name, selectedOption.label, {shouldValidate: true, shouldDirty: true, shouldTouch: true})
    }

    const borderStyle = "1px solid #ccc"

    const customStyles = {
        option: (defaultStyles: any, state: any) => ({
            ...defaultStyles,
            color: state.isSelected ? '#211F26' : "rgba(33,31,38,0.7)",
            backgroundColor: state.isSelected ? "#C4C4C4" : '#fff',


        }),
        dropdownIndicator: (defaultStyles: any) => ({
            ...defaultStyles,
            color: "#0000"
        }),
        control: (defaultStyles: any, state: any) => ({
            ...defaultStyles,
            color: "#c4c4c4",
            height: '100%',
            fontSize: "14px",
            border: state.isSelected || state.isFocused || state.isActive ? borderStyle : borderStyle,
            padding: "4px",
            boxShadow: 'none',
            backgroundColor: '#fff',
            outline: state.isSelected || state.isFocused || state.isActive ? "none" : "none"

        }),
        singleValue: (defaultStyles: any) => ({...defaultStyles, color: "#211F26"}),
    };

    return (
        <div>
            <label htmlFor={name} className="text-xs font-bold text-gray-600">{label}</label>
            <Select
                isLoading={isLoading}
                required={required}
                options={options}
                defaultValue={defaultValue}
                onChange={handleOnChange}
                name={name}
                styles={customStyles}
                components={{
                    IndicatorSeparator: () => null,
                }}/>
            <span className="text-xs text-red-700 text-left ">{extractErrorMessage(name, errors)}</span>
        </div>

    );
};

export default FormSelectWithLabel;
