import React from "react"
import { v4 as uuid } from "uuid"

import { Box, HStack, VStack } from "@chakra-ui/react"
//@ts-ignore

import { FormulaSection } from "@/components/FormulaEditor/FormulaSection/FormulaSection.tsx"
import { useMainStore } from "@/stores/MainStore.ts"
import { dracPurple } from "@/theme/colors/colors.ts"
import {
	DndContext,
	MouseSensor,
	rectIntersection,
	useSensor,
	useSensors,
} from "@dnd-kit/core"
import { EditorCloseButton } from "./EditorCloseButton"
import { EditorPeriodicTableSection } from "./PeriodicTableSection/EditorPeriodicTableSection.tsx"

// If no values, use this:
type FormulaEditorProps = Record<string, never>
// If values, fill in the object below
//type FormulaEditorProps = {}

export const FormulaEditor: React.FC<FormulaEditorProps> = () => {
	const formulaEditorChemicalSectionChunks = useMainStore(
		(state) => state.editorChemicalSectionChunks
	)
	const setFormulaEditorChemicalSectionChunks = useMainStore(
		(state) => state.setEditorChemicalSectionChunks
	)
	const selectedConstructionCompoundIDs = useMainStore(
		(state) => state.selectedConstructionCompoundIDs
	)
	const sensors = useSensors(
		useSensor(MouseSensor, {
			activationConstraint: {
				distance: 8,
			},
		})
	)

	return (
		<Box className="FormulaEditor" color="dracula.dracFG" h="90%">
			<DndContext
				sensors={sensors}
				collisionDetection={rectIntersection}
				onDragEnd={(e) => {
					const container = e.over?.id
					const symbol = e.active.data.current?.symbol ?? ""
					const index = formulaEditorChemicalSectionChunks.length ?? 0
					const parent = e.active.data.current?.parent ?? "ToDo"
					if (container === "FormulaEditorChemicalSection") {
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
					if (parent === "FormulaEditorChemicalSection") {
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
				<VStack>
					<HStack>
						<FormulaSection />
						<EditorCloseButton />
					</HStack>
					<EditorPeriodicTableSection />
					{selectedConstructionCompoundIDs.map((compound) => {
						return <div key={uuid()}>{compound}</div>
					})}
				</VStack>
			</DndContext>
		</Box>
	)
}
