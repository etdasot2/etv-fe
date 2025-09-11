import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backdropBlur: {
				'custom': '16px',
			},
			backgroundSize: {
				'full': '100% 100% !important',
			},
			fontFamily: {
				sora: ['Sora', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#EA4359',
					light: '#EB6A8B',
					dark: '#D93A62',
				},
				secondary: {
					DEFAULT: '#65D2E9',
					light: '#8ADBEE',
					dark: '#4BCAE4',
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				}, 
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				leftToRight: {
					'0%': { left: '0' },
					'25%': { transform: 'scale(1.2)' },
					'50%': { left: '20px' },
					'75%': { transform: 'scale(0.8)' },
					'100%': { left: '0' },
				},
				rightToLeft: {
					'0%': { right: '0' },
					'25%': { transform: 'scale(0.8)' },
					'50%': { right: '20px' },
					'75%': { transform: 'scale(1.2)' },
					'100%': { right: '0' },
				},
				
				blink: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0" },
				  },
				  "smooth-blink": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0" },
				  },
			},
			animation: {
				leftToRight: 'leftToRight 0.8s ease-in-out infinite',
				rightToLeft: 'rightToLeft 0.8s ease-in-out infinite',
				blink: "blink 1s step-end infinite",
        "smooth-blink": "smooth-blink 1s ease-in-out infinite",
			},

		}

	},
	plugins: [require("tailwindcss-animate"), require("tailwindcss-safe-area")],
};
export default config;
