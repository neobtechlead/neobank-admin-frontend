import React from 'react';
import {Box, Heading} from "@radix-ui/themes";

interface Props {
    params: {
        id: string
    }

}

const Merchant = ({params: {id}}: Props) => {
    return (
        <div>
            <Box className="flex flex-col items-center justify-center min-h-screen">
                <Box className="bg-darkPurple-900 text-white p-4">
                    <Heading className="font-bold">Merchant Details: {id}</Heading>
                </Box>
            </Box>
        </div>
    );
};

export default Merchant;