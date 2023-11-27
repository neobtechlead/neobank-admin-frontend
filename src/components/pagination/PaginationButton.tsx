import React from 'react';
import Image from "next/image";

interface Props {
    onClick: () => void
    disabled?: boolean
    icon: string
}

const PaginationButton = ({onClick, disabled = false, icon}: Props) => {
    return (
        <button style={{opacity: disabled ? 0.5 : 1}} onClick={onClick} disabled={disabled}>
            <Image src={icon} alt=""/>
        </button>
    );
};

export default PaginationButton;