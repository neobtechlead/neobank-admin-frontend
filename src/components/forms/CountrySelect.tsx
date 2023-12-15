import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import {CountryDropdown} from "react-country-region-selector";
import {extractErrorMessage} from "@/utils/functions";
import useFormStores from "@/stores/form/merchant";
import FormLabel from "@/components/forms/FormLabel";


interface Props {
    name: string,
    label: string
    required?: boolean
}

const CountrySelect = ({name, label, required}: Props) => {

    const {updateSelectedCountry} = useFormStores()
    const {control, setValue, formState: {errors}} = useFormContext();
    return (
        <div className="flex flex-col gap-1">
            <FormLabel name={name} label={label} required={required}/>
            <Controller
                name={name}
                control={control}
                render={({field: {onChange, onBlur, name, value, ref}}) => (
                    <CountryDropdown
                        onChange={(value) => {
                            updateSelectedCountry(value)
                            onChange(value)
                        }}
                        id={name}
                        value={value}
                        name={name}
                        onBlur={onBlur}
                        ref={ref}
                        classes="p-3 w-full border border-gray-300 rounded-lg"
                    />
                )}
            />
            <span className="text-xs text-red-500 text-left">{extractErrorMessage(name, errors)}</span>
        </div>
    );
};

export default CountrySelect;