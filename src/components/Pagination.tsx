'use client'
import React from 'react';
import {Box, Flex, Text} from "@radix-ui/themes";
import CaretRight from "@/assets/svgs/CaretRight.svg";
import CaretLeft from "@/assets/svgs/CaretLeft.svg";
import Image from "next/image";

const Pagination = () => {
    return (
        <Flex align="center" gap="6">
            <Box className="space-x-2 text-sm">
                <Text className="font-black">1-10</Text>
                <Text className="text-grey-800 font-bold">of 32</Text>
            </Box>
            <Flex gap="3">
                <Image src={CaretLeft} alt="" className="cursor-pointer" onClick={() => {
                    console.log("left")
                }}/>
                <Image src={CaretRight} alt="" className="cursor-pointer" onClick={() => {
                    console.log("right")
                }}/>
            </Flex>

        </Flex>
    );
};

export default Pagination;