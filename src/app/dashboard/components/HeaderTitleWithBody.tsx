import React from 'react';
import {Flex, Text} from "@radix-ui/themes";
import TitledHeading from "@/components/TitledHeading";

interface Props {
    title: string
    body: string
}

const HeaderTitleWithBody = ({title, body}: Props) => {
    return (
        <Flex direction="column" justify="center" className="ml-24 h-36">
            <TitledHeading>{title}</TitledHeading>
            <Text>{body}</Text>
        </Flex>
    );
};

export default HeaderTitleWithBody;