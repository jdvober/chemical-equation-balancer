import React from 'react'
import { v4 as uuid } from 'uuid'

import { ChemicalDropZone } from '@/components/FormulaEditor/FormulaSection/ChemicalDropZone'
import { CompoundStack } from '@/components/FormulaEditor/FormulaSection/CompoundConstruction/CompoundStack'
import { useMainStore } from '@/stores/MainStore'
import { Flex, For } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'motion/react'

// If no values, use this:
type CompoundConstructionProps = Record<string, never>
// If values, fill in the object below
//type CompoundConstructionProps = {}

export const CompoundConstruction: React.FC<CompoundConstructionProps> = () => {
	const editorConstructionSectionChunks = useMainStore(
		(state) => state.editorConstructionSectionChunks
	)
	const animatedCompoundConstructionChunkIDs = useMainStore(
		(state) => state.animatedCompoundConstructionChunkIDs
	)

	return (
		<Flex dir='row' w='auto' className='CompoundConstruction' gap='.5em'>
			<AnimatePresence>
				<For
					each={editorConstructionSectionChunks}
					fallback={
						<ChemicalDropZone
							title={'FormulaEditorChemicalSection'}
							items={[]}
						/>
					}
				>
					{(chunk, chunkIndex) => (
						<motion.div
							key={uuid()}
							initial={
								animatedCompoundConstructionChunkIDs.latest ===
								chunk.chunkID
									? { scale: 0.25 }
									: { scale: 1 }
							}
							animate={
								animatedCompoundConstructionChunkIDs.latest ===
								chunk.chunkID
									? {
											scale: 1,
											transition: {
												ease: 'circIn',
												duration: 0.1,
											},
										}
									: { scale: 1 }
							}
							exit={
								animatedCompoundConstructionChunkIDs.latest ===
								chunk.chunkID
									? { scale: 0.1 }
									: { scale: 0.5 }
							}
						>
							<div>
								<CompoundStack
									key={uuid()}
									chunk={chunk}
									chunkIndex={chunkIndex}
								/>
							</div>
						</motion.div>
					)}
				</For>
			</AnimatePresence>
		</Flex>
	)
}
