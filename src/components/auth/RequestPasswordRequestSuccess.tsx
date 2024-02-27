import React from 'react';
import {Flex, Text} from "@radix-ui/themes";
import Link from "next/link";

const RequestPasswordRequestSuccess = () => {
    return (
        <Flex justify="center" align="center" direction="column" className="my-16">
            <Flex direction="column" justify="center" align="center" gap="2">
                <Text className="font-bold text-xl text-gray-600">Email has been sent</Text>
                <Text>Please check your email inbox for a password recovery link</Text>
            </Flex>
            <Flex justify="center" align="center" className="mt-5">
                <Link href="/" className="text-sm font-semibold text-darkPurple-900 px-5">Back to login</Link>
            </Flex>

        </Flex>
    );
};

export default RequestPasswordRequestSuccess;