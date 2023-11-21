'use client'
import React from 'react';
import {Button} from "@radix-ui/themes";
import Image from "next/image";

interface Props {
    label: string,
    icon: string,
    onClick: () => void,
    className?: string
}

const ButtonWithIcon = ({label, icon, className = "", onClick}: Props) => {
    return (
        <Button
            onClick={onClick}
            className={`px-4 py-7 cursor-pointer hover:bg-opacity-80 transition-all duration-300 ease-in-out ${className}`}>
            <Image src={icon} alt={label} priority={true}/>
            {label}
        </Button>
    );
};

export default ButtonWithIcon;