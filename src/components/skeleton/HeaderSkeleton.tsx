import React from 'react';
import {Flex} from "@radix-ui/themes";
import SkeletonText from "@/components/skeleton/SkeletonText";

const HeaderSkeleton = () => {
    return (
        <Flex className="py-6 px-14 border-b md:sticky md:top-0 md:z-10 bg-white">
            <Flex align="center" gap="2" className="cursor-pointer">
                <SkeletonText width={50}/>
            </Flex>
            <Flex justify="center" align="center" className="flex-1">
                <SkeletonText width={300}/>
            </Flex>
        </Flex>
    );
};

export default HeaderSkeleton;