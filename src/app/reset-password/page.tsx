import React, {Suspense} from 'react';
import ResetPassword from "@/components/auth/ResetPassword";
import RedirectingSpinner from "@/components/RedirectingSpinner";

const Page = () => {
    return (
        <Suspense fallback={<RedirectingSpinner/>}>
            <ResetPassword/>
        </Suspense>
    );
};

export default Page;