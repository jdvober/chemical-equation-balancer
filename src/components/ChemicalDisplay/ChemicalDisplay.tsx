import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Flex, HStack, Text } from "@chakra-ui/react"

// If values, fill in the object below
//type ChemicalDisplayProps = {}
import { AtomSVG } from "@/components/ChemicalDisplay/AtomSVG.tsx"
import { dracCurrentLine } from "@/theme/colors/colors.ts"
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
					count: element.subscript.value,
				})
			})
		})
		return symbolList
	}

	return (
		<Flex w="95vw" justifyContent="space-evenly">
			<Box
				border={`1px solid ${dracCurrentLine}`}
				w="45vw"
				minW="45vw"
				maxW="45vw"
				overflowX="scroll"
				p="2vh"
				borderRadius="1vw"
			>
				{formula.reactants.map((reactant) => {
					return (
						<Flex dir="column" key={uuid()}>
							<Text>{reactant.coefficient}</Text>
							<Text ml=".25em" mr=".25em">
								of
							</Text>
							{getCompoundString(reactant).map((compound) => {
								return (
									<div key={uuid()}>
										<Text>{compound.symbol}</Text>
										<Text>
											{compound.count > 1 ? (
												<sub>{compound.count}</sub>
											) : null}
										</Text>
									</div>
								)
							})}
							{getCompoundString(reactant).map((compound) => {
								return (
									<div key={uuid()}>
										{/* Atoms */}
										<HStack ml="1vw">
											{Array(
												compound.count *
													reactant.coefficient
											)
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
									</div>
								)
							})}
						</Flex>
					)
				})}
			</Box>
			{/* Products */}
			<Box
				border={`1px solid ${dracCurrentLine}`}
				w="45vw"
				minW="45vw"
				maxW="45vw"
				overflowX="scroll"
				p="2vh"
				borderRadius="1vw"
			>
				{formula.products.map((product) => {
					return (
						<Flex dir="column" key={uuid()}>
							<Text>{product.coefficient}</Text>
							<Text ml=".25em" mr=".25em">
								of
							</Text>
							{getCompoundString(product).map((compound) => {
								return (
									<div key={uuid()}>
										<Text>{compound.symbol}</Text>
										<Text>
											{compound.count > 1 ? (
												<sub>{compound.count}</sub>
											) : null}
										</Text>
									</div>
								)
							})}
							{getCompoundString(product).map((compound) => {
								return (
									<div key={uuid()}>
										{/* Atoms */}
										<HStack ml="1vw">
											{Array(
												compound.count *
													product.coefficient
											)
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
									</div>
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
