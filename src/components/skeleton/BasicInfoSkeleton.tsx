import React from 'react';
import ContainerCard from "@/components/ContainerCard";
import {Box, Flex} from "@radix-ui/themes";
import SkeletonText from "@/components/skeleton/SkeletonText";

const dataCols2 = [
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
];

const dataCols3 = [
    [1, 2, 3],
    [1, 2, 3],
    [1],
];

interface Props {
    cols?: number;
}

const renderSkeletonColumns = (data: number[][], cols: number) =>
    data.map((item, index) => (
        <Box key={index} className={`grid grid-cols-${cols}`}>
            {item.map((el) => (
                <Flex key={el} className="py-5" align="start" gap="2">
                    <SkeletonText/>
                </Flex>
            ))}
        </Box>
    ));

const BasicInfoSkeleton = ({cols = 2}: Props) => {
    return (
        <ContainerCard>
            <Flex direction="column">
                <Box className="px-6 py-3 border-b">
                    <SkeletonText width={300}/>
                </Box>
                <Flex direction="column" className="p-5 bg-white">
                    {renderSkeletonColumns(cols === 2 ? dataCols2 : dataCols3, cols)}
                </Flex>
            </Flex>
        </ContainerCard>
    );
};

export default BasicInfoSkeleton;
