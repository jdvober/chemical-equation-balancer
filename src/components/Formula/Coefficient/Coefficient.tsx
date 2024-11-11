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
	const updateCoefficient = useMainStore((state) => state.setCoefficient)
	const setCountList = useMainStore((state) => state.setCountList)
	const productCountList = useMainStore((state) => state.productCountList)

	const increment = () => {
		console.log(productCountList)
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
		setCountList(newCountList, formulaSection)
		console.log("set new count list")
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
		setCountList(newCountList, formulaSection)
	}
	return (
		<VStack justify="start" w={"100%"}>
			<Button
				w="1vw"
				h="3vh"
				onClick={() => {
					increment()
				}}
			>
				+
			</Button>
			<Text
				color="dracula.dracPurple"
				fontSize={"8vh"}
				alignSelf="center"
			>
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
			>
				-
			</Button>
		</VStack>
	)
}
