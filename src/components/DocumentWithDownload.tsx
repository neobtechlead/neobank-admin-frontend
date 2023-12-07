import React from 'react';
import {Box, Flex, Text} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import FileText from "@/assets/svgs/FileText.svg";
import DownloadSimple from "@/assets/svgs/DownloadSimple.svg";

interface Props {
    label: string;
    href: string;
    value?: string;
}

const DocumentWithDownload = ({label, href, value}: Props) => {
    return (
        <>
            {href && (
                <Link href={href}>
                    <Flex gap="4" align="center">
                        <Box><Image src={FileText} alt=""/></Box>
                        <Text>{label}</Text>
                        <Box><Image src={DownloadSimple} alt=""/></Box>
                    </Flex>
                </Link>
            )}
            {!href && value && (
                <Flex direction="column">
                    <Text className="text-grey-900 text-xs font-black">{label}</Text>
                    <Text>{value}</Text>
                </Flex>
            )}
        </>
    );
};

export default DocumentWithDownload;
