import React from 'react';
import {Box, Flex, Text} from "@radix-ui/themes";
import VStackLabelWithText from "@/components/VStackLabelWithText";
import EditButton from "@/components/EditButton";
import {BasicInfoItem} from "@/utils/types/misc";
import ContainerCard from "@/components/ContainerCard";

interface BasicInfoCardProps {
    onEditClick: () => void
    data: BasicInfoItem[][];
    columns: number
}

const BasicInfoSection = ({data, onEditClick, columns}: BasicInfoCardProps) => {
    return (
        <ContainerCard>
            <Flex direction="column">
                <Box className="px-6 py-3 border-b">
                    <Text className="font-black">Basic Information</Text>
                </Box>
                <Flex direction="column" className="p-5 bg-white">
                    {data.map((item, index) => (
                        <Flex key={index} className={`grid grid-cols-${columns}`}>
                            {item.map((el) => (
                                <Flex key={el.value} className="py-5" align="start" gap="2">
                                    <VStackLabelWithText label={el.label} description={el.value}/>
                                    {el.editable ? <EditButton onClick={onEditClick}/> : null}
                                </Flex>
                            ))}
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </ContainerCard>
    );
};

export default BasicInfoSection;
