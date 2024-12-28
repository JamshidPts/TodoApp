/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'phone': { max: '480px' },                // Максимум 480px (мобильные)
        'tablet': { min: '481px', max: '768px' },// 481px до 768px
        'laptop': { min: '769px', max: '1024px' },// 769px до 1024px
        'desktop': { min: '1025px' },     // 4K экраны
      },
      fontFamily: {
        poppins: ['Poppins', 'serif'], // Добавляем шрифт Poppins
      },
      boxShadow: {
        'custom': 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
      },
    },
  },
  plugins: [],
}