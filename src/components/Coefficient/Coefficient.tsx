import React, { useEffect, useState } from "react"

import {
	Box, Flex, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField,
	NumberInputStepper, Text, VStack
} from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"

type CoefficientProps = { isReactant: boolean; index: number }
export const Coefficient: React.FC<CoefficientProps> = ({
	isReactant,
	index,
}) => {
	const formula = useMainStore((state) => state.formula)
	const formulaHeight = useMainStore((state) => state.formulaHeight)
	const updateCoefficient = useMainStore((state) => state.updateCoefficient)

	const [val, setVal] = useState(
		isReactant === true
			? formula.reactants[index].coefficient
			: formula.products[index].coefficient
	)

	const increment = () => {
		if (isReactant === true) {
			updateCoefficient(true, index, val + 1)
			setVal(val + 1)
		} else {
			updateCoefficient(true, index, val + 1)
			setVal(val + 1)
		}
		console.log(formula)
	}

	const decrement = () => {
		if (isReactant === true) {
			updateCoefficient(
				true,
				index,
				formula.reactants[index].coefficient - 1
			)
			setVal(formula.reactants[index].coefficient - 1)
		} else {
			updateCoefficient(
				true,
				index,
				formula.reactants[index].coefficient - 1
			)
			setVal(formula.reactants[index].coefficient)
		}
		console.log(formula)
	}

	return (
		<Flex
			height={formulaHeight}
			flexDirection="row"
			alignItems="start"
			justifyContent="end"
			ml="0.5em"
			// mr="0.5em"
		>
			<NumberInput
				defaultValue={val}
				min={1}
				precision={0}
				alignContent="center">
				<NumberInputStepper h={formulaHeight}>
					<NumberIncrementStepper onClick={() => increment()} />
					<Text fontSize={"6xl"} color="red.500">
						{isReactant === true
							? formula.reactants[index].coefficient
							: formula.products[index].coefficient}
					</Text>
					<NumberDecrementStepper onClick={() => decrement()} />
				</NumberInputStepper>
			</NumberInput>
		</Flex>
	)
}
