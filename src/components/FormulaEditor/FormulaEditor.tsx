import React from "react"

import { Box } from "@chakra-ui/react"

import { FormulaEditorChemicalSection } from "./FormulaEditorChemicalSection.tsx"
import { FormulaEditorElementSection } from "./FormulaEditorElementSection.tsx"

// If no values, use this:
type FormulaEditorProps = Record<string, never>
// If values, fill in the object below
//type FormulaEditorProps = {}

export const FormulaEditor: React.FC<FormulaEditorProps> = () => {
	return (
		<Box className="FormulaEditor" color="dracula.dracFG" h="90%">
			<FormulaEditorChemicalSection />
			<FormulaEditorElementSection />
		</Box>
	)
}
