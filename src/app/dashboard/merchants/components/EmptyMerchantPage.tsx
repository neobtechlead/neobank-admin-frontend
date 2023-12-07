'use client'
import React from 'react';
import {Box, Flex, Text} from "@radix-ui/themes";
import Image from "next/image";
import EmptyPlaceholder from "@/assets/images/emptyplaceholder.png"
import PlusIcon from "@/assets/svgs/Plus.svg"
import ButtonWithIcon from "@/components/ButtonWithIcon";
import {useRouter} from "next/navigation";


const EmptyMerchantPage = () => {

    const router = useRouter()
    return (
        <Box className="px-14 py-8">
            <Box className="w-full bg-white rounded-2xl shadow-md px-72 py-11">
                <Flex direction="column" align="center" justify="center" gap="8" className="py-10">
                    <Box>
                        <Image src={EmptyPlaceholder} alt="" width={350} height={250}/>
                    </Box>
                    <Flex direction="column" align="center" justify="center" className="text-center" gap="2">
                        <Text as="p" className="font-black">No recent activity</Text>
                        <Text as="p">It seems like there's currently no data available regarding merchant creation. This
                            section will display information when a merchant is created.</Text>
                    </Flex>
                    <Box>
                        <ButtonWithIcon label="Create New Merchant" onClick={() => router.push("/merchants")}
                                        icon={PlusIcon} overrideClassName="!py-4"/>
                    </Box>
                </Flex>
            </Box>
        </Box>

    );
};

export default EmptyMerchantPage;