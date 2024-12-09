import React from "react"
import { v4 as uuid } from "uuid"

import { CompoundChunk } from "@/components/Balancer/Formula/CompoundChunk/CompoundChunk"
import { ChunkSubscriptModificationButton } from "@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/ChunkSubscriptModificationButton"
import { ChemicalDropZone } from "@/components/FormulaEditor/FormulaSection/ChemicalDropZone"
import { useMainStore } from "@/stores/MainStore"
import { Flex, VStack } from "@chakra-ui/react"

// If no values, use this:
type CompoundConstructionProps = Record<string, never>
// If values, fill in the object below
//type CompoundConstructionProps = {}

export const CompoundConstruction: React.FC<CompoundConstructionProps> = () => {
	const editorConstructionSectionChunks = useMainStore(
		(state) => state.editorConstructionSectionChunks
	)

	return (
		<Flex dir="row" w="auto" className="CompoundConstruction" ml="1rem">
			{editorConstructionSectionChunks.length === 0 ? (
				<ChemicalDropZone
					title={"FormulaEditorChemicalSection"}
					items={[]}
					key={uuid()}
				/>
			) : (
				editorConstructionSectionChunks.map((chunk, chunkIndex) => {
					return (
						<VStack key={uuid()} h="100%" alignSelf="center">
							{chunk.parenthesesSubscript >= 1 ? (
								<ChunkSubscriptModificationButton
									chunkID={chunk.chunkID}
									isUpArrow={true}
								/>
							) : null}
							<CompoundChunk
								chunk={chunk}
								chunkIndex={chunkIndex}
								arrows={true}
								key={uuid()}
								location="CONSTRUCTION"
							/>
							{chunk.parenthesesSubscript >= 1 ? (
								<ChunkSubscriptModificationButton
									chunkID={chunk.chunkID}
									isUpArrow={false}
								/>
							) : null}
						</VStack>
					)
				})
			)}
			{editorConstructionSectionChunks.length >= 1 ? (
				<ChemicalDropZone
					title={"FormulaEditorChemicalSection"}
					items={[]}
				/>
			) : null}
		</Flex>
	)
}
