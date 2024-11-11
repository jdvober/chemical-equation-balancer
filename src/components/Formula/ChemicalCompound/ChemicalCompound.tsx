import React from "react"
import { v4 as uuid } from "uuid"

import { HStack, Text, VStack } from "@chakra-ui/react"

import { useMainStore } from "../../../stores/MainStore.ts"
import { ChemicalElement } from "../ChemicalElement/ChemicalElement.tsx"

type ChemicalCompoundProps = {
	compound: ChemicalCompound
	formulaSection: FormulaSection
	index: number
	includeSymbols: boolean
	fontSizeInVH: number
	isHovered?: boolean
}
export const ChemicalCompound: React.FC<ChemicalCompoundProps> = ({
	compound,
	formulaSection,
	index,
	includeSymbols,
	fontSizeInVH,
	isHovered,
}) => {
	const formula = useMainStore((state) => state.formula)

	return (
		<VStack h="20vh">
			<HStack
				className="compound"
				p="0px"
				mt={"auto"}
				mb={"auto"}
				key={uuid()}
				alignSelf="center"
				userSelect={"none"}
			>
				{compound.elements.map((element) => (
					<HStack key={uuid()}>
						<HStack>
							<ChemicalElement
								symbol={element.symbol}
								subscript={element.subscript}
								fontSizeInVH={fontSizeInVH}
								isHovered={isHovered}
								key={uuid()}
							/>
						</HStack>
					</HStack>
				))}
				{formulaSection === "REACTANTS" ? (
					index < formula.reactants.length - 1 ? (
						<Text color="dracula.dracComment" mr="1vw">
							{includeSymbols ? "+" : ""}
						</Text>
					) : null
				) : index < formula.products.length - 1 ? (
					<Text color="dracula.dracComment" mr="1vw">
						+
					</Text>
				) : null}
			</HStack>
		</VStack>
	)
}
