import ContainerCard from "@/components/ContainerCard";
import React from "react";
import {Flex, Text} from "@radix-ui/themes";
import Image from "next/image";

interface Props {
    label: string;
    totalCounts: string;
    icon: string;
}

const DashboardCardItem = ({label, totalCounts, icon}: Props) => (
    <ContainerCard>
        <Flex direction="column" align="start" gap="2" p="6">
            <Flex justify="center" align="center" className="bg-[#FFEDED] w-10 h-10 rounded-full">
                <Image src={icon} alt={label}/>
            </Flex>
            <Text className="text-grey-800 font-bold">{label}</Text>
            <Text className="font-black text-3xl">{totalCounts}</Text>
        </Flex>
    </ContainerCard>
);

export default DashboardCardItem