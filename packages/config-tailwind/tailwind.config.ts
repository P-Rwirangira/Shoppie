import type { Config } from 'tailwindcss'

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
    theme: {
        extend: {
            zIndex: {
                9999: 9999,
            },
            colors: {
                border: '#E6E6E6',
                input: '#F5F5F5',
                background: '#ffffff',
                foreground: '#000000',
                primary: {
                    DEFAULT: '#00B207',
                    soft: '#84D187',
                    hard: '#2C742F',
                    secondary: '#2C742F',
                    text: '#FFFFFF',
                },
                success: {
                    DEFAULT: '#00B207',
                    secondary: '#2C742F',
                },
                warning: {
                    DEFAULT: '#FF8A00',
                },
                danger: {
                    DEFAULT: '#EA4B48',
                },
                gray: {
                    DEFAULT: '#F2F2F2',
                    '100': '#E6E6E6',
                    '200': '#CCCCCC',
                    '300': '#B3B3B3',
                    '400': '#999999',
                    '500': '#808080',
                    '600': '#666666',
                    '700': '#4D4D4D',
                    '800': '#333333',
                    '900': '#1A1A1A',
                },
                green: {
                    DEFAULT: '#EDF2EE',
                    '100': '#DAE5DA',
                    '200': '#B4CCB4',
                    '300': '#96B297',
                    '400': '#7A997C',
                    '500': '#618062',
                    '600': '#406B42',
                    '700': '#2B572E',
                    '800': '#173B1A',
                    '900': '#002603',
                },
            },
            borderRadius: {
                'lg': '16px',
            },
        },
    },
    plugins: [],
}
export default config
