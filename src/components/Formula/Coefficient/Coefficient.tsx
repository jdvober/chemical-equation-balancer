import React, { useState } from "react"

import { Button, Text, VStack } from "@chakra-ui/react"

import { dracFG } from "@/theme/colors/colors.ts"
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti"
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

	const [opacityUp, setOpacityUp] = useState(50)
	const [opacityDown, setOpacityDown] = useState(50)

	return (
		<VStack justify="start" w={"100%"}>
			<Button
				w="1vw"
				h="3vh"
				onClick={() => {
					increment()
				}}
				bg="drac.cl"
				color="drac.fg"
				border="1px solid"
				borderColor="drac.green"
				opacity={`${opacityUp}%`}
				onMouseEnter={() => {
					setOpacityUp(100)
				}}
				onMouseLeave={() => {
					setOpacityUp(25)
				}}
			>
				<TiArrowUpOutline color={dracFG} />
			</Button>
			<Text color={"drac.pink"} fontSize={"8vh"} alignSelf="center">
				{formulaSection == "REACTANTS"
					? formula.reactants[index].coefficient
					: formula.products[index].coefficient}
			</Text>

			<Button
				border="1px solid"
				borderColor="drac.red"
				w="1vw"
				h="3vh"
				onClick={() => {
					decrement()
				}}
				opacity={`${opacityDown}%`}
				onMouseEnter={() => {
					setOpacityDown(100)
				}}
				onMouseLeave={() => {
					setOpacityDown(50)
				}}
				bg="drac.cl"
				color="drac.red"
			>
				<TiArrowDownOutline color={dracFG} />
			</Button>
		</VStack>
	)
}
