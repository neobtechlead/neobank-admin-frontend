import React from 'react';
import {Flex} from "@radix-ui/themes";
import ContainerCard from "@/components/ContainerCard";
import SkeletonLoader from "@/components/skeleton/Skeleton";
import SkeletonText from "@/components/skeleton/SkeletonText";

const arrayMapper = [1, 2]
const CardSkeleton = () => (
    <Flex gap="6">
        {arrayMapper.map(item => (
            <ContainerCard key={item}>
                <Flex direction="column" align="start" gap="2" p="6">
                    <Flex justify="center" align="center" className="bg-orange-900 w-10 h-10 rounded-full">
                        <SkeletonLoader/>
                    </Flex>
                    <SkeletonText/>
                    <SkeletonText/>
                </Flex>
            </ContainerCard>
        ))}
    </Flex>
)


export default CardSkeleton;