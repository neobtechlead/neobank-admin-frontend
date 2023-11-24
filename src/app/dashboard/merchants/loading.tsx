import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import SkeletonLoader from "@/components/SkeletonLoader";
import SkeletonTable from "@/components/SkeletonTable";

//Skeleton placeholder whilst page is loading
const MerchantSkeleton = () => {
    return (
        <Box p="5">
            <Flex direction="column" gap="5">
                <Flex justify="end">
                    <Flex gap="3" align="stretch">
                        <SkeletonLoader/>
                        <SkeletonLoader/>
                    </Flex>
                </Flex>
                <SkeletonTable columns={[1, 2, 3, 4, 5]} rows={[1, 2, 3, 4, 5]}/>
                <Flex justify="between" align="center">
                    <Box>
                        <SkeletonLoader/>
                    </Box>
                    <SkeletonLoader/>
                </Flex>
            </Flex>
        </Box>
    );
};

export default MerchantSkeleton;