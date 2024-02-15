import React from "react"

import { Box, Button, Text } from "@chakra-ui/react"

import { useMainStore } from "../stores/MainStore.ts"

// If no values, use this:
type TestButtonProps = Record<string, never>
// If values, fill in the object below
//type TestButtonProps = {}

export const TestButton: React.FC<TestButtonProps> = () => {
	const testStateVal = useMainStore((state) => state.testStateVal)
	const incrementTestStateVal = useMainStore(
		(state) => state.incrementTestStateVal
	)
	const decrementTestStateVal = useMainStore(
		(state) => state.decrementTestStateVal
	)
	const updateTestStateVal = useMainStore((state) => state.updateTestStateVal)
	const increment = () => {
		console.log("increment")
		incrementTestStateVal()
	}
	const decrement = () => {
		console.log("decrement")
		decrementTestStateVal()
	}
	const update = () => {
		console.log("update")
		updateTestStateVal(testStateVal[0].count * 2)
	}
	return (
		<Box>
			<Button
				className="TestButton"
				color="dracula.dracFG"
				textColor={"dracula.dracRed"}
				onClick={() => {
					increment()
				}}>
				<Text>Increment</Text>
			</Button>
			<Button
				className="TestButton"
				color="dracula.dracFG"
				textColor={"dracula.dracRed"}
				onClick={() => {
					decrement()
				}}>
				<Text>Decrement</Text>
			</Button>
			<Button
				className="TestButton"
				color="dracula.dracFG"
				textColor={"dracula.dracRed"}
				onClick={() => {
					update()
				}}>
				<Text>Update</Text>
			</Button>
		</Box>
	)
}
