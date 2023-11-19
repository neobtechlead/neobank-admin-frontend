'use client'
import React from 'react';
import {Container, Select} from "@radix-ui/themes";

const SimpleSelect = () => {
    return (
        <Container>
            <Select.Root defaultValue="disbursements" size="3">
                <Select.Trigger radius="large" className="px-5 py-7 font-bold"/>
                <Select.Content>
                    <Select.Item value="disbursements">Disbursement</Select.Item>
                    <Select.Item value="collections">Collections</Select.Item>
                </Select.Content>
            </Select.Root>
        </Container>

    );
};

export default SimpleSelect;