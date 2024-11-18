import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig( {
	cssVarsRoot: ":where(:root, :host)",
	globalCss: {
		"html, body": {
			background: "#282a36"
		},
	},
	theme: {
		tokens: {
			colors: {
				dracula: {
					red: { value: "FF0000" },
					green: { value: "#079822" },
					blue: { value: "215578" },
					lightGrey: { value: "#585858" },
					medGrey: { value: "#1C1C1C" },
					darkGrey: { value: "#121212" },
					white: { value: "#D0D0D0" },
					orange: { value: "#fc9003" },
					yellow: { value: "#fffb00" },
					lightPurple: { value: "#AF87D7" },
					neonBlue: { value: "#5FD7FF" },
					neonGreen: { value: "#AED500" },
					neonPurple: { value: "#a103fc" },
					neonPink: { value: "#FF5FAF" },
					lightYellow: { value: "#FFFF70" },
					yellowGreen: { value: "#cafc03" },
					gold: { value: "#D7AF00" },
					black: { value: "000000" },
					dracBG: { value: "#282a36" },
					dracCurrentLine: { value: "#44475a" },
					dracFG: { value: "#f8f8f2" },
					dracComment: { value: "#6272a4" },
					dracCyan: { value: "#8be9fd" },
					dracGreen: { value: "#50fa7b" },
					dracOrange: { value: "#ffb86c" },
					dracPink: { value: "#ff79c6" },
					dracPurple: { value: "#bd93f9" },
					dracRed: { value: "#ff5555" },
					dracYellow: { value: "#f1fa8c" },

				},
				brand: {
					50: { value: "#e6f2ff" },
					100: { value: "#e6f2ff" },
					200: { value: "#bfdeff" },
					300: { value: "#99caff" },
					// ...
					950: { value: "#001a33" },
				},
			},
		},
		semanticTokens: {
			colors: {
				brand: {
					solid: { value: "{colors.brand.500}" },
					contrast: { value: "{colors.brand.100}" },
					fg: { value: "{colors.brand.700}" },
					muted: { value: "{colors.brand.100}" },
					subtle: { value: "{colors.brand.200}" },
					emphasized: { value: "{colors.brand.300}" },
					focusRing: { value: "{colors.brand.500}" },
				},
			},
		},
	},
} )

export const system = createSystem( defaultConfig, config )
