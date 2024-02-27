import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    ],
    theme: {

        extend: {
            fontFamily: {
                poppins: ["var(--poppins)"],
                crimsonPro: ["var(--crimson)"]
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                grey: {
                    500: "#C3C3C4FF",
                    700: "#C4C4C4",
                    800: "#808191",
                    850: "#FCFCFC",
                    900: "#4F4F4F",
                    950: "#E6E6E6"

                },
                orange: {
                    900: "#FFEDED",
                    910: "#FFE9D5",
                    920: "#F29339"
                },
                darkPurple: {
                    900: "#652D90",
                    800: "#652D90A9"
                },
                cyan: {
                    350: "#EfEfEf"
                }


            }
        },
    },
    plugins: []
}
export default config
