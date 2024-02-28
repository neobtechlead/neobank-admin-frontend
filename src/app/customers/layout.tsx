'use client'
import React, {PropsWithChildren} from 'react';
import Header from "@/app/overview/components/Header";
import withAuth from "@/hoc/withAuth";

const DashBoardLayout = ({children}: PropsWithChildren) => {


    return (
        < >
            <Header/>
            <main>
                {children}
            </main>
        </>

    );
};

export default withAuth(DashBoardLayout);