import "./App.css"

import { Center, VStack } from "@chakra-ui/react"

import { Count } from "./components/Count/Count"
import { Formula } from "./components/Formula/Formula"

export const App = () => {
	return (
		<Center fontSize="5xl">
			<VStack>
				<Formula />
				<Count />
			</VStack>
		</Center>
	)
}
