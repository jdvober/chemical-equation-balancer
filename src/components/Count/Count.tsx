import React from "react"

import { Box, GridItem, SimpleGrid } from "@chakra-ui/react"

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

	if (editFormulaDrawerActive === true) {
		return (
			<Box
				className="Count-container"
				borderRadius={"1vw"}
				w="33vw"
				h="auto"
			></Box>
		)
	} else {
		return (
			<SimpleGrid
				className="Count-container"
				columns={2}
				minW="33vw"
				maxW="100vw"
				gapX="2vw"
				h="auto"
				fontSize="2em"
			>
				<GridItem colSpan={1}>
					<ReactantCount />
				</GridItem>
				<GridItem colSpan={1}>
					<ProductCount />
				</GridItem>
			</SimpleGrid>
		)
	}
}
