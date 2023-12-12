'use client'
import React from 'react';
import {Box, Flex, Text} from "@radix-ui/themes";
import Image from "next/image";
import PlusIcon from "@/assets/svgs/Plus.svg"
import ButtonWithIcon from "@/components/ButtonWithIcon";
import {useRouter} from "next/navigation";


interface Props {
    iconPlaceHolder: any,
    btnLabel?: string,
    path?: string
    description?: string
    item: string
}


const NoActivityWrapper = ({iconPlaceHolder, description, btnLabel, path, item}: Props) => {
    const router = useRouter()
    return (
        <Box className="px-14 py-8">
            <Box className="w-full bg-white rounded-2xl shadow-md px-72 py-11">
                <Flex direction="column" align="center" justify="center" gap="8" className="py-10">
                    <Box>
                        <Image src={iconPlaceHolder} alt="" width={350} height={250}/>
                    </Box>
                    <Flex direction="column" align="center" justify="center" className="text-center" gap="2">
                        <Text as="p" className="font-black">No recent activity</Text>
                        <Text
                            as="p">{description ?? `It seems like there's currently no data available regarding ${item} creation. This
                            section will display information when a ${item} is created.`}</Text>
                    </Flex>
                    {path && <Box>
                        <ButtonWithIcon
                            label={btnLabel!}
                            onClick={() => router.push(path!)}
                            icon={PlusIcon} overrideClassName="!py-4"/>
                    </Box>}
                </Flex>
            </Box>
        </Box>

    );
};

export default NoActivityWrapper;