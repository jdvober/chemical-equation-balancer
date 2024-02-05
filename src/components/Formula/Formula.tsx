import React from "react"

import { Center, HStack } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"
import { ChemicalCompound } from "../ChemicalCompound/ChemicalCompound"
import { Coefficient } from "../Coefficient/Coefficient"

type FormulaProps = {}

export const Formula: React.FC<FormulaProps> = () => {
	const formula = useMainStore((state) => state.formula)
	const formulaHeight = useMainStore((state) => state.formulaHeight)

	return (
		<div className="formula">
			<HStack
				alignItems="end"
				alignContent="center"
				justifyItems="center"
				justifyContent="center">
				<Center>
					{formula.reactants.map((reactant, reactantIndex) => (
						<HStack h={formulaHeight}>
							<Coefficient
								index={reactantIndex}
								isReactant={true}
							/>
							<ChemicalCompound
								compound={reactant}
								index={reactantIndex}
							/>
						</HStack>
					))}
					{formula.products.map((product, productIndex) => (
						<HStack>
							<Coefficient
								index={productIndex}
								isReactant={false}
							/>
							<ChemicalCompound
								compound={product}
								index={productIndex}
							/>
						</HStack>
					))}
				</Center>
			</HStack>
		</div>
	)
}
