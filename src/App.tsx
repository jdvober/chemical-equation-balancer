import "./App.css"

import { Center, VStack } from "@chakra-ui/react"

// import { ChemicalDisplay } from "./components/ChemicalDisplay/ChemicalDisplay.js"
// import { Count } from "./components/Count/Count.js"
// import { Formula } from "./components/Formula/Formula.js"
import { DragAndDrop } from "./components/FormulaEditor/DragAndDrop/DragAndDrop.js"

// import { FormulaEditorToggleButton } from "./components/FormulaEditor/FormulaEditorToggleButton.js"

export const App = () => {
	return (
		<Center fontSize="5xl">
			<VStack>
				<DragAndDrop />
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
