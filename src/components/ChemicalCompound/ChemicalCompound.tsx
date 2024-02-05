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
							<Text ml="1vw" mr="2vw">
								+
							</Text>
						) : (
							<Text ml="1vw" mr="2vw">
								→
							</Text>
						)
					) : index < formula.products.length - 1 ? (
						<Text ml="1vw" mr="2vw">
							+
						</Text>
					) : null}
				</HStack>
			))}
		</HStack>
	)
}
