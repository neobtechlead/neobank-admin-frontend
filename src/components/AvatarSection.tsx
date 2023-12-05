import React from 'react';
import {Avatar, Box, Flex, Text} from "@radix-ui/themes";
import Image from "next/image";
import EditButton from "@/components/EditButton";
import EnvelopeOpen from "@/assets/svgs/EnvelopeOpen.svg"
import {generateAvatarFallBack} from "@/utils/functions";

interface Props {
    name: string;
    email: string;

}

const AvatarSection = ({name, email}: Props) => {
    return (
        <Flex gap="4">
            <Avatar fallback={generateAvatarFallBack(name)} size="6"/>
            <Flex direction="column" justify="center" gap="2">
                <Box className="flex items-center gap-3">
                    <Text className="font-black">{name}</Text>
                    <EditButton onClick={() => {
                    }}/>
                </Box>

                <Flex gap="2" align="center">
                    <Image src={EnvelopeOpen} alt=""/>

                    <Box className="flex items-center gap-3">
                        <Text>{email}</Text>
                        <EditButton onClick={() => {
                        }}/>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default AvatarSection;
