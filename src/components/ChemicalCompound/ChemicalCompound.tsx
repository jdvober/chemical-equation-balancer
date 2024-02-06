import React from "react"
import { v4 as uuid } from "uuid"

import { HStack, Text } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"
import { ChemicalElement } from "../ChemicalElement/ChemicalElement"

type ChemicalCompoundProps = {
	compound: ChemicalCompound
	formulaSection: "Reactants" | "Products"
	index: number
}
export const ChemicalCompound: React.FC<ChemicalCompoundProps> = ({
	compound,
	formulaSection,
	index,
}) => {
	const formula = useMainStore((state) => state.formula)
	return (
		<HStack className="compound">
			{compound.elements.map((element) => (
				<HStack key={uuid()}>
					<ChemicalElement
						symbol={element.symbol}
						subscript={element.subscript}
						key={uuid()}
					/>
					{formulaSection === "Reactants" ? (
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
