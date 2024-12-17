import React, { useState } from 'react'
import { RxReset } from 'react-icons/rx'

import { useMainStore } from '@/stores/MainStore'
import { Box, Button } from '@chakra-ui/react'
import { motion } from 'motion/react'

// If no values, use this:
type ResetButtonProps = Record<string, never>
// If values, fill in the object below
//type ResetButtonProps = {}

export const ResetButton: React.FC<ResetButtonProps> = () => {
	const setEditorChemicalSectionItems = useMainStore(
		(state) => state.setEditorConstructionSectionChunks
	)

	const editorChemicalSectionItems = useMainStore(
		(state) => state.editorConstructionSectionChunks
	)

	const [hovered, setHovered] = useState(false)

	return (
		<motion.div
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
			whileHover={{ scale: 1.2 }}
		>
			<Box className="ResetButton">
				<Button
					h="2.5rem"
					w="auto"
					fontSize={'1rem'}
					alignSelf={'center'}
					onClick={() => {
						setEditorChemicalSectionItems(
							editorChemicalSectionItems.slice(0, -1)
						)
					}}
					bg="currentLine"
					color={hovered ? 'red' : 'fg'}
					boxShadow={hovered ? `0 5px 15px purple` : ''}
				>
					<RxReset />
				</Button>
			</Box>
		</motion.div>
	)
}
