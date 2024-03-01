import React from 'react';
import {Flex, Text} from "@radix-ui/themes";
import NextLink from "@/components/auth/NextLink";

const ResetPasswordSuccess = () => {
    return (
        <Flex justify="center" align="center" direction="column" className="my-16">
            <Flex direction="column" justify="center" align="center" gap="2">
                <Text>Your password has been successfully reset.</Text>
            </Flex>
            <Flex justify="center" align="center" className="mt-5">
                <NextLink to="/" label="Return to login page" extraClassNames="!px-5"/>
            </Flex>

        </Flex>
    );
};

export default ResetPasswordSuccess;