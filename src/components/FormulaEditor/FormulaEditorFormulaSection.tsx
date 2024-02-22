import React, { ReactNode } from "react"

import { useDroppable } from "@dnd-kit/core"

// If no values, use this:
// type FormulaEditorFormulaSectionProps = Record<string, never>
// If values, fill in the object below
type FormulaEditorFormulaSectionProps = { children?: ReactNode; id: string }
export const FormulaEditorFormulaSection: React.FC<
	FormulaEditorFormulaSectionProps
> = ({ children, id }) => {
	const { isOver, setNodeRef } = useDroppable({
		id: id,
	})
	const style = {
		color: isOver ? "green" : undefined,
	}

	return (
		<div ref={setNodeRef} style={style}>
			{children}
		</div>
	)
}
