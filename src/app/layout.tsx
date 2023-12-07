import '@radix-ui/themes/styles.css';
import './globals.css'
import React from 'react'
import type {Metadata} from 'next'
import {Theme} from "@radix-ui/themes";
import RQueryProvider from "@/api/RQueryProvider";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";


export const metadata: Metadata = {
    title: 'NEO BANK ADMIN',
    description: 'Neobank Admin',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <RQueryProvider>
            <Theme accentColor="purple">
                {children}
            </Theme>
        </RQueryProvider>
        <ToastContainer/>

        </body>
        </html>
    )
}
