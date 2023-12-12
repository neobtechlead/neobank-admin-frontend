import React, {useState} from 'react';
import {RegionDropdown} from "react-country-region-selector";
import {useFormContext} from "react-hook-form";
import useFormStores from "@/stores/form/merchant";
import {extractErrorMessage} from "@/utils/functions";

interface Props {
    name: string,
    label: string
}

const RegionSelect = ({name, label}: Props) => {
    const {setValue, formState: {errors}} = useFormContext()

    const {selectedCountry} = useFormStores()

    const [value, updateValue] = useState("")

    const handleOnChange = (value: string) => {
        updateValue(value)
        setValue(name, value, {shouldValidate: true, shouldTouch: true, shouldDirty: true})

    }
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-xs font-bold text-gray-600">{label}</label>
            <RegionDropdown
                country={selectedCountry}
                value={value}
                onChange={handleOnChange}
                classes="p-3 w-full border border-gray-300 rounded-lg"/>
            {<span className="text-xs text-red-700 text-left ">{extractErrorMessage(name, errors)}</span>}
        </div>
    );
};

export default RegionSelect;