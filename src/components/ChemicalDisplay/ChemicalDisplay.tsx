import React from "react"

import { Box, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react"

// If values, fill in the object below
//type ChemicalDisplayProps = {}
import { useMainStore } from "../../stores/MainStore.ts"

// If no values, use this:
type ChemicalDisplayProps = Record<string, never>
export const ChemicalDisplay: React.FC<ChemicalDisplayProps> = () => {
	const formula = useMainStore((state) => state.formula)

	return (
		<Flex w="90vw">
			<VStack>
				{formula.reactants.map((reactant) => {
					return (
						<HStack>
							<Box color="red">
								{`${reactant.coefficient} of ${reactant.elements[0].symbol}`}
								<sub>{`${
									reactant.elements[0].subscript > 1
										? reactant.elements[0].subscript
										: null
								}`}</sub>
							</Box>
						</HStack>
					)
				})}
			</VStack>
			<Spacer />
			{formula.reactants.map((reactant) => {
				for (let j = 0; j < reactant.coefficient; j++) {
					return (
						<Box border="1px solid blue">
							{reactant.elements.map((element) => {
								const es = []
								for (let i = 0; i < element.subscript; i++) {
									es.push(element.symbol)
								}
								return (
									<Box m="1vw" border="1px solid yellow">
										<Text color="dracula.dracFG">{es}</Text>
									</Box>
								)
							})}
						</Box>
					)
				}
			})}
			<Spacer />

			{formula.products.map((product) => {
				return (
					<HStack>
						{product.elements.map((element) => {
							{
								const es = []
								for (let i = 0; i < element.subscript; ++i) {
									es.push(<Box>{element.symbol} </Box>)
								}
								return es
							}
						})}
					</HStack>
				)
			})}
		</Flex>
	)
}
