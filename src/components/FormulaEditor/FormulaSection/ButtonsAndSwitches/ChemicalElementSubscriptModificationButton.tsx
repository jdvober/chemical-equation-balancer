import React, { useState } from "react"
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti"

import { Button } from "@chakra-ui/react"

import { dracGreen, dracRed } from "@/theme/colors/colors"
import { useMainStore } from "../../../../stores/MainStore"

// If no values, use this:
// type ChemicalElementEditorButtonProps = Record<string, never>
// If values, fill in the object below
type ChemicalElementSubscriptModificationButtonProps = {
	isUpArrow: boolean
	chunkIndex: number
	elementIndex: number
}

export const ChemicalElementSubscriptModificationButton: React.FC<
	ChemicalElementSubscriptModificationButtonProps
> = ({ isUpArrow, chunkIndex, elementIndex }) => {
	const [opacity, setOpacity] = useState(25)
	const formulaEditorChemicalSectionChunks = useMainStore(
		(state) => state.editorChemicalSectionChunks
	)
	const setFormulaEditorChemicalSectionItemSubscriptValue = useMainStore(
		(state) => state.setEditorChemicalSectionItemSubscriptValue
	)

	if (isUpArrow === true) {
		return (
			<Button
				border={`1px solid ${dracGreen}`}
				h="3vh"
				opacity={`${opacity}%`}
				onMouseEnter={() => {
					setOpacity(100)
				}}
				onMouseLeave={() => {
					setOpacity(25)
				}}
				onClick={() => {
					setFormulaEditorChemicalSectionItemSubscriptValue(
						formulaEditorChemicalSectionChunks[chunkIndex].elements[
							elementIndex
						].subscript.value <= 98
							? formulaEditorChemicalSectionChunks[chunkIndex]
									.elements[elementIndex].subscript.value + 1
							: 99,
						chunkIndex,
						elementIndex
					)
				}}
			>
				<TiArrowUpOutline />
			</Button>
		)
	} else {
		return (
			<Button
				border={`1px solid ${dracRed}`}
				h="3vh"
				opacity={`${opacity}%`}
				onMouseEnter={() => {
					setOpacity(100)
				}}
				onMouseLeave={() => {
					setOpacity(25)
				}}
				onClick={() => {
					setFormulaEditorChemicalSectionItemSubscriptValue(
						formulaEditorChemicalSectionChunks[chunkIndex].elements[
							elementIndex
						].subscript.value >= 2
							? formulaEditorChemicalSectionChunks[chunkIndex]
									.elements[elementIndex].subscript.value - 1
							: 99,
						chunkIndex,
						elementIndex
					)
				}}
			>
				<TiArrowDownOutline />
			</Button>
		)
	}
}
