import React from "react"

import { NumberInput, Text } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"

type CoefficientProps = { isReactant: boolean; index: number }
export const Coefficient: React.FC<CoefficientProps> = ({
	isReactant,
	index,
}) => {
	const formula = useMainStore((state) => state.formula)
	return (
		<NumberInput defaultValue={1} precision={0} value={index}>
			<Text fontSize={"6xl"}>
				{isReactant === true
					? formula.reactants[index].coefficient
					: formula.products[index].coefficient}
			</Text>
		</NumberInput>
	)
}
