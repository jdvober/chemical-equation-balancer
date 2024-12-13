import React, { useState } from 'react'
import { TiArrowDownOutline, TiArrowUpOutline } from 'react-icons/ti'

import { Button } from '@chakra-ui/react'

import { useMainStore } from '../../../../stores/MainStore'

// If no values, use this:
// type ChemicalElementEditorButtonProps = Record<string, never>
// If values, fill in the object below
type ChunkSubscriptModificationButtonProps = {
	isUpArrow: boolean
	chunkID: string
}

export const ChunkSubscriptModificationButton: React.FC<
	ChunkSubscriptModificationButtonProps
> = ({ isUpArrow, chunkID }) => {
	const [opacity, setOpacity] = useState(25)
	const editorConstructionSectionChunks = useMainStore(
		(state) => state.editorConstructionSectionChunks
	)
	const setEditorConstructionSectionChunks = useMainStore(
		(state) => state.setEditorConstructionSectionChunks
	)

	if (isUpArrow === true) {
		return (
			<Button
				border={`1px solid green`}
				h="3vh"
				w="90%"
				opacity={`${opacity}%`}
				onMouseEnter={() => {
					setOpacity(100)
				}}
				onMouseLeave={() => {
					setOpacity(25)
				}}
				onClick={() => {
					setEditorConstructionSectionChunks(
						editorConstructionSectionChunks.map((chunk) => {
							if (chunk.chunkID === chunkID) {
								return {
									chunkID: chunkID,
									parenthesesSubscript:
										chunk.parenthesesSubscript >= 99
											? 99
											: chunk.parenthesesSubscript + 1,
									elements: chunk.elements,
								} as CompoundChunk
							} else {
								return chunk
							}
						})
					)
				}}
			>
				<TiArrowUpOutline color="black" />
			</Button>
		)
	} else {
		return (
			<Button
				border={`1px solid red`}
				h="3vh"
				w="90%"
				opacity={`${opacity}%`}
				onMouseEnter={() => {
					setOpacity(100)
				}}
				onMouseLeave={() => {
					setOpacity(25)
				}}
				onClick={() => {
					setEditorConstructionSectionChunks(
						editorConstructionSectionChunks.map((chunk) => {
							if (chunk.chunkID === chunkID) {
								return {
									chunkID: chunkID,
									parenthesesSubscript:
										chunk.parenthesesSubscript <= 1
											? 1
											: chunk.parenthesesSubscript - 1,
									elements: chunk.elements,
								} as CompoundChunk
							} else {
								return chunk
							}
						})
					)
				}}
			>
				<TiArrowDownOutline color="black" />
			</Button>
		)
	}
}
