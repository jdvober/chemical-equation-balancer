import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react"

// If values, fill in the object below
//type ChemicalDisplayProps = {}
import { useMainStore } from "../../stores/MainStore.ts"
import { ChemicalCompound } from "../Formula/ChemicalCompound/ChemicalCompound.tsx"
import { AtomSVGSource } from "./AtomSVGSource"

// If no values, use this:
type ChemicalDisplayProps = Record<string, never>
export const ChemicalDisplay: React.FC<ChemicalDisplayProps> = () => {
	const formula = useMainStore((state) => state.formula)
	const cs = (coefficient: number, subscript: number) => {
		let c = []
		let d = []
		for (let i = 0; i < coefficient; i++) {
			d = []
			for (let j = 0; j < subscript; j++) {
				d.push(
					<Box>
						<AtomSVGSource
							symbol={"H"}
							cirRadiusInVH={10}
							cirFill="white"
							cirStroke="black"
							textFill="blue"
						/>
					</Box>
				)
			}
			console.log(d)
			c.push(d)
		}
		console.log(c)
		return (
			<HStack>
				{c.map((p) => (
					<HStack border="1px solid yellow" borderRadius={"1vw"}>
						{p}{" "}
					</HStack>
				))}
			</HStack>
		)
	}

	return (
		<Flex w="90vw">
			<VStack>
				{formula.reactants.map((reactant) => {
					return (
						<HStack key={uuid()}>
							// Amount Text
							<Box color="red" key={uuid()}>
								<Text>
									{`${reactant.coefficient}`}
									{` of `}
								</Text>
							</Box>
							// Compounds
							<Box color="red" key={uuid()} maxW="30vw">
								{reactant.elements.map((element) => {
									return (
										<HStack>
											<Box>
												{element.symbol}
												<sub>
													{element.subscript <= 1
														? ""
														: element.subscript}
												</sub>
											</Box>
											{cs(
												reactant.coefficient,
												element.subscript
											)}
										</HStack>
									)
								})}
							</Box>
							// Atoms
						</HStack>
					)
				})}
			</VStack>
			<Spacer />
			<VStack>
				{formula.products.map((product, productIndex) => {
					return (
						<HStack key={uuid()}>
							// Amount Text
							<Box color="red" key={uuid()} w="45vw">
								<Text>
									{`${product.coefficient}`}
									{` of `}
								</Text>
							</Box>
							// Compounds
							<HStack color="red" key={uuid()} maxW="30vw">
								<ChemicalCompound
									compound={product}
									formulaSection={product.formulaSection}
									index={productIndex}
								/>
								{product.elements.map((element) => {
									return (
										<HStack>
											{cs(
												product.coefficient,
												element.subscript
											)}
										</HStack>
									)
								})}
							</HStack>
							// Atoms
						</HStack>
					)
				})}
			</VStack>
		</Flex>
	)
}
