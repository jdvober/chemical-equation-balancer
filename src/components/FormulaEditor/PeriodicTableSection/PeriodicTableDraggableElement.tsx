import { v4 as uuid } from 'uuid'

import './ElementSquare.css'

import { Box, GridItem, Square, Text } from '@chakra-ui/react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

import { Colors, dracBG, dracPurple } from '@/theme/colors/colors'
import { motion } from 'motion/react'
import { useState } from 'react'
import { useMainStore } from '../../../stores/MainStore'

export const PeriodicTableDraggableElement = ({
	id,
	symbol,
	parent,
}: {
	id: string
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

	const animatedCompoundConstructionChunkIDs = useMainStore(
		(state) => state.animatedCompoundConstructionChunkIDs
	)
	const setAnimatedChunkIDs = useMainStore(
		(state) => state.setAnimatedChunkIDs
	)

	const chunkID = uuid()
	const addElement = () => {
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
				chunkID: chunkID,
			},
		] as CompoundChunk[])
	}

	const handleClick = () => {
		console.clear()
		addElement()
		// Set which item to animate
		console.log(
			`Adding ${chunkID} to latest and appending ${animatedCompoundConstructionChunkIDs.latest} to history.`
		)
		const newLists = {
			latest: chunkID,
			history: [
				...animatedCompoundConstructionChunkIDs.history,
				animatedCompoundConstructionChunkIDs.latest,
			],
		}
		console.log(newLists)
		setAnimatedChunkIDs(newLists)
	}
	/*  */
	if (symbol != 'BLANK' && !isDragging) {
		return (
			<motion.div
				whileHover={{
					scale: 1.2,
				}}
				onHoverStart={() => setHovered(true)}
				onHoverEnd={() => setHovered(false)}
			>
				<GridItem>
					<Square
						className='ElementSquare'
						size='6vmin'
						boxShadow={
							hovered === true
								? `0 0 0.4vmin 0.4vmin ${dracPurple}`
								: ''
						}
						filter={
							hovered === true
								? `drop-shadow(${Colors.purple.DEFAULT.value} 0 0 0.3vmin)`
								: `drop-shadow(${Colors.comment.darker.value} 0 0 0.8vmin)`
						}
						// Styling
						backgroundColor='comment'
						color={hovered === true ? 'red' : 'bg'}
						border={`2px solid bg.light`}
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
					size='2.5em'
					// Styling
					backgroundColor='comment'
					color='red'
					border='2px solid bg.light'
					boxShadow={`0px 0px 5px 2px ${dracBG}`}
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
				size='2.5em'
				// Styling
				opacity={'0'}
			></Square>
		</GridItem>
	)
}
