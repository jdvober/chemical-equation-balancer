import React from "react"

import { Box, HStack, Text } from "@chakra-ui/react"

type ChemicalElementProps = {
	symbol: ChemicalSymbol
	subscript?: number
	fontSizeInVH: number
}
export const ChemicalElement: React.FC<ChemicalElementProps> = ({
	symbol,
	subscript,
	fontSizeInVH,
}) => {
	return (
		<Box className="ChemicalElement">
			<HStack color="dracula.dracFG">
				<Text fontSize={`${fontSizeInVH}vh`}>{symbol}</Text>
				{subscript && !(subscript <= 1) ? (
					<Text fontSize={`${fontSizeInVH}vh`}>
						<sub>{subscript}</sub>
					</Text>
				) : null}
			</HStack>
		</Box>
	)
}
