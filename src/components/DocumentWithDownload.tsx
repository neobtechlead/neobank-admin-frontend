import React from 'react';
import {Box, Flex, Text} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import FileText from "@/assets/svgs/FileText.svg"
import DownloadSimple from "@/assets/svgs/DownloadSimple.svg"

interface Props {
    label: string
    href: string,
    canDownload?: boolean
}

const DocumentWithDownload = ({label, href, canDownload = true}: Props) => {
    return (
        <Link href={href}>
            <Flex gap="4" align="center">
                <Box><Image src={FileText} alt=""/></Box>
                <Text>{label}</Text>
                {canDownload ? <Box> <Image src={DownloadSimple} alt=""/></Box> : null}
            </Flex>
        </Link>
    );
};

export default DocumentWithDownload;