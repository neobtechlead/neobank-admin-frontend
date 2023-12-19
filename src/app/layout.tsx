import '@radix-ui/themes/styles.css';
import './theme-config.css'
import './globals.css'
import React from 'react'
import type {Metadata} from 'next'
import {Theme} from "@radix-ui/themes";
import RQueryProvider from "@/api/RQueryProvider";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {RobotoFont} from "@/fonts";


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
        <html lang="en" className={RobotoFont.variable}>
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
