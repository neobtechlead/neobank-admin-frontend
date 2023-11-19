import React from 'react';
import {Flex, Heading, Text} from "@radix-ui/themes";

interface Props {
    title: string
    body: string
}

const HeaderTitleWithBody = ({title, body}: Props) => {
    return (
        <Flex direction="column" justify="center" className="ml-24 h-36">
            <Heading>{title}</Heading>
            <Text>{body}</Text>
        </Flex>
    );
};

export default HeaderTitleWithBody;