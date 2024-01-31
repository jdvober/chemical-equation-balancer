import { extendTheme } from "@chakra-ui/react"
import { Styles } from "./styles"
import { Colors } from "./colors/colors"
import { button } from "./components/Button"
import { box } from "./components/Box"

export const ThemeOverrides = extendTheme({
	// Put overrides here
	styles: Styles,
	colors: Colors,
	components: {
		Button: button,
		Box: box,
	},
	fonts: {
		heading: `'Fira Mono', sans-serif`,
		body: `'Fira Mono', sans-serif`,
	},
})
