import { switchAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(switchAnatomy.keys)

// To use this:
{
	/* <Switch variant="neutral" /> */
}
const neutral = definePartsStyle({
	// define the part you're going to style
	container: {
		// ...
	},
	thumb: {
		bg: "comment",
	},
	track: {
		bg: ""drac.cl"",
		_checked: {
			bg: ""drac.cl"",
		},
	},
})

export const switchTheme = defineMultiStyleConfig({ variants: { neutral } })
