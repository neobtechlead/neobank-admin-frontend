import React, {PropsWithChildren} from 'react';
import Header from "@/app/dashboard/components/Header";
import {Box} from "@radix-ui/themes";
import {PoppinsFont} from "@/fonts";

const DashBoardLayout = ({children}: PropsWithChildren) => {
    return (
        <Box style={PoppinsFont.style}>
            <Header/>
            <main>
                {children}
            </main>
        </Box>

    );
};

export default DashBoardLayout;