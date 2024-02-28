import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import SkeletonText from "@/components/skeleton/SkeletonText";
import SkeletonTable from "@/components/skeleton/SkeletonTable";

const ReportsLoaderSkeleton = () => {
    return (
        <Box>
            <Flex gap="8" className="p-8">
                <SkeletonText/>
                <SkeletonText/>
            </Flex>
            <Flex direction="column" gap="6">
                <Flex direction="column" gap="8" className="border rounded-lg shadow-sm px-8 py-5">
                    <Flex gap="1">
                        {[1, 2, 3, 4].map(item => <Box key={item} className="flex-1">
                            <SkeletonText width={150}/>
                        </Box>)}
                    </Flex>
                    <Flex justify="end" gap="3">
                        <SkeletonText/>
                        <SkeletonText/>

                    </Flex>
                </Flex>
                <Flex justify="end" className="px-8">
                    {/*<SkeletonText width={200}/>*/}
                </Flex>
                <SkeletonTable columns={5} rows={5}/>
            </Flex>
        </Box>
    );
};

export default ReportsLoaderSkeleton;