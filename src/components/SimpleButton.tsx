'use client'
import React, {ReactNode} from 'react';

interface Props {
    onClick: () => void;
    className?: string;
    children: ReactNode;
    type?: 'primary' | 'secondary';
}

const SimpleButton = ({onClick, className, children, type = 'primary'}: Props) => {
    const buttonClasses =
        type === 'primary'
            ? 'bg-darkPurple-900 text-white hover:bg-purple-800'
            : 'bg-neutral-100 text-darkPurple-900 hover:bg-neutral-200'

    return (
        <button
            className={`flex items-center justify-center  rounded-md font-black px-2 py-4 transition-all duration-300 ${buttonClasses} ${className}`}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default SimpleButton;
