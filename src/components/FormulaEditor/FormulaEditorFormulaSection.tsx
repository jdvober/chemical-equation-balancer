import React from "react"

import { Box } from "@chakra-ui/react"

// If no values, use this:
// type FormulaEditorFormulaSectionProps = Record<string, never>
// If values, fill in the object below
type FormulaEditorFormulaSectionProps = {}
export const FormulaEditorFormulaSection: React.FC<
	FormulaEditorFormulaSectionProps
> = () => {
	return (
		<Box>
			<Box color="dracula.dracFG">Formula Goes Here</Box>
		</Box>
	)
}
