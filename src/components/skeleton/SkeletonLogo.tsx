import React from 'react';
import {Avatar, Flex} from "@radix-ui/themes";
import SkeletonText from "@/components/skeleton/SkeletonText";

const SkeletonLogo = () => {
    return (
        <Flex direction="column" gap="2" className="bg-neutral-100 py-5 px-12">
            <Avatar fallback="" size="6" radius="full"/>
            <Flex direction="column" className="text-sm">
                <SkeletonText/>
                <SkeletonText/>
            </Flex>
        </Flex>
    );
};

export default SkeletonLogo;