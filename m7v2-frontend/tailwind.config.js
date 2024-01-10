/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        primary : '#7856ff',
        navcolor: '#3E8BA6',
        contactcolor: '#FDF7F7',
        bodycolor:'#FFFFFF'
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        body:['Nunito'],
        hero:['Cardo']
      },
      
    },
  },
  plugins: [],
}

// rgb(80,11,245) ; 192 237 251
//41 134 246 / 192 237 251
//198 241 255 / 41 134 246
// 186 125 253 /
//#BAE3F2
// btn gray-700
