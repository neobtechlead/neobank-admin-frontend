import {Inter, Roboto} from "next/font/google";


export const RobotoFont = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--roboto',


})

export const InterFont = Inter({
    weight: ["100", "300", "400", "500", "700", "900"],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--inter',


})
