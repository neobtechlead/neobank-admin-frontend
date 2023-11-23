import React from 'react';
import {Flex, Heading} from "@radix-ui/themes";

const OverViewTitle = () => {
    return (
        <Flex direction="column" justify="center" className="ml-24 h-24">
            <Heading className="text-white">Good Morning Admin!</Heading>
        </Flex>
    );
};

export default OverViewTitle;