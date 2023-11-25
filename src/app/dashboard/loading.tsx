import React from 'react';
import {Flex} from "@radix-ui/themes";
import ContainerCard from "@/components/ContainerCard";
import SkeletonTable from "@/components/skeleton/SkeletonTable";
import SkeletonText from "@/components/skeleton/SkeletonText";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
import TableCardSkeleton from "@/components/skeleton/TableCardSkeleton";


//Skeleton placeholder whilst page is loading
const DashBoardSkeleton = () => {
    return (
        <Flex direction="column" gap="6" mt="7" px="6">
            <CardSkeleton/>
            <TableCardSkeleton/>
            <Flex gap="6">
                <ContainerCard>
                    <Flex justify="between" align="center" className="border-b text-sm p-4">
                        <SkeletonText/>
                        <SkeletonText/>
                    </Flex>
                    <SkeletonTable columns={[1, 2, 3, 4, 5]} rows={[1, 2, 3, 4, 5]}/>
                </ContainerCard>
            </Flex>
        </Flex>
    );
};

export default DashBoardSkeleton;