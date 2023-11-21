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
                    800: "#808191",
                    900: "#4F4F4F",
                    950: "#E6E6E6"
                },
                orange: {
                    910: "#FFE9D5",
                    920: "#F29339"
                },
                darkPurple: {
                    900: "#652D90"
                }

            }
        },
    },
    plugins: [
        // require('@tailwindcss/aspect-ratio'),
    ]
}
export default config
