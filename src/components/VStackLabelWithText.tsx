import React from 'react';
import {Box, Flex, Text} from "@radix-ui/themes";

interface Props {
    label: string,
    description: string
}

const VStackLabelWithText = ({label, description}: Props) => {
    return (
        <Flex direction="column">
            <Text className="text-grey-900 text-xs font-black">{label}</Text>
            <Text>{description}</Text>
        </Flex>
    );
};

export default VStackLabelWithText;