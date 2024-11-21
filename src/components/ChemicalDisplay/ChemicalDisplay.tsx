import React from "react"
import { v4 as uuid } from "uuid"

import { Flex } from "@chakra-ui/react"

// If values, fill in the object below
//type ChemicalDisplayProps = {}
import { AtomSVG } from "@/components/ChemicalDisplay/AtomSVG.tsx"
import { useMainStore } from "../../stores/MainStore.ts"

// If no values, use this:
type ChemicalDisplayProps = Record<string, never>

export const ChemicalDisplay: React.FC<ChemicalDisplayProps> = () => {
	const formula = useMainStore((state) => state.formula)

	const makeElementList = (formulaSection: FormulaSection) => {
		let elementList = [] as ChemicalSymbol[]
		if (formulaSection === "REACTANTS") {
			formula.reactants.forEach((reactant) => {
				reactant.chunks.forEach((chunk) => {
					chunk.elements.forEach((element) => {
						for (
							let s = 0;
							s <
							reactant.coefficient *
								(chunk.parenthesesSubscript === 0
									? 1
									: chunk.parenthesesSubscript) *
								element.subscript;
							s++
						) {
							elementList.push(element.symbol)
						}
					})
				})
			})
			return elementList
		}
		formula.products.forEach((product) => {
			product.chunks.forEach((chunk) => {
				chunk.elements.forEach((element) => {
					for (
						let s = 0;
						s <
						product.coefficient *
							(chunk.parenthesesSubscript === 0
								? 1
								: chunk.parenthesesSubscript) *
							element.subscript;
						s++
					) {
						elementList.push(element.symbol)
					}
				})
			})
		})
		return elementList
	}

	return (
		<Flex className="ChemicalDisplay" dir="row">
			{}
			{makeElementList("REACTANTS").map((symbol) => {
				return (
					<AtomSVG
						cirFill="white"
						cirRadiusInVW={2.5}
						cirStroke="black"
						symbol={symbol}
						textFill="red"
						key={uuid()}
					/>
				)
			})}
			{makeElementList("PRODUCTS").map((symbol) => {
				return (
					<AtomSVG
						cirFill="black"
						cirRadiusInVW={2.5}
						cirStroke="black"
						symbol={symbol}
						textFill="red"
						key={uuid()}
					/>
				)
			})}
		</Flex>
	)
}
