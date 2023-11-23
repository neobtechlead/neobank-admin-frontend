import React, {PropsWithChildren} from 'react';
import {Box} from "@radix-ui/themes";

const ContainerCard = ({children}: PropsWithChildren) => {
    return (
        <Box className="w-full bg-[#FCFCFC] border rounded-2xl shadow-sm">
            {children}
        </Box>

    );
};

export default ContainerCard;