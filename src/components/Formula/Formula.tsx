import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Grid, GridItem, HStack } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"
import { ChemicalCompound } from "./ChemicalCompound/ChemicalCompound.tsx"
import { Coefficient } from "./Coefficient/Coefficient"

// If no values, use this:
type FormulaProps = Record<string, never>
// If values, fill in the object below
// type FormulaProps = {}

export const Formula: React.FC<FormulaProps> = () => {
	const formula = useMainStore((state) => state.formula)
	const formulaHeightVH = useMainStore((state) => state.formulaHeightVH)

	return (
		<Grid
			templateColumns={`repeat(${
				2 * (formula.reactants.length + formula.products.length)
			}, 1fr)`}
			gap={0}
			minW="30vw"
			w="50vw"
			maxW="100vw"
			alignItems="center"
			h={`${formulaHeightVH}vh`}
			key={uuid()}>
			{formula.reactants.map((reactant, reactantIndex) => (
				<GridItem w="100%" h={`${formulaHeightVH}vh`} key={uuid()}>
					<HStack alignItems={"center"}>
						<Box
							className={`coefficient-reactants-${reactantIndex}-container`}
							// h={`${formulaHeightVH} vh`}>
						>
							<Coefficient
								index={reactantIndex}
								formulaSection="Reactants"
							/>
						</Box>
						<Box

						// h={`${formulaHeightVH} vh`}>
						>
							<ChemicalCompound
								compound={reactant}
								formulaSection="Reactants"
								index={reactantIndex}
							/>
						</Box>
					</HStack>
				</GridItem>
			))}
			{formula.products.map((product, productIndex) => (
				<GridItem w="100%" h={`${formulaHeightVH}vh`} key={uuid()}>
					<HStack>
						<Box
							className={`coefficient-products-${productIndex}-container`}>
							<Coefficient
								index={productIndex}
								formulaSection="Products"
								key={uuid()}
							/>
						</Box>
						<Box
							className={`chemicalCompound-products-${productIndex}-container`}
							justifyItems="center">
							<ChemicalCompound
								compound={product}
								formulaSection="Products"
								index={productIndex}
							/>
						</Box>
					</HStack>
				</GridItem>
			))}
		</Grid>
	)
}
