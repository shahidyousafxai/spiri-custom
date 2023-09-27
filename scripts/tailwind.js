tailwind.config = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                'max-xs': { 'max': '479.98px' },
                xs: "480px",
                'max-sm': { 'max': '574.98px' },
                sm: '575px',
                'max-md': { 'max': '767.98px' },
                md: '768px',
                'max-nrml': { 'max': '991.98px' },
                'nrml': '992px',
                'max-lg': { 'max': '1023.98px' },
                lg: '1024px',
                'max-xl': { 'max': '1279.98px' },
                xl: '1280px',
                '2xl': '1536px',
                "2k": "2160px",
                "4k": "4096px",
                '8k': "8192px"
            },
            fontFamily: {
                'lato': ['Lato', 'sans-serif'],
                'rubik': ['Rubik', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            colors: {
                'yellow': '#F3B02E',
                'aqua': '#8FD5E7',
                'red': '#D54126',
                'grey': '#707070',
                'black': '#1A1818',
            },
            fontSize: {
                'h1': '3.875rem',
                'h2': '3rem',
                'h3': '2.25rem',
                'h4': '1.625rem',
                'h5': '1.25rem',
                'h6': '1rem',

                'fs-xl': '1.5rem',
                'fs-lg': '1.25rem',
                'fs-md': '1rem',
                'fs-sm': '0.825rem',
                'fs-xs': '0.75rem',
                'fs-tny': '0.625rem',
            },
            borderRadius: {
                none: '0px',
                sm: '0.125rem',
                DEFAULT: '0.25rem',
                md: '0.375rem',
                lg: '0.5rem',
                xl: '0.75rem',
                '2xl': '1rem',
                '3xl': '1.25rem',
                '4xl': '1.5rem',
                '5xl': '1.75rem',
                '6xl': '2rem',
                '7xl': '2.25rem',
                '8xl': '2.5rem',
                '9xl': '2.75rem',
                full: '9999px',
            },
            spacing: {
                px: '1px',
                0: '0px',
                0.5: '0.125rem',
                1: '0.25rem',
                1.5: '0.375rem',
                2: '0.5rem',
                2.5: '0.625rem',
                3: '0.75rem',
                3.5: '0.875rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                7: '1.75rem',
                8: '2rem',
                9: '2.25rem',
                10: '2.5rem',
                11: '2.75rem',
                12: '3rem',
                13: '3.25rem',
                14: '3.5rem',
                15: '3.75rem',
                16: '4rem',
                18: '4.5rem',
                20: '5rem',
                22: '5.5rem',
                24: '6rem',
                26: '6.5rem',
                28: '7rem',
                30: '7.5rem',
                32: '8rem',
                34: '8.5rem',
                36: '9rem',
                38: '9.5rem',
                40: '10rem',
                42: '10.5rem',
                44: '11rem',
                46: '11.5rem',
                48: '12rem',
                50: '12.6rem',
                52: '13rem',
                54: '13.5rem',
                56: '14rem',
                58: '14.5rem',
                60: '15rem',
                62: '15.5rem',
                64: '16rem',
                66: '16.5rem',
                68: '17rem',
                70: '17.5rem',
                72: '18rem',
                74: '18.5rem',
                76: '19rem',
                78: '19.5rem',
                80: '20rem',
                82: '20.5rem',
                84: '21rem',
                86: '21.5rem',
                88: '22rem',
                90: '22.5rem',
                92: '23rem',
                94: '23.5rem',
                96: '24rem',
                98: '25rem',
                100: '26rem',
                102: '27rem',
                104: '28rem',
                106: '29rem',
                108: '30rem',
                110: '31rem',
                112: '32rem',
                114: '33rem',
                116: '34rem',
                118: '35rem',
                120: '36rem',
                122: '37rem',
                124: '38rem',
                126: '39rem',
                128: '40rem',
                130: '41rem',
                131: '42rem',
                132: '43rem',
                133: '44rem',
                134: '45rem',
                135: '46rem',
            },
            animation: {
                'fade-in': 'fade-in 0.5s linear forwards',
                marquee: 'marquee var(--marquee-duration) linear infinite',
                'spin-slow': 'spin 4s linear infinite',
                'spin-slower': 'spin 6s linear infinite',
                'spin-reverse': 'spin-reverse 1s linear infinite',
                'spin-reverse-slow': 'spin-reverse 4s linear infinite',
                'spin-reverse-slower': 'spin-reverse 6s linear infinite',
            },
        },
    }
}