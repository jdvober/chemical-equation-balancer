import "./App.css"

import { Center, VStack } from "@chakra-ui/react"
import { DndContext, rectIntersection } from "@dnd-kit/core"

// import { ChemicalDisplay } from "./components/ChemicalDisplay/ChemicalDisplay.js"
// import { Count } from "./components/Count/Count.js"
// import { Formula } from "./components/Formula/Formula.js"
import { FormulaEditorChemicalSection } from "./components/FormulaEditor/FormulaEditorChemicalSection"
import { FormulaEditorElementSection } from "./components/FormulaEditor/FormulaEditorElementSection"
import { useMainStore } from "./stores/MainStore"

// import { FormulaEditorToggleButton } from "./components/FormulaEditor/FormulaEditorToggleButton.js"

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
								subscript: 3,
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
					<FormulaEditorChemicalSection
						items={formulaEditorChemicalSectionItems}
					/>
					<FormulaEditorElementSection />
					{/* <DragAndDrop /> */}
					{/* <HStack>
					<Formula />
					<FormulaEditorToggleButton />
				</HStack>
				<Count />
				<ChemicalDisplay /> */}
				</VStack>
			</DndContext>
		</Center>
	)
}
