import React from "react"
import { v4 as uuid } from "uuid"

import { Center, HStack } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"
import { ChemicalCompound } from "../ChemicalCompound/ChemicalCompound"
import { Coefficient } from "../Coefficient/Coefficient"

// If no values, use this:
type FormulaProps = Record<string, never>
// If values, fill in the object below
// type FormulaProps = {}

export const Formula: React.FC<FormulaProps> = () => {
	const formula = useMainStore((state) => state.formula)
	const formulaHeight = useMainStore((state) => state.formulaHeight)

	return (
		<div className="formula">
			<HStack
				alignItems="end"
				alignContent="center"
				justifyItems="center"
				justifyContent="center"
				color="dracula.dracComment">
				<Center>
					{formula.reactants.map((reactant, reactantIndex) => (
						<HStack h={formulaHeight} key={uuid()}>
							<Coefficient
								index={reactantIndex}
								formulaSection="Reactants"
								key={uuid()}
							/>
							<ChemicalCompound
								compound={reactant}
								formulaSection="Reactants"
								index={reactantIndex}
								key={uuid()}
							/>
						</HStack>
					))}
					{formula.products.map((product, productIndex) => (
						<HStack key={uuid()}>
							<Coefficient
								index={productIndex}
								formulaSection="Products"
								key={uuid()}
							/>
							<ChemicalCompound
								compound={product}
								formulaSection="Products"
								index={productIndex}
								key={uuid()}
							/>
						</HStack>
					))}
				</Center>
			</HStack>
		</div>
	)
}
