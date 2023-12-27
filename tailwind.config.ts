import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './node_modules/flowbite-react/lib/**/*.js',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'dashboard-bg': "url('/81.jpg')",
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
export default config;
