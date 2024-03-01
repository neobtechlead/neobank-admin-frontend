import React from 'react';
import {Flex, Text} from "@radix-ui/themes";
import NextLink from "@/components/auth/NextLink";

const RequestPasswordRequestSuccess = () => {
    return (
        <Flex justify="center" align="center" direction="column" className="my-16">
            <Flex direction="column" justify="center" align="center" gap="2">
                <Text className="font-bold text-xl text-gray-600">Email has been sent</Text>
                <Text>Please check your email inbox for a password recovery link</Text>
            </Flex>
            <Flex justify="center" align="center" className="mt-5">
                <NextLink to="/" label="Back to login" extraClassNames="!px-5"/>
            </Flex>

        </Flex>
    );
};

export default RequestPasswordRequestSuccess;