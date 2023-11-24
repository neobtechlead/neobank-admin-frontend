import React from 'react';
import {Box, Flex, Heading, Text} from "@radix-ui/themes";
import ContainerCard from "@/components/ContainerCard";
import SkeletonLoader from "@/components/SkeletonLoader";
import Link from "next/link";
import SkeletonTable from "@/components/SkeletonTable";

const arrayMapper = [1, 2]

//Skeleton placeholder whilst page is loading
const DashBoardSkeleton = () => {
    return (
        <Flex direction="column" gap="6" mt="7" px="6">
            <Flex gap="6">
                {arrayMapper.map(item => <ContainerCard key={item}>
                    <Flex direction="column" align="start" gap="2" p="6">
                        <Flex justify="center" align="center" className="bg-orange-900 w-10 h-10 rounded-full">
                            <SkeletonLoader/>
                        </Flex>
                        <Text className="text-grey-800 font-bold bg-grey-900"><SkeletonLoader/></Text>
                        <Text className="font-black text-3xl"><SkeletonLoader/></Text>
                    </Flex>
                </ContainerCard>)}
            </Flex>
            <Flex gap="6">
                <ContainerCard>
                    <Flex direction="column" p="6" gap="4">
                        <Box className="md:self-end">
                            <SkeletonLoader/>

                        </Box>
                        <Flex className="flex-1" justify="between" align="center">
                            <Box>
                                <SkeletonLoader/>
                            </Box>
                            <Flex direction="column">
                                <SkeletonLoader/>
                                <SkeletonLoader/>
                            </Flex>
                        </Flex>
                        <Flex gap="6">
                            {arrayMapper.map(item => <Flex key={item} align="center" justify="center" gap="2">
                                <SkeletonLoader/>
                                <Flex direction="column" gap="2">
                                    <Text><SkeletonLoader/></Text>
                                    <Heading><SkeletonLoader/></Heading>
                                </Flex>

                            </Flex>)}
                        </Flex>
                    </Flex>
                </ContainerCard>

                <ContainerCard>
                    <Flex justify="between" align="center" className="border-b text-sm p-4">
                        <Text className="font-bold"><SkeletonLoader/></Text>
                        <Link href="" className="text-sm font-semibold text-[#652D90] hover:underline"><SkeletonLoader/></Link>
                    </Flex>
                    <SkeletonTable columns={[1, 2, 3, 4]} rows={[1, 2, 3, 4, 5]}/>
                </ContainerCard>
            </Flex>
            <Flex gap="6">
                <ContainerCard>
                    <Flex justify="between" align="center" className="border-b text-sm p-4">
                        <Text className="font-bold"><SkeletonLoader/></Text>
                        <Link href="" className="text-sm font-semibold text-[#652D90] hover:underline"><SkeletonLoader/></Link>
                    </Flex>
                    <SkeletonTable columns={[1, 2, 3, 4, 5]} rows={[1, 2, 3, 4, 5]}/>
                </ContainerCard>

            </Flex>
        </Flex>
    );
};

export default DashBoardSkeleton;