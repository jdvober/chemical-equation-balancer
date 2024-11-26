import React from "react"
import { v4 as uuid } from "uuid"

import { CompoundChunk } from "@/components/Formula/CompoundChunk/CompoundChunk"
import { ChemicalDropZone } from "@/components/FormulaEditor/FormulaSection/ChemicalDropZone"
import { useMainStore } from "@/stores/MainStore"
import { Flex, VStack } from "@chakra-ui/react"

// If no values, use this:
type CompoundConstructionProps = Record<string, never>
// If values, fill in the object below
//type CompoundConstructionProps = {}

export const CompoundConstruction: React.FC<CompoundConstructionProps> = () => {
	const editorChemicalSectionChunks = useMainStore(
		(state) => state.editorChemicalSectionChunks
	)

	return (
		<Flex dir="row" w="auto" className="CompoundConstruction">
			{editorChemicalSectionChunks.length === 0 ? (
				<ChemicalDropZone
					title={"FormulaEditorChemicalSection"}
					items={[]}
					key={uuid()}
				/>
			) : (
				editorChemicalSectionChunks.map((chunk, chunkIndex) => {
					return (
						<VStack key={uuid()} h="100%" alignSelf="center">
							<CompoundChunk
								chunk={chunk}
								chunkIndex={chunkIndex}
								arrows={true}
								key={uuid()}
							/>
						</VStack>
					)
				})
			)}
			{editorChemicalSectionChunks.length >= 1 ? (
				<ChemicalDropZone
					title={"FormulaEditorChemicalSection"}
					items={[]}
				/>
			) : null}
		</Flex>
	)
}
