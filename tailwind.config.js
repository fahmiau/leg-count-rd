/** @type {import('tailwindcss').Config} */

const columns = {};
for (let i = 1; i<=24; i++ ) {
  const key = `${i}/24`;
  columns[key] = `${100/24} * i`;
}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // 24 column grid
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      width: columns,
    },
  },
  plugins: [],
}

