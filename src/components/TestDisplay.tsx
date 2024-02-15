import React from "react"

import { Box } from "@chakra-ui/react"

// If values, fill in the object below
//type TestDisplayProps = {}
import { useMainStore } from "../stores/MainStore.ts"

// If no values, use this:
type TestDisplayProps = Record<string, never>
export const TestDisplay: React.FC<TestDisplayProps> = () => {
	const testStateVal = useMainStore((state) => state.testStateVal)
	return (
		<Box className="TestDisplay" color="dracula.dracFG">
			{testStateVal[0].count}
		</Box>
	)
}
