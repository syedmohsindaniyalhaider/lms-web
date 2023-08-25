module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#F0A901',
                secondary: '#0F5647',
            },
            fontFamily: {
                author: ['Author-Variable'],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
