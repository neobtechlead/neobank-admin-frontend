import React from 'react';
import Image from "next/image";
import {Box, Flex, Text} from "@radix-ui/themes";

interface Props {
    label: string,
    value: string | number,
    icon: string,
    overrideClassValue?: string

}

const IconWithStackedTextLabels = ({label, value, overrideClassValue, icon}: Props) => {
    return (
        <Flex align="center" gap="3">
            <Box>
                <Image src={icon} alt="" priority={true}/>
            </Box>
            <Flex direction="column" gap="1">
                <Text className="text-xs text-grey-900 font-semibold leading-4">{label}</Text>
                <Text className={`text-sm ${overrideClassValue}`}>{value}</Text>
            </Flex>

        </Flex>
    );
};

export default IconWithStackedTextLabels;