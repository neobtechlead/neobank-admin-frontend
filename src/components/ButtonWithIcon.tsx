'use client'
import React from 'react';
import {Button} from "@radix-ui/themes";
import Image from "next/image";
import {color} from "@/utils/constants";

interface Props {
    label: string,
    icon: string,
    onClick: () => void,
    bgColor?: string
}

const ButtonWithIcon = ({label, icon, bgColor, onClick}: Props) => {
    return (

        <Button
            style={{
                backgroundColor: bgColor || color.darkPurple,
                height: '100%',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease', // Add a smooth transition for the shadow
            }}
            onClick={onClick}

        >
            <Image src={icon} alt={label} priority={true}/>
            {label}
        </Button>

    );
};

export default ButtonWithIcon;
