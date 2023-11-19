import React from 'react';
import {Flex, Text} from "@radix-ui/themes";
import Image from "next/image";

interface Props {
    label: string,
    icon: string
}

const IconWithLabel = ({label, icon}: Props) => {
    return (
        <Flex gap="1" justify="center" align="center" className="text-sm text-gray-900">
            <Image src={icon} width={20} height={20} alt={label} style={{width: "auto", height: "auto"}}/>
            <Text>{label}</Text>
        </Flex>
    );
};

export default IconWithLabel;