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
				// Based on Dracula Theme
				red: { value: "#ff5555" },
				pink: { value: "#ff79c6" },
				neonPink: { value: "#FF5FAF" },
				orange: { value: "#ffb86c" },
				yellow: { value: "#f1fa8c" },
				lightYellow: { value: "#FFFF70" },
				gold: { value: "#D7AF00" },
				yellowGreen: { value: "#cafc03" },
				green: { value: "#50fa7b" },
				neonGreen: { value: "#AED500" },
				blue: { value: "215578" },
				neonBlue: { value: "#5FD7FF" },
				cyan: { value: "#8be9fd" },
				purple: { value: "#bd93f9" },
				lightPurple: { value: "#AF87D7" },
				neonPurple: { value: "#a103fc" },
				lightGrey: { value: "#585858" },
				medGrey: { value: "#1C1C1C" },
				darkGrey: { value: "#121212" },
				black: { value: "000000" },
				bground: { value: "#282a36" },
				fground: { value: "#f8f8f2" },
				currentLine: { value: "#44475a" },
				comment: { value: "#6272a4" },
			},
		},
	},
} )

export const system = createSystem( defaultConfig, config )
