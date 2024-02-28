import React from 'react';
import {Box, Flex} from "@radix-ui/themes";
import HeaderSkeleton from "@/components/skeleton/HeaderSkeleton";
import SkeletonLogo from "@/components/skeleton/SkeletonLogo";
import SkeletonText from "@/components/skeleton/SkeletonText";
import {generateArray} from "@/utils/functions";
import SkeletonTableWithPagination from "@/components/skeleton/SkeletonTableWithPagination";

const ReportLoaderSkeleton = () => {
    return (
        <Box>
            <HeaderSkeleton/>
            <SkeletonLogo/>
            <Box className="flex justify-around items-center py-8">
                {generateArray(4).map(item => <Box key={item}><SkeletonText/></Box>)}
            </Box>
            <Flex gap="4" className="border-t border-b px-10 py-5">
                <SkeletonText width={150}/>
                <SkeletonText width={150}/>
            </Flex>
            <Box className="p-2">

                <SkeletonTableWithPagination columns={6} rows={6}/>
            </Box>

        </Box>
    );
};

export default ReportLoaderSkeleton;