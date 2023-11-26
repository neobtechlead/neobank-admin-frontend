import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import SkeletonTable from "@/components/skeleton/SkeletonTable";
import SkeletonText from "@/components/skeleton/SkeletonText";

const MerchantSkeleton = () => {
    return (
        <Box p="5">
            <Flex direction="column" gap="5">
                <Flex justify="end">
                    <Flex gap="3" align="stretch">
                        <SkeletonText/>
                        <SkeletonText/>
                    </Flex>
                </Flex>
                <SkeletonTable columns={[1, 2, 3, 4, 5]} rows={[1, 2, 3, 4, 5]}/>
                <Flex justify="between" align="center">
                    <Box>
                        <SkeletonText/>
                    </Box>
                    <SkeletonText/>
                </Flex>
            </Flex>
        </Box>
    );
};

export default MerchantSkeleton;