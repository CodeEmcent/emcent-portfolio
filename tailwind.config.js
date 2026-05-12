/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#4ade80',
          dim:     '#22c55e',
          deep:    '#16a34a',
        },
        dark: {
          bg:      '#0d0f0e',
          bg2:     '#131614',
          bg3:     '#1a1d1b',
          surface: '#1f2420',
          border:  '#2a2e2b',
          text:    '#eef0ec',
          text2:   '#9aa398',
          text3:   '#6b7069',
        },
        light: {
          bg:      '#f7f8f5',
          bg2:     '#eef0eb',
          bg3:     '#e5e8e1',
          surface: '#ffffff',
          border:  '#d4d9cf',
          text:    '#141a13',
          text2:   '#4a5548',
          text3:   '#7a8876',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) forwards',
        'fill-bar': 'fillBar 1.2s cubic-bezier(0.4,0,0.2,1) forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fillBar: {
          from: { transform: 'scaleX(0)' },
          to:   { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}
