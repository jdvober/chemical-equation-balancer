import "./App.css"

import { Center, VStack } from "@chakra-ui/react"

import { ChemicalDisplay } from "./components/ChemicalDisplay/ChemicalDisplay"
import { Count } from "./components/Count/Count"
import { Formula } from "./components/Formula/Formula"

// import { TestButton } from "./components/TestButton"
// import { TestDisplay } from "./components/TestDisplay"

export const App = () => {
	return (
		<Center fontSize="5xl">
			<VStack>
				<Formula />
				<Count />
				<ChemicalDisplay />
			</VStack>

			{/* <VStack>
				<TestButton />
				<TestDisplay />
			</VStack> */}
		</Center>
	)
}
