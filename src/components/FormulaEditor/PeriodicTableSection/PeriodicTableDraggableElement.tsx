import { v4 as uuid } from 'uuid'

import { Box, GridItem, Square, Text } from '@chakra-ui/react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

import { motion } from 'motion/react'
import { useState } from 'react'
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
	const { attributes, listeners, setNodeRef, transform, isDragging } =
		useDraggable({
			id: id,
			data: {
				symbol: symbol,
				parent: parent,
			},
		})

	const [hovered, setHovered] = useState(false)

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

	if (symbol != 'BLANK' && !isDragging) {
		return (
			<motion.div
				whileHover={{
					scale: 1.2,
					boxShadow: '0px 0px 5px 2px purple',
				}}
				onHoverStart={() => setHovered(true)}
				onHoverEnd={() => setHovered(false)}
			>
				<GridItem>
					<Square
						size="2.5em"
						// Styling
						backgroundColor={
							parent !== 'FormulaEditorElementSection'
								? ''
								: 'comment'
						}
						color={hovered === true ? 'red' : 'bg'}
						border={`2px solid bg.light`}
						boxShadow={`0px 0px 5px 2px bg.darker`}
						borderRadius={'10%'}
						// Draggable Stuff
						transform={style.transform}
						{...listeners}
						{...attributes}
						ref={setNodeRef}
						// Actions
						onClick={handleClick}
					>
						<Box>
							<Text>{symbol}</Text>
						</Box>
					</Square>
				</GridItem>
			</motion.div>
		)
	}
	// Element Being Dragged
	else if (symbol != 'BLANK' && isDragging) {
		return (
			<GridItem>
				<Square
					size="2.5em"
					// Styling
					backgroundColor={
						parent !== 'FormulaEditorElementSection'
							? ''
							: 'comment'
					}
					color="red"
					border={`2px solid bg.light`}
					boxShadow={`0px 0px 5px 2px purple`}
					borderRadius={'10%'}
					// Draggable Stuff
					transform={style.transform}
					{...listeners}
					{...attributes}
					ref={setNodeRef}
				>
					<Box>
						<Text>{symbol}</Text>
					</Box>
				</Square>
			</GridItem>
		)
	}
	// Blank Elements As Placeholders
	return (
		<GridItem>
			<Square
				size="2.5em"
				// Styling
				opacity={'0'}
			></Square>
		</GridItem>
	)
}
