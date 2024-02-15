import "./App.css"

import { Box, Center, VStack } from "@chakra-ui/react"

import { Count } from "./components/Count/Count"
import { Formula } from "./components/Formula/Formula"

// import { TestButton } from "./components/TestButton"
// import { TestDisplay } from "./components/TestDisplay"

export const App = () => {
	return (
		<Center fontSize="5xl">
			<VStack>
				<Box m="2vw">
					<Formula />
				</Box>
				<Count />
			</VStack>

			{/* <VStack>
				<TestButton />
				<TestDisplay />
			</VStack> */}
		</Center>
	)
}
