import React from "react"

import { AddParensthesisButton } from "@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/AddParensthesisButton"
import { AddToFormulaButton } from "@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/AddToFormulaButton"
import { ResetButton } from "@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/ResetButton"
import { Flex } from "@chakra-ui/react"

// If no values, use this:
type EditorControlsProps = Record<string, never>
// If values, fill in the object below
//type EditorControlsProps = {}

export const EditorControls: React.FC<EditorControlsProps> = () => {
	return (
		<Flex
			direction="column"
			className="EditorControls"
			h="100%"
			w="auto"
			justifyContent={"center"} /*justify ==> along main axis*/
			alignItems={"center"} /*align ==> along cross axis*/
			ml="1em"
			gap=".5em"
		>
			<AddToFormulaButton />
			<AddParensthesisButton />
			<ResetButton />
		</Flex>
	)
}
