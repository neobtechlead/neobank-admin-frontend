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

const FormSelectWithLabel = ({
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
        // your custom styles...
    };

    return (
        <div>
            <FormLabel name={name} label={label} required={required}/>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({field: {onChange, onBlur}}) => (
                    <Select
                        isLoading={isLoading}
                        required={required}
                        options={options}
                        defaultValue={defaultValue}
                        onChange={(selectedOption) => {
                            handleOnChange(selectedOption?.label);
                            onChange(selectedOption?.label)
                        }}
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

export default FormSelectWithLabel;
