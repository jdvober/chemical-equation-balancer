import React from "react"

import {
	Flex, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputStepper, Text
} from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"

type CoefficientProps = {
	formulaSection: "Reactants" | "Products"
	index: number
}
export const Coefficient: React.FC<CoefficientProps> = ({
	formulaSection,
	index,
}) => {
	const formula = useMainStore((state) => state.formula)
	const getCoefficient = () => {
		if (formulaSection === "Reactants") {
			return formula.reactants[index].coefficient
		}
		return formula.products[index].coefficient
	}
	const coefficient = getCoefficient()
	const formulaHeight = useMainStore((state) => state.formulaHeight)
	const updateCoefficient = useMainStore((state) => state.updateCoefficient)

	const increment = () => {
		updateCoefficient(formulaSection, index, coefficient + 1)
	}

	const decrement = () => {
		if (coefficient - 1 < 1) {
			return
		}
		updateCoefficient(formulaSection, index, coefficient - 1)
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
			<NumberInput precision={0} alignContent="center">
				<NumberInputStepper h={formulaHeight}>
					<NumberIncrementStepper
						bg="dracula.dracGreen"
						_active={{ bg: "green.300" }}
						children="+"
						fontSize={"18pt"}
						onClick={() => increment()}
					/>
					<Text
						className="coefficient"
						fontSize={"6xl"}
						color="dracula.dracFG">
						<u>{coefficient}</u>
					</Text>
					<NumberDecrementStepper
						bg="dracula.dracRed"
						_active={{ bg: "red.500" }}
						children="-"
						fontSize={"18pt"}
						onClick={() => decrement()}
					/>
				</NumberInputStepper>
			</NumberInput>
		</Flex>
	)
}
