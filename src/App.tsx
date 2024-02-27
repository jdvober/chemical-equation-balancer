import "./App.css"

import { useState } from "react"

import { Center, VStack } from "@chakra-ui/react"
import { DndContext, rectIntersection } from "@dnd-kit/core"

// import { ChemicalDisplay } from "./components/ChemicalDisplay/ChemicalDisplay.js"
// import { Count } from "./components/Count/Count.js"
// import { Formula } from "./components/Formula/Formula.js"
import { FormulaEditorChemicalSection } from "./components/FormulaEditor/FormulaEditorChemicalSection"
import { FormulaEditorElementSection } from "./components/FormulaEditor/FormulaEditorElementSection"

// import { FormulaEditorToggleButton } from "./components/FormulaEditor/FormulaEditorToggleButton.js"

export const App = () => {
	const [
		FormulaEditorChemicalSectionItems,
		setFormulaEditorChemicalSectionItems,
	] = useState<Array<any>>([])

	return (
		<Center fontSize="5xl">
			<DndContext
				collisionDetection={rectIntersection}
				onDragEnd={(e) => {
					const container = e.over?.id
					const title = e.active.data.current?.title ?? ""
					const index = e.active.data.current?.index ?? 0
					const parent = e.active.data.current?.parent ?? "ToDo"
					if (container === "FormulaEditorChemicalSection") {
						console.log(`Adding ${title} to ${container}`)
						setFormulaEditorChemicalSectionItems([
							...FormulaEditorChemicalSectionItems,
							{ title },
						])
					}
					if (parent === "FormulaEditorChemicalSection") {
						console.log(
							`Removing ${title} from FormulaEditorChemicalSection`
						)
						setFormulaEditorChemicalSectionItems([
							...FormulaEditorChemicalSectionItems.slice(
								0,
								index
							),
							...FormulaEditorChemicalSectionItems.slice(
								index + 1
							),
						])
					}
				}}
			>
				<VStack>
					<FormulaEditorChemicalSection
						title={"FormulaEditorChemicalSection"}
						items={FormulaEditorChemicalSectionItems}
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
