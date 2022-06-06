module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            },
        },
    },
    plugins: [require('tailwindcss-debug-screens')],
};
