'use client'
import React from 'react';
import {Button} from "@radix-ui/themes";
import Image from "next/image";
import {color} from "@/utils/constants";

interface Props {
    label: string,
    icon: string,
    onClick: () => void,
    className?: string
}

const ButtonWithIcon = ({label, icon, className = "", onClick}: Props) => {
    return (
        <Button style={{backgroundColor: color.darkPurple, height: '100%'}}
                onClick={onClick}>
            <Image src={icon} alt={label} priority={true}/>
            {label}
        </Button>
    );
};

export default ButtonWithIcon;