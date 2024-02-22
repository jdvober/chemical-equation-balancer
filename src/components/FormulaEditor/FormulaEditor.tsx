import React from "react"

import { Box, Text } from "@chakra-ui/react"

// If no values, use this:
type FormulaEditorProps = Record<string, never>
// If values, fill in the object below
//type FormulaEditorProps = {}

export const FormulaEditor: React.FC<FormulaEditorProps> = () => {
	return (
		<Box className="FormulaEditor" color="dracula.dracFG">
			<Text>Formula Editor</Text>
		</Box>
	)
}
