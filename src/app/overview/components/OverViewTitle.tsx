import React from 'react';
import {Flex, Heading} from "@radix-ui/themes";
import useAuthStore from "@/stores/auth";
import {getGreeting} from "@/utils/functions";

const OverViewTitle = () => {
    const firstname = useAuthStore(state => state.user?.firstName)
    return (
        <Flex direction="column" justify="center" className="ml-24 h-24">
            <Heading className="text-white capitalize">{`${getGreeting()} ${firstname}`}</Heading>
        </Flex>
    );
};

export default OverViewTitle;