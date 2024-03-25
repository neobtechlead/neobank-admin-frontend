import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import SkeletonTable from "@/components/skeleton/SkeletonTable";
import SkeletonText from "@/components/skeleton/SkeletonText";
import Header from "@/app/overview/components/Header";

const MerchantsSkeleton = () => {
    return (
        <Box>
            <Header/>
            <Box p="5">
                <Flex direction="column" gap="5">
                    <Flex justify="end">
                        <Flex gap="3" align="stretch">
                            <SkeletonText/>
                            <SkeletonText/>
                        </Flex>
                    </Flex>
                    <SkeletonTable columns={5} rows={5}/>
                    <Flex justify="between" align="center">
                        <Box>
                            <SkeletonText/>
                        </Box>
                        <SkeletonText/>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default MerchantsSkeleton;