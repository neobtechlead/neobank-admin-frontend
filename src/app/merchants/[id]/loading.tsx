import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import HeaderSkeleton from "@/components/skeleton/HeaderSkeleton";
import AvatarSkeleton from "@/components/skeleton/AvatarSkeleton";
import SkeletonText from "@/components/skeleton/SkeletonText";
import Skeleton from "@/components/skeleton/Skeleton";
import BasicInfoSkeleton from "@/components/skeleton/BasicInfoSkeleton";


const MerchantSkeleton = () => {
    return (
        <Box>
            <HeaderSkeleton/>
            <Flex direction="column">
                <Flex justify="between" align="center" className="py-6 px-14 bg-grey-850 border-b">
                    <AvatarSkeleton/>
                    <Flex direction="column" gap="3">
                        <Box>
                            <SkeletonText/>
                        </Box>
                        <Flex gap="3">
                            <Skeleton count={2}/>
                        </Flex>
                    </Flex>
                </Flex>
                <Box className="py-6 px-14">
                    <BasicInfoSkeleton/>
                </Box>

            </Flex>
        </Box>
    );
};

export default MerchantSkeleton;