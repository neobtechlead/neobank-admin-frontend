import React, {PropsWithChildren} from 'react';
import Header from "@/app/dashboard/components/Header";

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

export default DashBoardLayout;