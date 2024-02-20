import React from "react"
import { v4 as uuid } from "uuid"

import { Box, GridItem, HStack, SimpleGrid, Spacer } from "@chakra-ui/react"

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
		<SimpleGrid
			columns={2 * (formula.reactants.length + formula.products.length)}
			border="1px solid green">
			<Spacer />
			<Spacer />
			{formula.reactants.map((reactant, reactantIndex) => (
				<GridItem w="100%" h={`${formulaHeightVH}vh`} key={uuid()}>
					<HStack alignItems={"center"}>
						<Box
							className={`coefficient-reactants-${reactantIndex}-container`}
							// h={`${formulaHeightVH} vh`}>
						>
							<Coefficient
								index={reactantIndex}
								formulaSection="REACTANTS"
							/>
						</Box>
						<Box

						// h={`${formulaHeightVH} vh`}>
						>
							<ChemicalCompound
								compound={reactant}
								formulaSection="REACTANTS"
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
								formulaSection="PRODUCTS"
								key={uuid()}
							/>
						</Box>
						<Box
							className={`chemicalCompound-products-${productIndex}-container`}
							justifyItems="center">
							<ChemicalCompound
								compound={product}
								formulaSection="PRODUCTS"
								index={productIndex}
							/>
						</Box>
					</HStack>
				</GridItem>
			))}
			<Spacer />
			<Spacer />
			{/* </Grid> */}
		</SimpleGrid>
	)
}
