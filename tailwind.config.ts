
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
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cyber: {
					background: '#1A1F2C',
					foreground: '#FFFFFF',
					primary: '#9b87f5',
					accent: '#D946EF',
					secondary: '#F97316',
					muted: '#333333',
					border: '#555555',
					shadow: '#000000e6'
				}
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
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px 8px rgba(155, 135, 245, 0.8), 0 0 40px 12px rgba(217, 70, 239, 0.6)' 
					},
					'50%': { 
						boxShadow: '0 0 30px 12px rgba(155, 135, 245, 1), 0 0 60px 18px rgba(217, 70, 239, 0.8)' 
					},
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-15px) rotate(2deg)'
					},
					'50%': {
						transform: 'translateY(-8px) rotate(0deg)'
					},
					'75%': {
						transform: 'translateY(-20px) rotate(-2deg)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						filter: 'brightness(1) saturate(1.2)',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.9',
						filter: 'brightness(1.3) saturate(1.5)',
						transform: 'scale(1.02)'
					}
				},
				'divine-wave': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
				'cosmic-drift': {
					'0%': {
						transform: 'translateX(0) translateY(0) rotate(0deg)'
					},
					'25%': {
						transform: 'translateX(10px) translateY(-5px) rotate(1deg)'
					},
					'50%': {
						transform: 'translateX(-5px) translateY(-10px) rotate(0deg)'
					},
					'75%': {
						transform: 'translateX(-10px) translateY(-5px) rotate(-1deg)'
					},
					'100%': {
						transform: 'translateX(0) translateY(0) rotate(0deg)'
					}
				},
				'ethereal-glow': {
					'0%, 100%': {
						textShadow: '0 0 10px rgba(155, 135, 245, 0.8), 0 0 20px rgba(155, 135, 245, 0.6), 0 0 30px rgba(155, 135, 245, 0.4)'
					},
					'33%': {
						textShadow: '0 0 15px rgba(217, 70, 239, 0.8), 0 0 25px rgba(217, 70, 239, 0.6), 0 0 35px rgba(217, 70, 239, 0.4)'
					},
					'66%': {
						textShadow: '0 0 12px rgba(249, 115, 22, 0.8), 0 0 22px rgba(249, 115, 22, 0.6), 0 0 32px rgba(249, 115, 22, 0.4)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 3s ease-in-out infinite',
				'float': 'float 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'divine-wave': 'divine-wave 6s ease-in-out infinite',
				'cosmic-drift': 'cosmic-drift 12s ease-in-out infinite',
				'ethereal-glow': 'ethereal-glow 5s ease-in-out infinite'
			},
			fontFamily: {
				cyber: ['Orbitron', 'sans-serif'],
				mono: ['Space Mono', 'monospace']
			},
			backgroundImage: {
				'divine-gradient': 'linear-gradient(45deg, #9b87f5, #D946EF, #F97316, #9b87f5)',
				'cosmic-gradient': 'radial-gradient(circle at center, rgba(155,135,245,0.3) 0%, rgba(217,70,239,0.2) 50%, transparent 100%)',
				'ethereal-gradient': 'conic-gradient(from 0deg, #9b87f5, #D946EF, #F97316, #9b87f5)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
