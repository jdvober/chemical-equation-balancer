import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Flex, HStack, Text } from "@chakra-ui/react"

// If values, fill in the object below
//type ChemicalDisplayProps = {}
import { AtomSVG } from "@/components/ChemicalDisplay/AtomSVG.tsx"
import { useMainStore } from "../../stores/MainStore.ts"

// If no values, use this:
type ChemicalDisplayProps = Record<string, never>

export const ChemicalDisplay: React.FC<ChemicalDisplayProps> = () => {
	const formula = useMainStore((state) => state.formula)

	const getCompoundString = (compound: ChemicalCompound) => {
		let symbolList = [] as { symbol: ChemicalSymbol; count: number }[]
		compound.chunks.forEach((chunk) => {
			chunk.elements.forEach((element) => {
				symbolList.push({
					symbol: element.symbol,
					count: element.subscript,
				})
			})
		})
		return symbolList
	}

	return (
		<Flex w="95vw" justifyContent="space-evenly">
			<Box>
				{formula.reactants.map((reactant) => {
					return (
						<Flex dir="column">
							<Text>{reactant.coefficient}</Text>
							<Text ml=".25em" mr=".25em">
								of
							</Text>
							{getCompoundString(reactant).map((compound) => {
								return (
									<>
										<Text>{compound.symbol}</Text>
										<Text>
											{compound.count > 1 ? (
												<sub>{compound.count}</sub>
											) : null}
										</Text>
									</>
								)
							})}
							{getCompoundString(reactant).map((compound) => {
								return (
									<>
										{/* Atoms */}
										<HStack ml="1vw">
											{Array(compound.count)
												.fill(0)
												.map(() => {
													return (
														<AtomSVG
															cirFill="black"
															cirRadiusInVW={2.5}
															cirStroke="black"
															symbol={
																compound.symbol
															}
															textFill="red"
															key={uuid()}
														/>
													)
												})}
										</HStack>
									</>
								)
							})}
						</Flex>
					)
				})}
			</Box>
			{/* Products */}
			<Box>
				{formula.products.map((product) => {
					return (
						<Flex dir="column">
							<Text>{product.coefficient}</Text>
							<Text ml=".25em" mr=".25em">
								of
							</Text>
							{getCompoundString(product).map((compound) => {
								return (
									<>
										<Text>{compound.symbol}</Text>
										<Text>
											{compound.count > 1 ? (
												<sub>{compound.count}</sub>
											) : null}
										</Text>
									</>
								)
							})}
							{getCompoundString(product).map((compound) => {
								return (
									<>
										{/* Atoms */}
										<HStack ml="1vw">
											{Array(compound.count)
												.fill(0)
												.map(() => {
													return (
														<AtomSVG
															cirFill="black"
															cirRadiusInVW={2.5}
															cirStroke="black"
															symbol={
																compound.symbol
															}
															textFill="red"
															key={uuid()}
														/>
													)
												})}
										</HStack>
									</>
								)
							})}
						</Flex>
					)
				})}
			</Box>
		</Flex>
	)
}

// <AtomSVG
// 	cirFill="black"
// 	cirRadiusInVW={ 2.5 }
// 	cirStroke="black"
// 	symbol={ compound.symbol }
// 	textFill="red"
// 	key={ uuid() }
// />
