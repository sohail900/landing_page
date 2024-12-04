/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#006CE3',
                textColor: '#000',
                secondary: '#FF7101',
                lightColor: '#F6F0FD',
            },
            boxShadow: {
                'primary-shadow': '-1px 2px 50px -30px rgba(0,0,0,0.40)',
            },
            padding: {
                mainPadding: '4rem',
                mobilePadding: '2rem',
            },
        },
    },
    plugins: [],
}
