import { drac } from "@/theme/colors/colors"
import { createSystem, defaultConfig, mergeConfigs } from "@chakra-ui/react"

const config = mergeConfigs( defaultConfig, {
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
				drac: drac
			},
		},
	},
} )

export const system = createSystem( defaultConfig, config )
