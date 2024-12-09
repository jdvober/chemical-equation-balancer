import React from "react"

import { AddParensthesisButton } from "@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/AddParensthesisButton"
import { AddToFormulaButton } from "@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/AddToFormulaButton"
import { ReactantProductSwitch } from "@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/ReactantProductSwitch"
import { ResetButton } from "@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/ResetButton"
import { VStack } from "@chakra-ui/react"

// If no values, use this:
type EditorControlsProps = Record<string, never>
// If values, fill in the object below
//type EditorControlsProps = {}

export const EditorControls: React.FC<EditorControlsProps> = () => {
	return (
		<VStack
			className="EditorControls"
			h="100%"
			justifyContent={"center"} /*justify ==> along main axis*/
			alignItems={"center"} /*align ==> along cross axis*/
			mr="2rem"
		>
			<AddToFormulaButton />
			<AddParensthesisButton />
			<ResetButton />
			<ReactantProductSwitch />
		</VStack>
	)
}
