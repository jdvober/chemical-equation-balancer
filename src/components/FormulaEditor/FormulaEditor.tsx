import React from "react"
import { v4 as uuid } from "uuid"

import { Box, HStack, VStack } from "@chakra-ui/react"
//@ts-ignore

import { FormulaSection } from "@/components/FormulaEditor/FormulaSection/FormulaSection.tsx"
import { useMainStore } from "@/stores/MainStore.ts"
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
	const formulaEditorChemicalSectionItems = useMainStore(
		(state) => state.editorChemicalSectionItems
	)
	const setFormulaEditorChemicalSectionItems = useMainStore(
		(state) => state.setEditorChemicalSectionItems
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
					const index = formulaEditorChemicalSectionItems.length ?? 0
					const parent = e.active.data.current?.parent ?? "ToDo"
					if (container === "FormulaEditorChemicalSection") {
						setFormulaEditorChemicalSectionItems([
							...formulaEditorChemicalSectionItems,
							{
								index: index,
								eID: uuid(),
								symbol: symbol,
								subscript: 1,
								subscriptColor: "dracula.dracPurple",
							},
						])
					}
					if (parent === "FormulaEditorChemicalSection") {
						setFormulaEditorChemicalSectionItems([
							...formulaEditorChemicalSectionItems.slice(
								0,
								index
							),
							...formulaEditorChemicalSectionItems.slice(
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
				</VStack>
			</DndContext>
		</Box>
	)
}
