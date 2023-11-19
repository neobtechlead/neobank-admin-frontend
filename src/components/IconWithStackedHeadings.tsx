import React from 'react';
import {Flex, Text} from "@radix-ui/themes";
import Image from "next/image";
import TitledHeading from "@/components/TitledHeading";

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
                <TitledHeading>{content}</TitledHeading>
            </Flex>

        </Flex>
    );
};

export default IconWithStackedHeadings;