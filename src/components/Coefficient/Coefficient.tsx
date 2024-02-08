import React from "react"

import {
	Box, Grid, GridItem, NumberDecrementStepper, NumberIncrementStepper, NumberInput,
	NumberInputStepper, Text
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

	return (
		<Grid
			className={`coefficient-${formulaSection}-${index}`}
			h={`${formulaHeightVH + formulaHeightVH * 0.3}vh`}
			w="3vw"
			// border="1px solid orange"
			templateRows={`1fr 3fr 1fr`}>
			<NumberInput precision={0}>
				<NumberInputStepper>
					<GridItem>
						<NumberIncrementStepper
							h={`${formulaHeightVH * 0.15}vh`}
							bg="dracula.dracGreen"
							_active={{ bg: "green.300" }}
							children="+"
							// fontSize={"3 vh"}
							gridRowStart={1}
							gridRowEnd={1}
							onClick={() => increment()}
						/>
					</GridItem>
					<GridItem>
						<Box
							// border="1px solid green"
							minH={`${formulaHeightVH * 0.6}vh`}>
							<Text
								className="coefficient"
								// minH={`${formulaHeightVH}vh`}
								color="dracula.dracFG"
								// border="1px solid yellow"
								gridRowStart={2}
								gridRowEnd={2}
								// fontSize={`${formulaHeightVH * 0.6}vh`}>
							>
								<u>{coefficient}</u>
								{/* {coefficient} */}
							</Text>
						</Box>
					</GridItem>
					<GridItem>
						<NumberDecrementStepper
							bg="dracula.dracRed"
							h={`${formulaHeightVH * 0.15} vh`}
							_active={{ bg: "red.500" }}
							children="-"
							justifySelf={"flex-end"}
							gridRowStart={3}
							gridRowEnd={3}
							// fontSize={"3 vh"}
							onClick={() => decrement()}
						/>
					</GridItem>
				</NumberInputStepper>
			</NumberInput>
		</Grid>
	)
}
