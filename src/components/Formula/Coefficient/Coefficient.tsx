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
	const updateCoefficient = useMainStore((state) => state.updateCoefficient)
	const formulaHeightVH = useMainStore((state) => state.formulaHeightVH)
	const updateCountList = useMainStore((state) => state.updateCountList)

	const cWidth = "5vw"

	const increment = () => {
		updateCoefficient(
			formulaSection,
			index,
			formulaSection == "REACTANTS"
				? formula.reactants[index].coefficient + 1
				: formula.products[index].coefficient + 1
		)

		// Calculate new totals
		const newCountList = CalculateCountList(
			useMainStore.getState().formula,
			formulaSection
		)

		// Update reactant count list
		updateCountList(newCountList, formulaSection)
	}
	const decrement = () => {
		updateCoefficient(
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

		// Calculate new totals
		const newCountList = CalculateCountList(
			useMainStore.getState().formula,
			formulaSection
		)

		// Update reactant count list
		updateCountList(newCountList, formulaSection)
	}
	return (
		<VStack
			justify="start"
			align="center"
			h={`${formulaHeightVH}vh`}
			w={cWidth}>
			<Button
				onClick={() => {
					increment()
				}}>
				+
			</Button>
			<Text color="dracula.dracPurple">
				{formulaSection == "REACTANTS"
					? formula.reactants[index].coefficient
					: formula.products[index].coefficient}
			</Text>

			<Button
				onClick={() => {
					decrement()
				}}>
				-
			</Button>
		</VStack>
	)
}
