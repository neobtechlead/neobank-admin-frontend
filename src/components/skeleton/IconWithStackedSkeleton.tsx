import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import SkeletonText from "@/components/skeleton/SkeletonText";

const IconWithStackedSkeleton = () => {
    return (
        <Flex align="center" gap="3">
            <Box>
                <SkeletonText/>
            </Box>
            <Flex direction="column" gap="1">
                <SkeletonText/>
                <SkeletonText/>
            </Flex>

        </Flex>
    );
};

export default IconWithStackedSkeleton;