import '@radix-ui/themes/styles.css';
import './globals.css'
import React from 'react'
import type {Metadata} from 'next'
import {Theme} from "@radix-ui/themes";


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
        <Theme accentColor="purple">
            {children}
        </Theme>

        </body>
        </html>
    )
}
