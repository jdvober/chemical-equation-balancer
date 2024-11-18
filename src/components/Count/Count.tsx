import React from "react"

import { Box, HStack } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore"
import { ProductCount } from "./ProductCount"
import { ReactantCount } from "./ReactantCount"

// If no values, use this:
type CountProps = Record<string, never>
// If values, fill in the object below
//type CountProps = {}

export const Count: React.FC<CountProps> = () => {
	const editFormulaDrawerActive = useMainStore(
		(state) => state.formulaEditorActive
	)

	const showBorders = false as boolean
	if (editFormulaDrawerActive === true) {
		return (
			<Box
				className="Count-container"
				border={`1px solid #44475a`}
				borderRadius={"1vw"}
				w="33vw"
				h="auto"
				mt="2vh"
			></Box>
		)
	} else {
		return (
			<HStack
				className="Count-container"
				border={showBorders === true ? "1px solid #44475a" : ""}
				w="33vw"
				h="auto"
			>
				<ReactantCount />
				<ProductCount />
			</HStack>
		)
	}
}
