import React from 'react';
import ContainerCard from "@/components/ContainerCard";
import {Flex, Text} from '@radix-ui/themes';
import Link from "next/link";
import {ITable} from "@/utils/types/table";
import BasicTable from "@/components/BasicTable";


interface Props {
    description: string;
    href: string;
    data: ITable

}

const DashBoardTable = ({description, href, data}: Props) => {


    return (
        <ContainerCard bgColor="bg-white">
            <Flex justify="between" align="center" className="border-b text-sm p-4">
                <Text className="font-bold">{description}</Text>
                <Link href={href} className="text-sm font-semibold text-[#652D90] hover:underline">See All</Link>
            </Flex>
            <BasicTable data={data}/>
        </ContainerCard>
    );
};

export default DashBoardTable;
