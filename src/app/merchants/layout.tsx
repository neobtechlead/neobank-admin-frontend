'use client'
import React, {PropsWithChildren} from 'react';
import withAuth from "@/hoc/withAuth";

const DashBoardLayout = ({children}: PropsWithChildren) => {


    return (
        < >

            <main>
                {children}
            </main>
        </>

    );
};

export default withAuth(DashBoardLayout);