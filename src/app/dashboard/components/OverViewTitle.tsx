import React from 'react';
import {Flex} from "@radix-ui/themes";
import TitledHeading from "@/components/TitledHeading";

const OverViewTitle = () => {
    return (
        <Flex direction="column" justify="center" className="ml-24 h-24">
            <TitledHeading className="text-white">Good Morning Admin!</TitledHeading>
        </Flex>
    );
};

export default OverViewTitle;