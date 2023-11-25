import React from "react";
import ContainerCard from "@/components/ContainerCard";
import {Flex} from "@radix-ui/themes";
import SkeletonText from "@/components/skeleton/SkeletonText";
import SkeletonTable from "@/components/skeleton/SkeletonTable";

const arrayMapper = [1, 2]

const TableCardSkeleton = () => (
    <Flex gap="6">
        <ContainerCard>
            <Flex direction="column" p="6" gap="4">
                <Flex className="md:self-end">
                    <SkeletonText/>
                </Flex>
                <Flex className="flex-1" justify="between" align="center">
                    <SkeletonText/>
                    <Flex direction="column">
                        <SkeletonText/>
                        <SkeletonText/>
                    </Flex>
                </Flex>
                <Flex gap="6">
                    {arrayMapper.map(item => (
                        <Flex key={item} align="center" justify="center" gap="2">
                            <SkeletonText/>
                            <Flex direction="column" gap="2">
                                <SkeletonText/>
                                <SkeletonText/>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </ContainerCard>

        <ContainerCard>
            <Flex justify="between" align="center" className="border-b text-sm p-4">
                <SkeletonText/>
                <SkeletonText/>
            </Flex>
            <SkeletonTable columns={[1, 2, 3, 4]} rows={[1, 2, 3, 4, 5]}/>
        </ContainerCard>
    </Flex>
);

export default TableCardSkeleton