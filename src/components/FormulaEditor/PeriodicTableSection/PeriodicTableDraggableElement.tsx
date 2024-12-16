import { v4 as uuid } from 'uuid'

import { Box, GridItem, Square } from '@chakra-ui/react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { AnimatePresence, motion } from 'motion/react'

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

	const [c, setC] = useState('bg')

	return (
		<GridItem>
			<AnimatePresence>
				{/* Quick grow on render */}
				<motion.div
					whileHover={{
						color: c,
						boxShadow: `0 5px 15px purple`,
						scale: 1.4,
					}}
				>
					<Square
						size="2.5em"
						// Styling
						backgroundColor={
							symbol === 'BLANK' ||
							parent !== 'FormulaEditorElementSection'
								? ''
								: 'comment'
						}
						color={c}
						border={symbol === 'BLANK' ? '' : `2px solid bg.light`}
						boxShadow={
							symbol === 'BLANK'
								? ''
								: `0px 0px 5px 2px bg.darker`
						}
						borderRadius={'10%'}
						// Draggable Stuff
						transform={style.transform}
						{...listeners}
						{...attributes}
						ref={setNodeRef}
						// Actions
						onClick={handleClick}
						onMouseEnter={() => {
							if (symbol != 'BLANK') {
								setC('red')
							}
						}}
						onMouseLeave={() => {
							setC('bg')
						}}
					>
						<Box>{symbol != 'BLANK' ? symbol : null}</Box>
					</Square>
				</motion.div>
			</AnimatePresence>
		</GridItem>
	)
}
