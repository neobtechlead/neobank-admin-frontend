'use client'
import React, {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const queryClient = new QueryClient

interface Props {
    children: ReactNode

}

const RQueryProvider = ({children}: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default RQueryProvider;