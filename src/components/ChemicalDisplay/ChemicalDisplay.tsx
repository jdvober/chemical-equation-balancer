import React from "react"
import { v4 as uuid } from "uuid"

import { Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react"

// If values, fill in the object below
//type ChemicalDisplayProps = {}
import { useMainStore } from "../../stores/MainStore.ts"
import { ChemicalCompound } from "../Formula/ChemicalCompound/ChemicalCompound.tsx"
import { AtomSVG } from "./AtomSVG.tsx"

// If no values, use this:
type ChemicalDisplayProps = Record<string, never>

export const ChemicalDisplay: React.FC<ChemicalDisplayProps> = () => {
	const formula = useMainStore((state) => state.formula)
	const showBorders = false as boolean

	const makeChemicalArr = (element: ChemicalElement) => {
		const chemArr: ChemicalSymbol[] = []
		for (let i = 0; i < element.subscript; i++) {
			chemArr.push(element.symbol)
		}
		return chemArr
	}

	const makeChemicalArrays = (compound: ChemicalCompound) => {
		const chemsArr: ChemicalSymbol[][] = []
		for (let coeff = 0; coeff < compound.coefficient; coeff++) {
			// Make {coefficient} copies of the list of elements
			const chemicals = compound.elements.map((element) => {
				return makeChemicalArr(element)
			})
			chemsArr.push(chemicals.flat())
		}
		return chemsArr
	}

	const displayList = (reactantsOrProducts: ChemicalCompound[]) => {
		return reactantsOrProducts.map((compound, compoundIndex) => {
			return (
				<VStack
					key={uuid()}
					border={showBorders === true ? "1px solid white" : ""}
					h="15vh"
					maxH="15vh"
					minH="15vh"
					w="20vw"
				>
					// Amount Text
					<HStack color="dracula.dracFG" key={uuid()} maxW="30vw">
						<Text color="dracula.dracCyan">
							{`${compound.coefficient}`}
						</Text>
						<Text color="dracula.dracComment">of</Text>
						<ChemicalCompound
							compound={compound}
							formulaSection={compound.formulaSection}
							index={compoundIndex}
							includeSymbols={false}
						/>
					</HStack>
					// Atoms
					{makeChemicalArrays(compound).map((chemicalArray) => {
						return (
							<HStack
								border={"1px solid orange"}
								borderRadius={"1vw"}
								p="1vw"
								key={uuid()}
							>
								{/* <Text color="dracula.dracOrange">
									{chemicalArray}
								</Text> */}
								{chemicalArray.map((arr) => {
									return (
										<AtomSVG
											cirFill="white"
											cirRadiusInVW={2}
											cirStroke="black"
											symbol={arr}
											textFill="red"
											key={uuid()}
										/>
									)
								})}
							</HStack>
						)
					})}
				</VStack>
			)
		})
	}

	return (
		<Flex
			w="90vw"
			border={showBorders === true ? "1px solid green" : ""}
			maxH="50vh"
		>
			<HStack>{displayList(formula.reactants)}</HStack>
			<Spacer />
			<HStack>{displayList(formula.products)}</HStack>
		</Flex>
	)
}
