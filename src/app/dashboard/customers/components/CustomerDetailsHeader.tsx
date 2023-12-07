import React from 'react';
import {Box, Flex, Heading, Text} from "@radix-ui/themes";

const CustomerDetailsHeader = () => {
    return (
        <Box className="bg-darkPurple-900 p-4">
            <Box className="p-5 bg-[url('/assets/svgs/PurpleSVG.svg')] text-white">
                <Flex gap="3" direction="column">
                    <Heading>Customer Information</Heading>
                    <Text as="p" className="text-xs text-gray-200 ">
                        You can see the details of this transaction. Lorem Ipsum lawal You can see the details of this
                        transaction. Lorem Ipsum lawal You can see the details of this transaction. Lorem Ipsum lawal
                        You can see the details of this transaction. Lorem Ipsum lawal
                    </Text>
                </Flex>

            </Box>
        </Box>
    );
};

export default CustomerDetailsHeader;