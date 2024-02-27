import React from 'react';
import FormLabel from "@/components/forms/FormLabel";


interface Props {
    label: string;
    name: string;
    required?: boolean
    value?: string
    disabled?: boolean
    extraLabelClassName?: string
    overrideClassName?: string

}

const SimpleTextInputWithLabel = ({
                                      label,
                                      name,
                                      value,
                                      required,
                                      disabled,
                                      extraLabelClassName,
                                      overrideClassName,


                                  }: Props) => {
    return (
        <div className="flex flex-col gap-1">
            <FormLabel name={name} label={label} required={required} overrideClassName={extraLabelClassName}/>
            <input id={name}
                   disabled={disabled}
                   value={value}
                   className={`p-4 w-full text-sm  rounded-lg  focus:outline-none bg-cyan-350 ${overrideClassName}`}
            />
        </div>
    );
};

export default SimpleTextInputWithLabel;