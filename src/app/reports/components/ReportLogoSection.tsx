'use client'
import React from 'react';
import {Avatar, Flex, Text} from "@radix-ui/themes";
import {generateAvatarFallBack} from "@/utils/functions";
import SkeletonLogo from "@/components/skeleton/SkeletonLogo";

interface Props {
    data: any
    isLoading: boolean

}


const ReportLogoSection = ({data, isLoading}: Props) => {
    if (isLoading) return <SkeletonLogo/>
    return (
        <Flex direction="column" gap="2" className="bg-neutral-100 py-5 px-12">
            <Avatar fallback={generateAvatarFallBack(data?.businessName ?? "")} size="6" radius="full"/>
            <Flex direction="column" className="text-sm">
                <Text className="font-black">{data?.businessName ?? ""}</Text>
                <Text className="text-grey-900">{data?.email ?? ""}</Text>
            </Flex>
        </Flex>
    );
};

export default ReportLogoSection;