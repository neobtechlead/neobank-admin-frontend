import React, {ReactNode} from 'react';
import Spinner from '@/components/Spinner';

interface Props {
    onClick?: () => void;
    overrideClassName?: string;
    children: ReactNode;
    type?: 'submit' | 'reset' | 'button';
    styleType?: 'primary' | 'secondary' | 'tertiary'; // Added 'tertiary'
    disabled?: boolean;
    isLoading?: boolean;
}

const SimpleButton = ({
                          onClick,
                          overrideClassName,
                          children,
                          disabled = false,
                          styleType = 'primary',
                          type = 'button',
                          isLoading = false,
                      }: Props) => {
    let buttonClasses = '';

    if (styleType === 'primary') {
        buttonClasses = 'bg-darkPurple-900 text-white hover:bg-purple-800';
    } else if (styleType === 'secondary') {
        buttonClasses = 'bg-neutral-100 text-darkPurple-900 hover:bg-neutral-200';
    } else if (styleType === 'tertiary') {
        buttonClasses = 'bg-white border-2 border-darkPurple-900 text-darkPurple-900 hover:bg-neutral-200';
    }

    const disabledClasses = disabled ? 'disabled:bg-darkPurple-800' : '';

    return (
        <button
            type={type}
            className={`flex items-center justify-center rounded-md font-black px-2 py-4 transition-all duration-300 ${buttonClasses} ${overrideClassName} ${disabledClasses}`}
            onClick={onClick}
            disabled={disabled}
        >
            {isLoading ? <Spinner/> : children}
        </button>
    );
};

export default SimpleButton;
