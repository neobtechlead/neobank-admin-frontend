import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import SkeletonText from "@/components/skeleton/SkeletonText";
import SkeletonTable from "@/components/skeleton/SkeletonTable";

const CustomerSkeleton = () => {
    return (
        <Box p="5">
            <Flex direction="column" gap="5">
                <Flex justify="end">
                    <Flex gap="3" align="stretch">
                        <SkeletonText/>
                    </Flex>
                </Flex>
                <SkeletonTable columns={[1, 2, 3, 4]} rows={[1, 2, 3, 4]}/>
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

export default CustomerSkeleton;