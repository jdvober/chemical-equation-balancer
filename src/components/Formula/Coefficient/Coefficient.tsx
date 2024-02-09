import React from "react"

import {
	Box,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputStepper,
	Text,
	VStack,
} from "@chakra-ui/react"

import { useMainStore } from "../../../stores/MainStore.ts"

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
	const formulaHeightVH = useMainStore((state) => state.formulaHeightVH)
	const updateCoefficient = useMainStore((state) => state.updateCoefficient)

	const increment = () => {
		// Limit coefficients to double digit numbers
		if (coefficient + 1 > 99) {
			return
		}
		updateCoefficient(formulaSection, index, coefficient + 1)
	}

	const decrement = () => {
		// Coefficients can't be negative
		if (coefficient - 1 < 1) {
			return
		}
		updateCoefficient(formulaSection, index, coefficient - 1)
	}

	const cWidth = "5vw"

	return (
		<VStack
			justify="start"
			align="center"
			h={`${formulaHeightVH}vh`}
			w={cWidth}>
			{/* <Grid
				className={`coefficient-${formulaSection}-${index}`}
				h={`${formulaHeightVH}vh`}
				w={"8vw"}
				// justifyItems="start"
				templateRows={`1fr 3fr 1fr`}> */}
			<NumberInput precision={0}>
				<NumberInputStepper>
					{/* <GridItem> */}
					<Box w={cWidth} mt={"1vh"}>
						<NumberIncrementStepper
							h={`${formulaHeightVH / 6}vh`}
							w="100%"
							bg="dracula.dracGreen"
							_active={{ bg: "green.300" }}
							children="+"
							fontSize={"75%"}
							// fontSize={"4vh"}
							gridRowStart={1}
							gridRowEnd={1}
							onClick={() => increment()}
						/>
					</Box>
					{/* </GridItem> */}
					{/* <GridItem> */}
					<Box h={`${(4 * formulaHeightVH) / 6}vh`} w={cWidth}>
						<Text
							className="coefficient"
							color="dracula.dracFG"
							gridRowStart={2}
							gridRowEnd={2}
							fontSize="100%">
							<u>{coefficient}</u>
						</Text>
					</Box>
					{/* </GridItem> */}
					{/* <GridItem> */}
					<Box w={cWidth} mb={0}>
						<NumberDecrementStepper
							bg="dracula.dracRed"
							h={`${formulaHeightVH / 6}vh`}
							_active={{ bg: "red.500" }}
							children="-"
							gridRowStart={3}
							gridRowEnd={3}
							w={cWidth}
							fontSize={"75%"}
							onClick={() => decrement()}
						/>
					</Box>
					{/* </GridItem> */}
				</NumberInputStepper>
			</NumberInput>
			{/* </Grid> */}
		</VStack>
	)
}
