import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				'border-interactive': 'hsl(var(--border-interactive))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					elevated: 'hsl(var(--surface-elevated))',
					interactive: 'hsl(var(--surface-interactive))'
				},
				text: {
					primary: 'hsl(var(--text-primary))',
					secondary: 'hsl(var(--text-secondary))',
					muted: 'hsl(var(--text-muted))',
					accent: 'hsl(var(--text-accent))'
				},
				accent: {
					blue: 'hsl(var(--accent-blue))',
					purple: 'hsl(var(--accent-purple))',
					green: 'hsl(var(--accent-green))',
					orange: 'hsl(var(--accent-orange))',
					pink: 'hsl(var(--accent-pink))'
				},
				primary: {
					DEFAULT: 'hsl(var(--accent-blue))',
					foreground: 'hsl(var(--text-primary))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--surface-elevated))',
					foreground: 'hsl(var(--text-secondary))'
				},
				destructive: {
					DEFAULT: 'hsl(0 84.2% 60.2%)',
					foreground: 'hsl(var(--text-primary))'
				},
				muted: {
					DEFAULT: 'hsl(var(--surface))',
					foreground: 'hsl(var(--text-muted))'
				},
				popover: {
					DEFAULT: 'hsl(var(--surface-elevated))',
					foreground: 'hsl(var(--text-primary))'
				},
				card: {
					DEFAULT: 'hsl(var(--surface))',
					foreground: 'hsl(var(--text-primary))'
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace']
			},
			backgroundImage: {
				'gradient-brand': 'var(--gradient-brand)',
				'gradient-success': 'var(--gradient-success)',
				'gradient-learning': 'var(--gradient-learning)',
				'gradient-neural': 'var(--gradient-neural)',
				'gradient-code': 'var(--gradient-code)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'progress-fill': {
					from: { width: '0%' },
					to: { width: 'var(--progress-width)' }
				},
				'success-bounce': {
					'0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
					'40%': { transform: 'translateY(-10px)' },
					'60%': { transform: 'translateY(-5px)' }
				},
				glow: {
					'0%': { boxShadow: '0 0 20px hsl(217 91% 60% / 0.1)' },
					'100%': { boxShadow: '0 0 40px hsl(217 91% 60% / 0.3)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'progress-fill': 'progress-fill 1s ease-out forwards',
				'success-bounce': 'success-bounce 0.6s ease-out',
				'glow': 'glow 2s ease-in-out infinite alternate'
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
