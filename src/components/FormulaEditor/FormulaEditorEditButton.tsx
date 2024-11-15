import React from "react"

import { Button } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore"

// If no values, use this:
type FormulaEditorEditButtonProps = Record<string, never>
// If values, fill in the object below
//type FormulaEditorToggleButtonProps = {}

export const FormulaEditorEditButton: React.FC<
	FormulaEditorEditButtonProps
> = () => {
	const setView = useMainStore((state) => state.setView)

	return (
		<Button
			onClick={() => {
				setView("FORMULA_EDITOR")
			}}
		>
			Edit
		</Button>
	)
}
