import React from 'react';
import {Box} from "@radix-ui/themes";
import Login from "@/components/auth/Login";

const Page = () => {
    return (
        <Box className="w-screen h-screen">
            <Login/>
        </Box>
    );
};

export default Page;
