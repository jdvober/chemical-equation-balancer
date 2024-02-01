import React from "react"

import { HStack, Text } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"
import { ChemicalElement } from "../ChemicalElement/ChemicalElement"

type ChemicalCompoundProps = { compound: ChemicalCompound; index: number }
export const ChemicalCompound: React.FC<ChemicalCompoundProps> = ({
	compound,
	index,
}) => {
	const formula = useMainStore((state) => state.formula)
	return (
		<HStack className="compound">
			{compound.elements.map((element) => (
				<HStack>
					<ChemicalElement
						symbol={element.symbol}
						subscript={element.subscript}
					/>
					{compound.isReactant === true ? (
						index < formula.reactants.length - 1 ? (
							<Text>+</Text>
						) : (
							<Text>→</Text>
						)
					) : index < formula.products.length - 1 ? (
						<Text>+</Text>
					) : null}
				</HStack>
			))}
		</HStack>
	)
}
