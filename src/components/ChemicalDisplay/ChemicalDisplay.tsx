import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react"

// If values, fill in the object below
//type ChemicalDisplayProps = {}
import { useMainStore } from "../../stores/MainStore.ts"
import { ChemicalCompound } from "../Formula/ChemicalCompound/ChemicalCompound.tsx"
import { AtomSVG } from "./AtomSVG.tsx"

// If no values, use this:
type ChemicalDisplayProps = Record<string, never>
export const ChemicalDisplay: React.FC<ChemicalDisplayProps> = () => {
	const formula = useMainStore((state) => state.formula)
	const atomCircles = (coefficient: number, subscript: number) => {
		let groups = []
		let atomCircles = []
		for (let i = 0; i < coefficient; i++) {
			atomCircles = []
			for (let j = 0; j < subscript; j++) {
				atomCircles.push(
					<Box>
						<AtomSVG
							symbol={"H"}
							cirRadiusInVH={10}
							cirFill="white"
							cirStroke="black"
							textFill="blue"
						/>
					</Box>
				)
			}
			console.log(atomCircles)
			groups.push(atomCircles)
		}
		console.log(groups)
		return (
			<HStack>
				{groups.map((p) => (
					<HStack border="1px solid yellow" borderRadius={"1vw"}>
						{p}{" "}
					</HStack>
				))}
			</HStack>
		)
	}

	return (
		<Flex w="90vw" border="1px solid green">
			<VStack>
				{formula.reactants.map((reactant, reactantIndex) => {
					return (
						<HStack key={uuid()}>
							// Amount Text
							<Box
								color="dracula.dracFG"
								key={uuid()}
								maxW="25vw">
								<Text>
									<Text>{`${reactant.coefficient} of: `}</Text>
								</Text>
							</Box>
							// Compounds
							<HStack
								color="dracula.dracFG"
								key={uuid()}
								maxW="30vw">
								<ChemicalCompound
									compound={reactant}
									formulaSection={reactant.formulaSection}
									index={reactantIndex}
									includeSymbols={false}
								/>
								{reactant.elements.map((element) => {
									return (
										<HStack>
											{atomCircles(
												reactant.coefficient,
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
			<Spacer />
			<VStack>
				{formula.products.map((product, productIndex) => {
					return (
						<HStack key={uuid()}>
							// Amount Text
							<Box
								color="dracula.dracFG"
								key={uuid()}
								maxW="25vw">
								<Text>{`${product.coefficient} of: `}</Text>
							</Box>
							// Compounds
							<HStack
								color="dracula.dracFG"
								key={uuid()}
								maxW="30vw">
								<ChemicalCompound
									compound={product}
									formulaSection={product.formulaSection}
									index={productIndex}
									includeSymbols={false}
								/>
								{product.elements.map((element) => {
									return (
										<HStack>
											{atomCircles(
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
