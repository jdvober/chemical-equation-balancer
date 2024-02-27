import React from "react"
import { v4 as uuid } from "uuid"

import { Box } from "@chakra-ui/react"

import { FormulaEditorChemicalSection } from "./FormulaEditorChemicalSection.tsx"
import { FormulaEditorElementSection } from "./FormulaEditorElementSection.tsx"

// If no values, use this:
type FormulaEditorProps = Record<string, never>
// If values, fill in the object below
//type FormulaEditorProps = {}

export const FormulaEditor: React.FC<FormulaEditorProps> = () => {
	return (
		<Box
			className="FormulaEditor"
			color="dracula.dracFG"
			border={"1px solid white"}
			h="90%"
		>
			<FormulaEditorChemicalSection id={uuid()} />
			<FormulaEditorElementSection id={uuid()} />
		</Box>
	)
}
