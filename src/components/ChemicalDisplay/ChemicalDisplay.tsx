import React from "react"

import { Flex } from "@chakra-ui/react"

// If values, fill in the object below
//type ChemicalDisplayProps = {}
import { ChemicalDisplayCombo } from "@/components/ChemicalDisplay/ChemicalDisplayCombo"

// If no values, use this:
type ChemicalDisplayProps = Record<string, never>

export const ChemicalDisplay: React.FC<ChemicalDisplayProps> = () => {
	return (
		<Flex dir="column" w="95vw" justifyContent="space-evenly">
			<Flex
				dir="column"
				border={`1px solid`}
				borderColor="drac.cyan"
				w="45vw"
				minW="45vw"
				maxW="45vw"
				p="2vh"
				borderRadius="1vw"
			>
				<ChemicalDisplayCombo />
			</Flex>
		</Flex>
	)
}
