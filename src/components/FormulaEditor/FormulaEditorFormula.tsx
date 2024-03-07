import React from "react"
import { v4 as uuid } from "uuid"

import { Box, GridItem, HStack } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore"
import { ChemicalCompound } from "../Formula/ChemicalCompound/ChemicalCompound"

// If no values, use this:
type FormulaEditorFormulaProps = Record<string, never>
// If values, fill in the object below
//type FormulaProps = {}

export const FormulaEditorFormula: React.FC<FormulaEditorFormulaProps> = () => {
	const formula = useMainStore((state) => state.formula)

	return (
		<HStack className="FormulaEditorFormula">
			{formula.reactants.map((reactant, reactantIndex) => (
				<GridItem key={uuid()}>
					<HStack alignItems={"center"}>
						<Box
						// h={`${formulaHeightVH} vh`}>
						>
							<ChemicalCompound
								compound={reactant}
								formulaSection="REACTANTS"
								index={reactantIndex}
								includeSymbols={true}
								fontSizeInVH={4}
							/>
						</Box>
					</HStack>
				</GridItem>
			))}
			{formula.products.map((product, productIndex) => (
				<GridItem key={uuid()}>
					<HStack alignItems={"center"}>
						<Box

						// h={`${formulaHeightVH} vh`}>
						>
							<ChemicalCompound
								compound={product}
								formulaSection="PRODUCTS"
								index={productIndex}
								includeSymbols={true}
								fontSizeInVH={4}
							/>
						</Box>
					</HStack>
				</GridItem>
			))}
		</HStack>
	)
}
