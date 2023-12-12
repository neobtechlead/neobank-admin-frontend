import React from 'react';
import {Box, Text} from "@radix-ui/themes";
import Image from "next/image";
import GreenCircle from "@/assets/svgs/GreenCircle.svg"
import SimpleButton from "@/components/SimpleButton";
import {useRouter} from "next/navigation";


interface Props {
    title: string
    description: string
    onClick: () => void
    btnLabel: string | React.ReactNode

}


const SuccessContent = ({title, description, btnLabel, onClick}: Props) => {

    const router = useRouter()
    return (

        <Box className="flex flex-col items-center gap-2">
            <Box className="mt-10 mb-5">
                <Image src={GreenCircle} alt=""/>
            </Box>
            <Box className="flex flex-col gap-1 items-center">
                <Text as="p" className="text-2xl font-bold">{title}</Text>
                <Text>{description}</Text>
            </Box>
            <Box className="py-5">
                <SimpleButton
                    onClick={onClick}
                    overrideClassName="!px-6 !font-medium">
                    {btnLabel}
                </SimpleButton>
            </Box>
        </Box>
    );
};

export default SuccessContent;