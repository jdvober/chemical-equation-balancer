import React from "react"

import { HStack } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"
import { ChemicalCompound } from "../ChemicalCompound/ChemicalCompound"
import { Coefficient } from "../Coefficient/Coefficient"

type FormulaProps = {}

export const Formula: React.FC<FormulaProps> = () => {
	const formula = useMainStore((state) => state.formula)

	return (
		<div className="formula">
			<HStack>
				{formula.reactants.map((reactant, reactantIndex) => (
					<HStack>
						<Coefficient index={reactantIndex} isReactant={true} />
						<ChemicalCompound
							compound={reactant}
							index={reactantIndex}></ChemicalCompound>
					</HStack>
				))}
				{formula.products.map((product, productIndex) => (
					<HStack>
						<Coefficient index={productIndex} isReactant={false} />
						<ChemicalCompound
							compound={product}
							index={productIndex}></ChemicalCompound>
					</HStack>
				))}
			</HStack>
		</div>
	)
}
