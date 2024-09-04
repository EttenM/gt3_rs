const { Oswald } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#E7B55E",
      },
      fontFamily: {
        Oswald: ["Oswald"],
        // GilroyMedium: ["Gilroy-Medium"],
        // GilroySemibold: ["Gilroy-Semibold"],
      },
      screens: {
        //     'mxs': {'max': '480px'},
        //   // => @media (max-width: 639px) { ... }
        //    'msm': {'max': '639px'},
        //   // => @media (max-width: 639px) { ... }
        //    'mmd': {'max': '767px'},
        //   // => @media (max-width: 767px) { ... }
        //    'mlg': {'max': '1023px'},
        //   // => @media (max-width: 1023px) { ... }

        //   'mxl': {'max': '1279px'},
        //   // => @media (max-width: 1279px) { ... }
        // 'm2xl': {'max': '1535px'},
        //   // => @media (max-width: 1535px) { ... }
        // 's': '360px',
        // // => @media (min-width: 360px) { ... }
        s: "400px",
        // => @media (min-width: 480px) { ... }
        xs: "480px",
        // 'fhd': '1900px',
        // => @media (min-width: 480px) { ... }
        //   'sm': '640px',
        // // => @media (min-width: 640px) { ... }
        //   'md': '768px',
        //   // => @media (min-width: 768px) { ... }
        //   'lg': '1024px',
        //   // => @media (min-width: 1024px) { ... }
        //   'xl': '1280px',
        // // => @media (min-width: 1280px) { ... }
        //   '2xl': '1536px',
        // // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
