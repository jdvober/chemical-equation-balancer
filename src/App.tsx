import { v4 as uuid } from "uuid"
import "./App.css"

import { Center, HStack, VStack } from "@chakra-ui/react"
import {
	DndContext,
	MouseSensor,
	rectIntersection,
	useSensor,
	useSensors,
} from "@dnd-kit/core"

import { ChemicalDisplay } from "./components/ChemicalDisplay/ChemicalDisplay.js"
import { Count } from "./components/Count/Count.js"
import { Formula } from "./components/Formula/Formula"
import { FormulaEditorToggleButton } from "./components/FormulaEditor/FormulaEditorToggleButton.js"
import { useMainStore } from "./stores/MainStore"

export const App = () => {
	const formulaEditorChemicalSectionItems = useMainStore(
		(state) => state.formulaEditorChemicalSectionItems
	)
	const setFormulaEditorChemicalSectionItems = useMainStore(
		(state) => state.setFormulaEditorChemicalSectionItems
	)
	const sensors = useSensors(
		useSensor(MouseSensor, {
			activationConstraint: {
				distance: 8,
			},
		})
	)
	return (
		<Center fontSize="5xl">
			<DndContext
				sensors={sensors}
				collisionDetection={rectIntersection}
				onDragEnd={(e) => {
					const container = e.over?.id
					const symbol = e.active.data.current?.symbol ?? ""
					// const index = e.active.data.current?.index ?? 0
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
						<Formula />
						<FormulaEditorToggleButton />
					</HStack>
					<Count />
					<ChemicalDisplay />
				</VStack>
			</DndContext>
		</Center>
	)
}
