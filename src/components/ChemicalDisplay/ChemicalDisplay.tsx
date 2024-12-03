import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Flex, HStack, Text } from "@chakra-ui/react"

// If values, fill in the object below
//type ChemicalDisplayProps = {}
import { AtomSVG } from "@/components/ChemicalDisplay/AtomSVG.tsx"
import { dracCurrentLine, dracCyan } from "@/theme/colors/colors.ts"
import { useMainStore } from "../../stores/MainStore.ts"

// If no values, use this:
type ChemicalDisplayProps = Record<string, never>

export const ChemicalDisplay: React.FC<ChemicalDisplayProps> = () => {
	const formula = useMainStore((state) => state.formula)

	const getCompoundString = (compound: ChemicalCompound) => {
		let symbolList = [] as {
			symbol: ChemicalSymbol
			count: number
			parenthesesSubscript: number
			isFirstElementInChunk: boolean
			isLastElementInChunk: boolean
		}[]
		compound.chunks.forEach((chunk) => {
			chunk.elements.forEach((element, i) => {
				symbolList.push({
					symbol: element.symbol,
					count: element.subscript.value,
					parenthesesSubscript: chunk.parenthesesSubscript,
					isFirstElementInChunk: i === 0 ? true : false,
					isLastElementInChunk:
						i === chunk.elements.length - 1 ? true : false,
				})
			})
		})
		return symbolList
	}

	return (
		<Flex w="95vw" justifyContent="space-evenly">
			<Box
				border={`1px solid drac.cl`}
				w="45vw"
				minW="45vw"
				maxW="45vw"
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
									<Flex dir="row" key={uuid()}>
										{compound.parenthesesSubscript >= 2 &&
										compound.isFirstElementInChunk ===
											true ? (
											<Text>(</Text>
										) : null}
										<Text>{compound.symbol}</Text>
										<Text>
											{compound.count > 1 ? (
												<Text>
													<sub>{compound.count}</sub>
												</Text>
											) : null}
										</Text>
										{compound.parenthesesSubscript >= 2 &&
										compound.isLastElementInChunk ===
											true ? (
											<Flex dir="row">
												<Text>)</Text>
												<Text>
													<sub>
														{
															compound.parenthesesSubscript
														}
													</sub>
												</Text>
											</Flex>
										) : null}
									</Flex>
								)
							})}
							<HStack overflowX={"scroll"} ml="1vw" mb="1vw">
								{getCompoundString(reactant).map((compound) => {
									return (
										<Box key={uuid()}>
											{/* Atoms */}
											<HStack ml="1vw">
												{Array(
													compound.count *
														reactant.coefficient *
														(compound.parenthesesSubscript <=
														0
															? 1
															: compound.parenthesesSubscript)
												)
													.fill(0)
													.map(() => {
														return (
															<AtomSVG
																cirFill={
																	dracCurrentLine
																}
																cirRadiusInVW={
																	2.5
																}
																cirStroke="drac.black"
																symbol={
																	compound.symbol
																}
																textFill={
																	dracCyan
																}
																key={uuid()}
															/>
														)
													})}
											</HStack>
										</Box>
									)
								})}
							</HStack>
						</Flex>
					)
				})}
			</Box>
			{/* Products */}
			<Box
				border={`1px solid drac.cl`}
				w="45vw"
				minW="45vw"
				maxW="45vw"
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
									<Flex dir="row" key={uuid()}>
										{compound.parenthesesSubscript >= 2 &&
										compound.isFirstElementInChunk ===
											true ? (
											<Text>(</Text>
										) : null}
										<Text>{compound.symbol}</Text>
										<Text>
											{compound.count > 1 ? (
												<Text>
													<sub>{compound.count}</sub>
												</Text>
											) : null}
										</Text>
										{compound.parenthesesSubscript >= 2 &&
										compound.isLastElementInChunk ===
											true ? (
											<Flex dir="row">
												<Text>)</Text>
												<Text>
													<sub>
														{
															compound.parenthesesSubscript
														}
													</sub>
												</Text>
											</Flex>
										) : null}
									</Flex>
								)
							})}
							<HStack overflowX={"scroll"} ml="1vw" mb="1vw">
								{getCompoundString(product).map((compound) => {
									return (
										<div key={uuid()}>
											{/* Atoms */}
											<HStack ml="1vw">
												{Array(
													compound.count *
														product.coefficient *
														(compound.parenthesesSubscript <=
														0
															? 1
															: compound.parenthesesSubscript)
												)
													.fill(0)
													.map(() => {
														return (
															<AtomSVG
																cirFill={
																	dracCurrentLine
																}
																cirRadiusInVW={
																	2.5
																}
																cirStroke="drac.black"
																symbol={
																	compound.symbol
																}
																textFill={
																	dracCyan
																}
																key={uuid()}
															/>
														)
													})}
											</HStack>
										</div>
									)
								})}
							</HStack>
						</Flex>
					)
				})}
			</Box>
		</Flex>
	)
}

// <AtomSVG
// 	cirFill="drac.black"
// 	cirRadiusInVW={ 2.5 }
// 	cirStroke="drac.black"
// 	symbol={ compound.symbol }
// 	textFill="drac.red"
// 	key={ uuid() }
// />
