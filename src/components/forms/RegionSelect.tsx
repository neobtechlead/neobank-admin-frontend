import React from 'react';
import {RegionDropdown} from 'react-country-region-selector';
import {Controller, useFormContext} from 'react-hook-form';
import useFormStores from '@/stores/form/merchant';
import {extractErrorMessage} from '@/utils/functions';
import FormLabel from "@/components/forms/FormLabel";

interface Props {
    name: string;
    label: string;
    required?: boolean
}

const RegionSelect = ({name, label, required}: Props) => {
    const {control, setValue, formState: {errors}} = useFormContext();
    const {selectedCountry} = useFormStores();

    return (
        <div className="flex flex-col gap-1">
            <FormLabel name={name} label={label} required={required}/>
            <Controller
                name={name}
                control={control}
                render={({field: {onChange, onBlur, name, value, ref}}) => (
                    <RegionDropdown
                        onChange={onChange}
                        disableWhenEmpty={true}
                        id={name}
                        value={value}
                        name={name}
                        country={selectedCountry}
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

export default RegionSelect;
