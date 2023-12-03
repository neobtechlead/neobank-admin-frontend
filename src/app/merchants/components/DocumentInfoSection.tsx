import React from 'react';
import {Box, Flex, Text} from "@radix-ui/themes";
import DocumentWithDownload from "@/components/DocumentWithDownload";
import {DocInfoItem} from "@/utils/types/misc";
import ContainerCard from "@/components/ContainerCard";
import CertOfRegistrationCard from "@/app/merchants/components/CertOfRegistrationCard";

interface Props {
    data: DocInfoItem[];
}

const DocumentInfoSection = ({data}: Props) => {
    return (
        <ContainerCard>
            <Flex direction="column">
                <Box className="px-6 py-3 border-b">
                    <Text className="font-black">Document Information</Text>
                </Box>
                <Box className="grid grid-cols-3 gap-5 p-5 bg-white">
                    {data.map(({label, href, value, canDownload}) => (
                        <Box key={href} className="my-5">
                            {value && <DocumentWithDownload label={label} href={href} canDownload={canDownload}/>}
                        </Box>
                    ))}
                    <CertOfRegistrationCard href="#"/>
                </Box>
            </Flex>
        </ContainerCard>


    );
};

export default DocumentInfoSection;
