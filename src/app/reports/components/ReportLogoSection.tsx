'use client'
import React from 'react';
import {Avatar, Flex, Text} from "@radix-ui/themes";
import {generateAvatarFallBack} from "@/utils/functions";


const ReportLogoSection = () => {
    return (
        <Flex direction="column" gap="2" className="bg-neutral-100 py-5 px-12">
            <Avatar fallback={generateAvatarFallBack("Complete Farmer")} size="6" radius="full"/>
            <Flex direction="column" className="text-sm">
                <Text className="font-black">Complete Farmer</Text>
                <Text className="text-grey-900">completefarmer@cf.com</Text>
            </Flex>
        </Flex>
    );
};

export default ReportLogoSection;