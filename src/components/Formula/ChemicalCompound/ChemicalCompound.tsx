import React from "react"
import { v4 as uuid } from "uuid"

import { HStack, Text, VStack } from "@chakra-ui/react"

import { CompoundChunk } from "@/components/Formula/CompoundChunk/CompoundChunk.tsx"
import { useMainStore } from "@/stores/MainStore.ts"

type ChemicalCompoundProps = {
	compound: ChemicalCompound
	formulaSection: FormulaSection
	index: number
	includeSymbols: boolean
}
export const ChemicalCompound: React.FC<ChemicalCompoundProps> = ({
	compound,
	formulaSection,
	index,
	includeSymbols,
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
				{compound.chunks.map((chunk) => (
					<HStack key={uuid()}>
						<CompoundChunk
							chunk={chunk}
							isHovered={compound.isHovered}
						/>
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
						{includeSymbols ? "+" : ""}
					</Text>
				) : null}
			</HStack>
		</VStack>
	)
}
