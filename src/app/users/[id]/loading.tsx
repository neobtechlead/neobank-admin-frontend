import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import HeaderSkeleton from "@/components/skeleton/HeaderSkeleton";
import AvatarSkeleton from "@/components/skeleton/AvatarSkeleton";
import BasicInfoSkeleton from "@/components/skeleton/BasicInfoSkeleton";

const UserSkeleton = () => {
    return (
        <Box>
            <HeaderSkeleton/>
            <Flex direction="column">
                <Flex justify="between" align="center" className="py-6 px-14 bg-grey-850 border-b">
                    <AvatarSkeleton/>
                </Flex>
                <Box className="py-6 px-14">
                    <BasicInfoSkeleton cols={3}/>
                </Box>

            </Flex>
        </Box>
    );
};

export default UserSkeleton;