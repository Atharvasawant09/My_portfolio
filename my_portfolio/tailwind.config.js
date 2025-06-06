/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40, end), blink 0.75s step-end infinite',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'rotate-in': 'rotateIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInFromLeft 0.8s ease-out',
        'slide-in-right': 'slideInFromRight 0.8s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-rainbow': 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981)',
      },
      backdropBlur: {
        'xs': '2px',
        'strong': '20px',
      },
      boxShadow: {
        'neon-blue': '0 0 5px #3b82f6, 0 0 10px #3b82f6, 0 0 15px #3b82f6, 0 0 20px #3b82f6',
        'neon-purple': '0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 15px #8b5cf6, 0 0 20px #8b5cf6',
        'neon-cyan': '0 0 5px #06b6d4, 0 0 10px #06b6d4, 0 0 15px #06b6d4, 0 0 20px #06b6d4',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
      },
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'DEFAULT': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 10px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-glow': {
          textShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
