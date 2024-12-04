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
	location: CompoundLocation
}
export const ChemicalCompound: React.FC<ChemicalCompoundProps> = ({
	compound,
	formulaSection,
	index,
	includeSymbols,
	location,
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
			>
				{compound.chunks.map((chunk, chunkIndex) => (
					<HStack
						key={uuid()}
						_hover={{
							transform: "scale()",
							color: "drac.red",
						}}
					>
						<CompoundChunk
							chunk={chunk}
							chunkIndex={chunkIndex}
							arrows={false}
							location={location}
						/>
					</HStack>
				))}
				{formulaSection === "REACTANTS" ? (
					index < formula.reactants.length - 1 ? (
						<Text color="drac.comment" mr="1vw">
							{includeSymbols ? "+" : ""}
						</Text>
					) : null
				) : index < formula.products.length - 1 ? (
					<Text color="drac.comment" mr="1vw">
						{includeSymbols ? "+" : ""}
					</Text>
				) : null}
			</HStack>
		</VStack>
	)
}
