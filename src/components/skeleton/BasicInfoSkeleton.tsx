import React from 'react';
import ContainerCard from "@/components/ContainerCard";
import {Box, Flex} from "@radix-ui/themes";
import SkeletonText from "@/components/skeleton/SkeletonText";

const data = [
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
]

const BasicInfoSkeleton = () => {
    return (
        <ContainerCard>
            <Flex direction="column">
                <Box className="px-6 py-3 border-b">
                    <SkeletonText width={300}/>
                </Box>
                <Flex direction="column" className="p-5 bg-white">
                    {data.map((item, index) => (
                        <Box key={index} className="grid grid-cols-2">
                            {item.map((el) => (
                                <Flex key={el} className="py-5" align="start" gap="2">
                                    <SkeletonText/>
                                </Flex>
                            ))}
                        </Box>
                    ))}
                </Flex>
            </Flex>
        </ContainerCard>
    );
};

export default BasicInfoSkeleton;