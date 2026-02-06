/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            colors: {
                // Clean Girl Aesthetic Color Palette
                cream: {
                    50: '#FDFCFB',
                    100: '#FAF8F5',
                    200: '#F5F1EB',
                    300: '#EDE7DD',
                    400: '#E3D9CA',
                    500: '#D4C5B0',
                    600: '#B8A890', // Added darker shade for contrast
                    900: '#5C5248', // Added text contrast shade
                },
                blush: {
                    50: '#FFF5F5',
                    100: '#FFE8E8',
                    200: '#FFD6D6',
                    300: '#FFBFBF',
                    400: '#FFA3A3',
                    500: '#FF8A8A',
                    600: '#E66A6A', // Added darker shade
                },
                sage: {
                    50: '#F6F8F6',
                    100: '#E8EDE8',
                    200: '#D4DED4',
                    300: '#B8C9B8',
                    400: '#95B095',
                    500: '#739373',
                    600: '#5A755A',
                    900: '#2D3A2D', // Added text contrast shade
                },
                nude: {
                    50: '#FAF7F4',
                    100: '#F2EBE3',
                    200: '#E8DDD0',
                    300: '#D9C8B4',
                    400: '#C7AD92',
                    500: '#B08F6F',
                    900: '#584737', // Added text contrast shade
                },
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.6' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            backfaceVisibility: {
                'hidden': 'hidden',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
