import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import LoginForm from "@/components/auth/LoginForm";
import CarouselContainer from "@/components/auth/CarouselContainer";

const Login = () => {
    return (
        <Flex className="w-full h-full overflow-auto">
            <Flex className="w-3/5 bg-white justify-center">
                <Box className="w-3/5">
                    <LoginForm/>
                </Box>

            </Flex>
            <Flex className="w-2/5">
                <CarouselContainer/>

            </Flex>

        </Flex>
    );
}

export default Login;