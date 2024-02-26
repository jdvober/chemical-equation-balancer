import "./App.css"

import { Center, VStack } from "@chakra-ui/react"

import { FormulaEditorElementSection } from "./components/FormulaEditor/FormulaEditorElementSection"
// import { ChemicalDisplay } from "./components/ChemicalDisplay/ChemicalDisplay.js"
// import { Count } from "./components/Count/Count.js"
// import { Formula } from "./components/Formula/Formula.js"
import { FormulaEditorFormulaSection } from "./components/FormulaEditor/FormulaEditorFormulaSection"

// import { FormulaEditorToggleButton } from "./components/FormulaEditor/FormulaEditorToggleButton.js"

export const App = () => {
	return (
		<Center fontSize="5xl">
			<VStack>
				<FormulaEditorFormulaSection />
				<FormulaEditorElementSection />
				{/* <DragAndDrop /> */}
				{/* <HStack>
					<Formula />
					<FormulaEditorToggleButton />
				</HStack>
				<Count />
				<ChemicalDisplay /> */}
			</VStack>
		</Center>
	)
}
