import React, {ComponentType, useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import useAuthStore from '@/stores/auth';
import RedirectingSpinner from "@/components/RedirectingSpinner";

const withAuth = (WrappedComponent: ComponentType<any>) => {
    return (props: any) => {
        const [loading, setLoading] = useState(true);
        const router = useRouter();
        const authenticated = useAuthStore(state => state.authenticated);

        useEffect(() => {
            if (!authenticated) {
                router.push('/');
            } else {
                setLoading(false);
            }
        }, []);

        if (loading) return <RedirectingSpinner/>;

        return <WrappedComponent {...props} />;
    };

};

export default withAuth;
