import React from 'react';
import Image from "next/image";
import Logo from "@/assets/svgs/CF Transact.svg";
import {Box, Heading, Text} from "@radix-ui/themes";

const LoginHeader = () => {
    return (
        <Box>
            <Image src={Logo} alt="CF Transact Logo" priority={true}/>
            <Box className="my-10">
                <Heading as="h3" className="text-xl font-semibold">Sign in to your account</Heading>
                <Text as="p" size="1" className="text-sm text-gray-400 py-1">
                    Log in to your CF Transact account and enjoy a smooth & seamless experience.
                </Text>
            </Box>

        </Box>
    );
};

export default LoginHeader;