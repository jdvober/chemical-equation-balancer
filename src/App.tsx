import "./App.css"

import { Center, HStack, VStack } from "@chakra-ui/react"
import { DndContext, rectIntersection } from "@dnd-kit/core"

import { ChemicalDisplay } from "./components/ChemicalDisplay/ChemicalDisplay.js"
import { Count } from "./components/Count/Count.js"
import { FormulaEditorFormula } from "./components/FormulaEditor/FormulaEditorFormula.js"
import { FormulaEditorToggleButton } from "./components/FormulaEditor/FormulaEditorToggleButton.js"
import { useMainStore } from "./stores/MainStore"

export const App = () => {
	const formulaEditorChemicalSectionItems = useMainStore(
		(state) => state.formulaEditorChemicalSectionItems
	)
	const setFormulaEditorChemicalSectionItems = useMainStore(
		(state) => state.setFormulaEditorChemicalSectionItems
	)

	return (
		<Center fontSize="5xl">
			<DndContext
				collisionDetection={rectIntersection}
				onDragEnd={(e) => {
					const container = e.over?.id
					const symbol = e.active.data.current?.symbol ?? ""
					// const index = e.active.data.current?.index ?? 0
					const index = formulaEditorChemicalSectionItems.length ?? 0
					const parent = e.active.data.current?.parent ?? "ToDo"
					if (container === "FormulaEditorChemicalSection") {
						console.log(`Adding ${symbol} to ${container}`)
						setFormulaEditorChemicalSectionItems([
							...formulaEditorChemicalSectionItems,
							{
								index: index,
								symbol: symbol,
								subscript: 1,
								subscriptColor: "dracula.dracPurple",
							},
						])
					}
					if (parent === "FormulaEditorChemicalSection") {
						console.log(
							`Removing ${symbol} from FormulaEditorChemicalSection`
						)
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
					console.log(index)
					console.log(formulaEditorChemicalSectionItems)
				}}
			>
				<VStack>
					<HStack>
						<FormulaEditorFormula />
						<FormulaEditorToggleButton />
					</HStack>
					<Count />
					<ChemicalDisplay />
				</VStack>
			</DndContext>
		</Center>
	)
}
