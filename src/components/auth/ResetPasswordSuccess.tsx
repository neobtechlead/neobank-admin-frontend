import React from 'react';
import {Flex, Text} from "@radix-ui/themes";
import Link from "next/link";

const ResetPasswordSuccess = () => {
    return (
        <Flex justify="center" align="center" direction="column" className="my-16">
            <Flex direction="column" justify="center" align="center" gap="2">
                <Text>Your password has been successfully reset.</Text>
            </Flex>
            <Flex justify="center" align="center" className="mt-5">
                <Link href="/" className="text-sm font-semibold text-darkPurple-900 px-5">Return to login page</Link>
            </Flex>

        </Flex>
    );
};

export default ResetPasswordSuccess;