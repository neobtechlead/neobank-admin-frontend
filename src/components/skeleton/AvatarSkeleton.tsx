import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import SkeletonText from "@/components/skeleton/SkeletonText";


const AvatarSkeleton = () => {
    return (
        <Flex gap="4">
            <Flex direction="column" justify="center" gap="2">
                <Box className="flex items-center gap-3">
                    <SkeletonText width={200}/>

                </Box>

                <Flex gap="2" align="center">
                    <Box className="flex items-center gap-3">
                        <SkeletonText/>

                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default AvatarSkeleton;