import React from 'react';
import Select from 'react-select';
import {Controller, useFormContext} from 'react-hook-form';
import {extractErrorMessage} from '@/utils/functions';
import FormLabel from "@/components/forms/FormLabel";

interface Props {
    name: string;
    label: string;
    required?: boolean;
    isLoading?: boolean;
    defaultValue: { value: string | number; label: string };
    options: { value: string; label: string }[];
}

const SelectWithLabel = ({
                             options,
                             defaultValue,
                             name,
                             label,
                             isLoading,
                             required,

                         }: Props) => {
    const {control, setValue, formState: {errors}} = useFormContext();

    const handleOnChange = (selectedOption: any) => {
        setValue(name, selectedOption, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    };

    const borderStyle = '1px solid #ccc';

    const customStyles = {
        option: (defaultStyles: any, state: any) => ({
            ...defaultStyles,
            color: state.isSelected ? '#fff' : '#652D90',
            backgroundColor: state.isSelected ? '#652D90' : '#fff',

        }),
        dropdownIndicator: (defaultStyles: any) => ({
            color: "#000"
        }),

        control: (defaultStyles: any, state: any) => ({
            ...defaultStyles,
            color: '#652D90',
            border: `${borderStyle}`,
            borderRadius: "8px",
            padding: "6px 0px",
            boxShadow: 'none',
            '&:hover': {
                border: `${borderStyle}`
            },
            backgroundColor: '#fff',
            outline: 'none',
        }),
        singleValue: (defaultStyles: any) => ({...defaultStyles, color: "#000"}),
    };

    return (
        <div className="flex flex-col gap-1">
            <FormLabel name={name} label={label} required={required}/>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({field: {onChange, onBlur, value}}) => (
                    <Select
                        isLoading={isLoading}
                        required={required}
                        options={options}
                        defaultValue={defaultValue}
                        onChange={onChange}
                        value={value}
                        onBlur={onBlur}
                        name={name}
                        styles={customStyles}
                        components={{
                            IndicatorSeparator: () => null,
                        }}
                    />
                )}
            />
            <span className="text-xs text-red-700 text-left">{extractErrorMessage(name, errors)}</span>
        </div>
    );
};

export default SelectWithLabel;
