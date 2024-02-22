import { switchAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(switchAnatomy.keys)

const boxy = definePartsStyle({
	track: {
		borderRadius: "sm",
		p: 1,
	},
})

export const switchTheme = defineMultiStyleConfig({ variants: { boxy } })
