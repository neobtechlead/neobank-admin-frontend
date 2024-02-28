import React, {PropsWithChildren} from 'react';
import {Box, Flex} from "@radix-ui/themes";
import Logo from "@/app/overview/components/Logo";
import Link from "next/link";

const ForgotPasswordContainer = ({children}: PropsWithChildren) => {
    return (
        <Box className="w-screen h-screen overflow-y-auto">
            <Flex justify="between" align="center" className="px-8 py-2">
                <Logo width={250} height={40}/>
                <Link href="/" className="text-sm text-black font-semibold">Login</Link>
            </Flex>
            <Box className="relative w-full">
                <Box className="bg-[url('/assets/images/cyan-background.svg')] h-60"></Box>
                <Flex direction="column" justify="center" align="center">
                    <Box className="relaive top-1/3 z-10 bg-white absolute w-2/5 mx-auto rounded-lg shadow-xl">
                        {children}
                    </Box>

                </Flex>

            </Box>

        </Box>
    );
};

export default ForgotPasswordContainer;