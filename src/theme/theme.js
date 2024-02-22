import { extendTheme } from "@chakra-ui/react"
import { Colors } from "./colors/colors"
import { box } from "./components/Box"
import { button } from "./components/Button"
import { switchTheme } from "./components/Switch"
import { Styles } from "./styles"

export const ThemeOverrides = extendTheme({
	// Put overrides here
	styles: Styles,
	colors: Colors,
	components: {
		Button: button,
		Box: box,
		Switch: switchTheme,
	},
	fonts: {
		heading: `'Fira Mono', sans-serif`,
		body: `'Fira Mono', sans-serif`,
	},
})
