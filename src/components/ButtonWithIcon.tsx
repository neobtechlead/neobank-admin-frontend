import React from 'react';
import Image from "next/image";


interface Props {
    label: string;
    icon?: string;
    onClick: () => void;
    className?: string;
}

const ButtonWithIcon = ({label, icon, onClick, className}: Props) => {
    return (
        <button
            className={`flex items-center  font-black px-4 py-2 bg-darkPurple-900 hover:bg-purple-800 text-white rounded-sm ${className}`}
            onClick={onClick}
        >
            {icon && (
                <div className="mr-2 font-bold">
                    <Image src={icon} alt=""/>
                </div>
            )}
            {label}
        </button>
    );
};

export default ButtonWithIcon;