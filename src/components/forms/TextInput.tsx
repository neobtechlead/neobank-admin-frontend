import React, {ChangeEvent, useState} from 'react';
import Svg from '@/components/Svg';
import {EyeOpened, EyeClosed} from '../../../public/assets/icons/eye';

interface InputProps {
    label: string;
    id: string;
    name: string;
    type: string;
    autoComplete: string;
    required: boolean;
    placeholder?: string;
    onInputChange: (event: object) => void;
    hasError: (value: boolean) => void;
    passwordIcon?: boolean;
}

const TextInput: React.FC<InputProps> = ({
                                             label,
                                             id,
                                             name,
                                             type,
                                             autoComplete,
                                             required,
                                             placeholder,
                                             onInputChange,
                                             hasError,
                                             passwordIcon,
                                             height = 56
                                         }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(null);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        if (inputValue !== '') handleBlur();
        onInputChange(event);
    };

    const handleBlur = () => {
        if (inputValue === '' && required) {
            setError(`${capitalize(type)} is required!`);
            hasError(true);
        } else if (type === 'email' && !isValidEmail(inputValue)) {
            setError('Please enter a valid email address.');
            hasError(true);
        } else {
            setError('');
            hasError(false);
        }
    };

    const capitalize = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1);

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const togglePassword = () => {
        return setShowPassword(!showPassword);
    };

    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900 capitalize">
                {label}
            </label>
            <div className=" mt-2 flex flex-col gap-y-2">
                <div className="sm:col-span-3">
                    <div className="mt-2 relative">
                        <input
                            id={id}
                            name={name}
                            type={showPassword ? 'text' : type}
                            autoComplete={autoComplete}
                            placeholder={placeholder}
                            onBlur={handleBlur}
                            onInput={handleInputChange}
                            className={`block w-full rounded-md border py-1.5 px-3 text-gray-900 shadow-sm
                                border-gray-300 placeholder:text-gray-400 focus:outline-none
                                sm:text-sm sm:leading-6 ${error ? 'border-red-400' : 'focus:border-purple-900'} h-[${height}px] h-[56px]`}
                        />

                        {type === 'password' && passwordIcon && (
                            <div
                                className="absolute inset-y-0 right-1 flex items-center cursor-pointer bg-white m-2"
                                onClick={togglePassword}
                            >
                                <Svg fill={error ? "#F87171" : "#4F4F4F"} path={showPassword ? EyeClosed : EyeOpened}
                                     customClasses=""/>
                            </div>
                        )}
                    </div>
                    {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default TextInput;