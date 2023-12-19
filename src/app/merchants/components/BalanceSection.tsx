import React from 'react';
import Image from "next/image";
import {Box, Flex, Heading, Text} from "@radix-ui/themes";
import NotePencil from "@/assets/svgs/NotePencil.svg";
import {formatCurrencyAlt} from "@/utils/functions";

interface BalanceSectionProps {
    balance: string;
    onClick: () => void
}

const BalanceSection = ({balance, onClick}: BalanceSectionProps) => {
    return (
        <Flex direction="column" gap="3">
            <Box>
                <Text className="text-purple-900 font-black">Balance</Text>
            </Box>
            <button onClick={onClick}>
                <Flex gap="3">
                    <Heading>{`GHS ${formatCurrencyAlt(parseInt(balance))}`}</Heading>
                    <Image src={NotePencil} alt=""/>
                </Flex>
            </button>
        </Flex>
    );
};

export default BalanceSection;
