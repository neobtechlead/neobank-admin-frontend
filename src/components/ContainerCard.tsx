import React, {ReactNode} from 'react';
import {Box} from "@radix-ui/themes";


interface Props {
    bgColor?: string,
    children: ReactNode

}

const ContainerCard = ({bgColor = "bg-[#FCFCFC]", children}: Props) => {
    return (
        <Box className={`w-full ${bgColor}  border rounded-2xl shadow-sm overflow-hidden`}>
            {children}
        </Box>

    );
};

export default ContainerCard;