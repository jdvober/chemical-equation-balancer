import React from "react"

import { Box, HStack, Text } from "@chakra-ui/react"

type ChemicalElementProps = {
	symbol: ChemicalSymbol
	subscript?: number
}
export const ChemicalElement: React.FC<ChemicalElementProps> = ({
	symbol,
	subscript,
}) => {
	return (
		<Box className="ChemicalElement">
			<HStack color="dracula.dracFG">
				<Text>{symbol}</Text>
				{subscript && !(subscript <= 1) ? (
					<Text>
						<sub>{subscript}</sub>
					</Text>
				) : null}
			</HStack>
		</Box>
	)
}
