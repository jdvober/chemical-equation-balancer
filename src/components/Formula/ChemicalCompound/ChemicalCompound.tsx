import React from "react"
import { v4 as uuid } from "uuid"

import { HStack, Text } from "@chakra-ui/react"

import { useMainStore } from "../../../stores/MainStore.ts"
import { ChemicalElement } from "../ChemicalElement/ChemicalElement.tsx"

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
		<HStack className="compound" m="0px" p="0px" mt="33%" mb="33%">
			{compound.elements.map((element) => (
				<HStack>
					<HStack>
						<ChemicalElement
							symbol={element.symbol}
							subscript={element.subscript}
							key={uuid()}
						/>
					</HStack>
					{formulaSection === "Reactants" ? (
						index < formula.reactants.length - 1 ? (
							<Text color="dracula.dracComment" ml="1vw">
								+
							</Text>
						) : (
							<Text color="dracula.dracComment" ml="1vw">
								→
							</Text>
						)
					) : index < formula.products.length - 1 ? (
						<Text>+</Text>
					) : null}
				</HStack>
			))}
		</HStack>
	)
}