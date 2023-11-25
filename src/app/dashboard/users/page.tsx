import React from 'react';
import {Box, Heading} from "@radix-ui/themes";

const UserPage = () => {
    return (
        <Box className="flex flex-col items-center  mt-10 min-h-screen">
            <Box className="bg-darkPurple-900 text-white p-4">
                <Heading className="font-bold">Users HERE</Heading>
            </Box>
        </Box>
    )

};

export default UserPage;