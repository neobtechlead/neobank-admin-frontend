'use client'
import React from 'react';
import Select from 'react-select';


interface Props {
    defaultValue: { value: string | number; label: string };
    options: { value: string; label: string }[];
    onSelectChange?: (value: any) => void
    placeholder?: string,
    backgroundColor?: string,
    padding?: string,
    color?: string


}

const CustomSelect = ({
                          options,
                          defaultValue,
                          placeholder = "",
                          onSelectChange,
                          backgroundColor = "#652D90",
                          color = "#652D90",
                          padding = "8px"
                      }: Props) => {

    const borderStyle = `2px solid ${color}`

    const customStyles = {
        option: (defaultStyles: any, state: any) => ({
            ...defaultStyles,
            color: state.isSelected ? '#fff' : color,
            backgroundColor: state.isSelected ? backgroundColor : '#fff',

        }),
        dropdownIndicator: (defaultStyles: any) => ({
            color: color
        }),
        control: (defaultStyles: any, state: any) => ({
            ...defaultStyles,
            color: color,
            fontWeight: 'bold',
            height: '100%',
            border: `${borderStyle}`,
            padding: padding,
            boxShadow: 'none',
            '&:hover': {
                border: `${borderStyle}`
            },
            backgroundColor: '#fff',
            outline: 'none',
        }),
        singleValue: (defaultStyles: any) => ({...defaultStyles, color: color}),
    };

    return (
        <Select
            instanceId={1} //hack to fix the hydration error
            options={options}
            onChange={onSelectChange}
            defaultValue={defaultValue}
            placeholder={placeholder}
            styles={customStyles}
            components={{
                IndicatorSeparator: () => null,
            }}

        />
    );
};

export default CustomSelect;
