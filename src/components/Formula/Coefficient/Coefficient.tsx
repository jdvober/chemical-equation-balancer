import React from "react"

import { Button, Text, VStack } from "@chakra-ui/react"

import { CalculateCountList } from "../../../functions/GlobalFunctions.ts"
import { useMainStore } from "../../../stores/MainStore.ts"

type CoefficientProps = {
	formulaSection: FormulaSection
	index: number
}
export const Coefficient: React.FC<CoefficientProps> = ({
	formulaSection,
	index,
}) => {
	const formula = useMainStore((state) => state.formula)
	const setCoefficient = useMainStore((state) => state.setCoefficient)
	const setCountList = useMainStore((state) => state.setCountList)

	const increment = () => {
		setCoefficient(
			formulaSection,
			index,
			formulaSection == "REACTANTS"
				? formula.reactants[index].coefficient + 1
				: formula.products[index].coefficient + 1
		)

		// structuredClone creates a deep copy of formula that has the "read-only" attribute of properties removed (this was enacted by strict mode)
		let updatedFormula = structuredClone(formula)

		formulaSection === "REACTANTS"
			? updatedFormula.reactants[index].coefficient++
			: updatedFormula.products[index].coefficient++

		const newCountList = CalculateCountList(updatedFormula)
		// Update reactant count list
		setCountList(newCountList)
	}
	const decrement = () => {
		setCoefficient(
			formulaSection,
			index,
			formulaSection == "REACTANTS"
				? formula.reactants[index].coefficient <= 1
					? 1
					: formula.reactants[index].coefficient - 1
				: formula.products[index].coefficient <= 1
				? 1
				: formula.products[index].coefficient - 1
		)

		// structuredClone creates a deep copy of formula that has the "read-only" attribute of properties removed (this was enacted by strict mode)
		let updatedFormula = structuredClone(formula)

		formulaSection === "REACTANTS"
			? updatedFormula.reactants[index].coefficient++
			: updatedFormula.products[index].coefficient++

		// Calculate new totals
		const newCountList = CalculateCountList(updatedFormula)
		// Update reactant count list
		setCountList(newCountList)
	}

	return (
		<VStack justify="start" w={"100%"}>
			<Button
				w="1vw"
				h="3vh"
				onClick={() => {
					increment()
				}}
				bg="currentLine"
				color="green"
			>
				+
			</Button>
			<Text color={"pink"} fontSize={"8vh"} alignSelf="center">
				{formulaSection == "REACTANTS"
					? formula.reactants[index].coefficient
					: formula.products[index].coefficient}
			</Text>

			<Button
				w="1vw"
				h="3vh"
				onClick={() => {
					decrement()
				}}
				bg="currentLine"
				color="red"
			>
				-
			</Button>
		</VStack>
	)
}
