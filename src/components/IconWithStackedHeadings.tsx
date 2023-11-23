import React from 'react';
import {Flex, Heading, Text} from "@radix-ui/themes";
import Image from "next/image";

interface Props {
    icon: string,
    title: string,
    content: string,


}

const IconWithStackedHeadings = ({icon, title, content}: Props) => {
    return (
        <Flex align="center" justify="center" gap="2">
            <Image src={icon} alt={title}/>
            <Flex direction="column" gap="2">
                <Text>{title}</Text>
                <Heading>{content}</Heading>
            </Flex>

        </Flex>
    );
};

export default IconWithStackedHeadings;