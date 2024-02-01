import React from "react"

import { Box, HStack, Text } from "@chakra-ui/react"

type ChemicalElementProps = {
	chemicalElement: string
	subscript?: number
}
export const ChemicalElement: React.FC<ChemicalElementProps> = ({
	chemicalElement,
	subscript,
}) => {
	return (
		<Box className="ChemicalElement">
			<HStack>
				<Text>{chemicalElement}</Text>
				{subscript && subscript != 0 && subscript != 1 ? (
					<sub>{subscript}</sub>
				) : null}
			</HStack>
		</Box>
	)
}
