import "./App.css"

import { Center } from "@chakra-ui/react"
import {
	DndContext,
	PointerSensor,
	rectIntersection,
	useSensor,
	useSensors,
} from "@dnd-kit/core"

import { v4 as uuid } from "uuid"
import { Balancer } from "./components/Balancer/Balancer.js"
import { FormulaEditor } from "./components/FormulaEditor/FormulaEditor"
import { useMainStore } from "./stores/MainStore"

export const App = () => {
	const formulaEditorChemicalSectionItems = useMainStore(
		(state) => state.formulaEditorChemicalSectionItems
	)
	const setFormulaEditorChemicalSectionItems = useMainStore(
		(state) => state.setFormulaEditorChemicalSectionItems
	)
	const view = useMainStore((state) => state.view)
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 8,
			},
		})
	)
	if (view === "BALANCER") {
		return (
			<Center fontSize="5xl">
				<DndContext
					sensors={sensors}
					collisionDetection={rectIntersection}
					onDragEnd={(e) => {
						const container = e.over?.id
						const symbol = e.active.data.current?.symbol ?? ""
						// const index = e.active.data.current?.index ?? 0
						const index =
							formulaEditorChemicalSectionItems.length ?? 0
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
					<Balancer />
				</DndContext>
			</Center>
		)
	} else if (view === "FORMULA_EDITOR") {
		return <FormulaEditor />
	}
}
