import React from 'react'
import { v4 as uuid } from 'uuid'

import { Box, Flex, Spacer } from '@chakra-ui/react'
//@ts-ignore

import { EditorCloseButton } from '@/components/FormulaEditor/EditorCloseButton'
import { FormulaSection } from '@/components/FormulaEditor/FormulaSection/FormulaSection'
import { PresetSelect } from '@/components/FormulaEditor/FormulaSection/PresetSelect'
import { EditorPeriodicTableSection } from '@/components/FormulaEditor/PeriodicTableSection/EditorPeriodicTableSection'
import { useMainStore } from '@/stores/MainStore.ts'
import { dracPurple } from '@/theme/colors/colors.ts'
import {
	DndContext,
	MouseSensor,
	rectIntersection,
	useSensor,
	useSensors,
} from '@dnd-kit/core'

// If no values, use this:
type FormulaEditorProps = Record<string, never>
// If values, fill in the object below
//type FormulaEditorProps = {}

export const FormulaEditor: React.FC<FormulaEditorProps> = () => {
	const formulaEditorChemicalSectionChunks = useMainStore(
		(state) => state.editorConstructionSectionChunks
	)
	const setFormulaEditorChemicalSectionChunks = useMainStore(
		(state) => state.setEditorConstructionSectionChunks
	)
	const sensors = useSensors(
		useSensor(MouseSensor, {
			activationConstraint: {
				distance: 8,
			},
		})
	)

	return (
		<Box className='FormulaEditor' color='fg' h='100svh'>
			<DndContext
				sensors={sensors}
				collisionDetection={rectIntersection}
				onDragEnd={(e) => {
					const container = e.over?.id
					const symbol = e.active.data.current?.symbol ?? ''
					const index = formulaEditorChemicalSectionChunks.length ?? 0
					const parent = e.active.data.current?.parent ?? 'ToDo'
					if (container === 'FormulaEditorChemicalSection') {
						setFormulaEditorChemicalSectionChunks([
							...formulaEditorChemicalSectionChunks,
							{
								elements: [
									{
										index: index,
										eID: uuid(),
										symbol: symbol,
										subscript: {
											value: 1,
											color: dracPurple,
										},
									},
								],
								chunkID: uuid(),
								parenthesesSubscript: 0,
							},
						])
					}
					if (parent === 'FormulaEditorChemicalSection') {
						setFormulaEditorChemicalSectionChunks([
							...formulaEditorChemicalSectionChunks.slice(
								0,
								index
							),
							...formulaEditorChemicalSectionChunks.slice(
								index + 1
							),
						])
					}
				}}
			>
				<Flex direction='column' h='100%' gap='1em'>
					<Flex
						direction='row'
						align='center'
						justifyContent='space-evenly'
						overflowY='none'
					>
						<FormulaSection />
						<Spacer />
						<PresetSelect />
						<EditorCloseButton />
					</Flex>
					<EditorPeriodicTableSection />
				</Flex>
			</DndContext>
		</Box>
	)
}
