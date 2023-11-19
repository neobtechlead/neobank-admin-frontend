import React from 'react';
import {Container, Select} from '@radix-ui/themes';

interface BasicSelectProps {
    defaultValue?: string;
    options: { value: string; label: string }[];
    onSelectChange?: (value: string) => void;
    className?: string;
}

const BasicSelect: React.FC<BasicSelectProps> = ({
                                                     defaultValue = '',
                                                     options,
                                                     onSelectChange,
                                                     className,
                                                 }) => {
    return (
        <Container>
            <Select.Root defaultValue={defaultValue} onValueChange={onSelectChange}>
                <Select.Trigger radius="large" className={`${className}`}/>
                <Select.Content>
                    {options.map((option) => (
                        <Select.Item key={option.value} value={option.value}>
                            {option.label}
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select.Root>
        </Container>
    );
};

export default BasicSelect;
