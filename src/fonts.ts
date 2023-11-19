import {Crimson_Pro, Poppins, Roboto, Source_Sans_3} from "next/font/google";

export const PoppinsFont = Poppins({
    weight: ['400', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--poppins',

})

export const RobotoFont = Roboto({
    weight: ['400', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--roboto',


})

export const CrimsonProFont = Crimson_Pro({
    weight: ['400', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--crimson',

})


export const SourceSans3Font = Source_Sans_3({
    weight: ['400', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--sourceSans3',

})