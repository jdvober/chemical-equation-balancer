import React from "react"

import { GridItem, SimpleGrid } from "@chakra-ui/react"

// If values, fill in the object below
//type ChemicalDisplayProps = {}
import { ChemicalDisplayCombo } from "@/components/ChemicalDisplay/ChemicalDisplayCombo"

// If no values, use this:
type ChemicalDisplayProps = Record<string, never>

export const ChemicalDisplay: React.FC<ChemicalDisplayProps> = () => {
	return (
		// <Flex
		// 	dir="column"
		// 	w="100vw"
		// 	justifyContent="space-evenly"
		// 	border="1px solid pink"
		// >
		// 	<Flex
		// 		dir="column"
		// 		border={`1px solid`}
		// 		borderColor="drac.cyan"
		// 		w="50vw"
		// 		p="2vh"
		// 		borderRadius="1vw"
		// 	>
		// 		<ChemicalDisplayCombo formulaSection="REACTANTS" />
		// 	</Flex>
		// 	<Flex
		// 		dir="column"
		// 		border={`1px solid`}
		// 		borderColor="drac.cyan"
		// 		w="50vw"
		// 		p="2vh"
		// 		borderRadius="1vw"
		// 	>
		// 		<ChemicalDisplayCombo formulaSection="PRODUCTS" />
		// 	</Flex>
		// </Flex>

		<SimpleGrid w="96vw" columns={2} gap={"2vw"}>
			<GridItem
				colSpan={1}
				border={`1px solid`}
				borderColor="drac.cyan"
				p="2vh"
				borderRadius="1vw"
			>
				<ChemicalDisplayCombo formulaSection="REACTANTS" />
			</GridItem>
			<GridItem
				colSpan={1}
				border={`1px solid`}
				borderColor="drac.cyan"
				p="2vh"
				borderRadius="1vw"
			>
				<ChemicalDisplayCombo formulaSection="PRODUCTS" />
			</GridItem>
		</SimpleGrid>
	)
}
