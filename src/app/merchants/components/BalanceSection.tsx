import React from 'react';
import Image from "next/image";
import {Box, Flex, Heading, Text} from "@radix-ui/themes";
import NotePencil from "@/assets/svgs/NotePencil.svg";

interface BalanceSectionProps {
    balance: string;
}

const BalanceSection = ({balance}: BalanceSectionProps) => {
    return (
        <Flex direction="column" gap="3">
            <Box>
                <Text className="text-purple-900 font-black">Balance</Text>
            </Box>
            <Flex gap="3">
                <Heading>{balance}</Heading>
                <Image src={NotePencil} alt=""/>
            </Flex>
        </Flex>
    );
};

export default BalanceSection;
