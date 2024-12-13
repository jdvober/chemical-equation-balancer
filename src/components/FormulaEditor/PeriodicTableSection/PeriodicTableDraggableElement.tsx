import { v4 as uuid } from 'uuid'

import { Box, GridItem, Square, Text } from '@chakra-ui/react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

import { useMainStore } from '../../../stores/MainStore'

export const PeriodicTableDraggableElement = ({
	id,
	eID,
	symbol,
	parent,
}: {
	id: string
	eID: string
	symbol: ChemicalSymbol
	parent: string
}) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: id,
		data: {
			symbol: symbol,
			parent: parent,
		},
	})

	const style = {
		transform: CSS.Translate.toString(transform),
	}

	const editorConstructionSectionChunks = useMainStore(
		(state) => state.editorConstructionSectionChunks
	)

	const setEditorConstructinSectionChunks = useMainStore(
		(state) => state.setEditorConstructionSectionChunks
	)

	const addElement = () => {
		console.log(eID)
		setEditorConstructinSectionChunks([
			...editorConstructionSectionChunks,
			{
				parenthesesSubscript: 0,
				elements: [
					{
						eID: `${symbol}-${uuid()}`,
						index: editorConstructionSectionChunks.length,
						symbol: symbol,
						subscript: { value: 1, color: 'purple' },
					},
				],
				chunkID: uuid(),
			},
		] as CompoundChunk[])
		console.log(editorConstructionSectionChunks)
	}

	const handleClick = () => {
		addElement()
	}

	return (
		<GridItem>
			<Square
				size="2.5em"
				// Styling
				backgroundColor={
					symbol === 'BLANK' ||
					parent !== 'FormulaEditorElementSection'
						? ''
						: 'comment'
				}
				color={'bg'}
				border={symbol === 'BLANK' ? '' : `2px solid bg.light`}
				boxShadow={
					symbol === 'BLANK' ? '' : `0px 0px 5px 2px bg.darker`
				}
				borderRadius={'10%'}
				// Draggable Stuff
				transform={style.transform}
				{...listeners}
				{...attributes}
				ref={setNodeRef}
				// Actions
				onClick={handleClick}
			>
				<Box>{symbol != 'BLANK' ? <Text>{symbol}</Text> : null}</Box>
			</Square>
		</GridItem>
	)
}
