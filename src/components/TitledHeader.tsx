'use client'
import React from 'react';
import {Flex, Heading, Text} from "@radix-ui/themes";
import LeftArrow from "@/assets/svgs/LeftArrow.svg";
import Image from "next/image";
import {useRouter} from "next/navigation";


interface Props {
    title: string;
}

const TitledHeader = ({title}: Props) => {

    const router = useRouter()
    return (
        <Flex className="py-6 px-14 border-b md:sticky md:top-0 md:z-10 bg-white">
            <Flex align="center" gap="2" className="cursor-pointer" onClick={() => router.back()}>
                <Image src={LeftArrow} alt=""/>
                <Text>Back</Text>
            </Flex>
            <Flex justify="center" align="center" className="flex-1">
                <Heading>{title}</Heading>
            </Flex>
        </Flex>
    );
};

export default TitledHeader;
