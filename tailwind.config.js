// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      // other paths
    ],
    theme: {
      extend: {
        animation: {
          jumping: 'jump 1s infinite'
        },
        keyframes: {
          jump: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' }
          }
        }
      },
    },
    plugins: [],
  }
  