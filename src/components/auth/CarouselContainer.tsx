import React from 'react';
import Carousel from "@/components/auth/Carousel";
import Sample from "@/assets/svgs/dashboard-sample.svg"
import Image from "next/image";
import {Box} from "@radix-ui/themes";


const CarouselContainer = () => {
    return (

        <Box className="relative">
            <Box className="inset-0 h-full bg-purple-900 pl-[100px] bg-[url('/assets/svgs/login-background.svg')]">
                <Box
                    className="flex w-full bg-[url('/assets/svgs/login-background.svg')] flex-col justify-end h-full items-end">
                    <Box className="flex flex-col h-full w-full">
                        <Box className="flex items-start mt-[50px]">
                            <Carousel/>
                        </Box>
                        <Box className="w-full h-full">
                            <Image src={Sample} alt="Sample Logo" priority={true}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>

    );
};

export default CarouselContainer;