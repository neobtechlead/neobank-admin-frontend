import React from 'react';
import {Box, Flex, Text} from "@radix-ui/themes";
import DocumentWithDownload from "@/components/DocumentWithDownload";
import {DocInfoItem} from "@/utils/types/misc";
import ContainerCard from "@/components/ContainerCard";

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
                    {data.map(item => (
                        <Box key={item.label} className="my-5">
                            <DocumentWithDownload  {...item}/>
                        </Box>
                    ))}
                </Box>
            </Flex>
        </ContainerCard>


    );
};

export default DocumentInfoSection;
