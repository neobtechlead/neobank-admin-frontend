import React from 'react';
import {Box} from "@radix-ui/themes";

const CustomerInfoLoader = () => {
    return (
        <Box className="overflow-auto h-full flex flex-col justify-center items-center">
            <Box className="animate-spin rounded-full border-t-2 border-b-2 border-darkPurple-900 h-12 w-12"></Box>
        </Box>
    );
};

export default CustomerInfoLoader;