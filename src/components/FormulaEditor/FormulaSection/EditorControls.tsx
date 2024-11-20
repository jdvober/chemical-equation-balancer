import React from "react"

import { AddToFormulaButton } from "@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/AddToFormulaButton"
import { ResetButton } from "@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/ResetButton"
import { VStack } from "@chakra-ui/react"

// If no values, use this:
type EditorControlsProps = Record<string, never>
// If values, fill in the object below
//type EditorControlsProps = {}

export const EditorControls: React.FC<EditorControlsProps> = () => {
	return (
		<VStack h="100%" alignSelf="center" className="EditorControls">
			<AddToFormulaButton />
			<ResetButton />
		</VStack>
	)
}
