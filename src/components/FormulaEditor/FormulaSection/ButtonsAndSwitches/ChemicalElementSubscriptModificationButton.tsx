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
	index: number
}

export const ChemicalElementSubscriptModificationButton: React.FC<
	ChemicalElementSubscriptModificationButtonProps
> = ({ isUpArrow, index }) => {
	const [opacity, setOpacity] = useState(25)
	const formulaEditorChemicalSectionItems = useMainStore(
		(state) => state.editorChemicalSectionItems
	)
	const setFormulaEditorChemicalSectionItemSubscript = useMainStore(
		(state) => state.setEditorChemicalSectionItemSubscript
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
					setFormulaEditorChemicalSectionItemSubscript(
						formulaEditorChemicalSectionItems[index].subscript <= 98
							? formulaEditorChemicalSectionItems[index]
									.subscript + 1
							: 99,
						index
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
					setFormulaEditorChemicalSectionItemSubscript(
						formulaEditorChemicalSectionItems[index].subscript >= 2
							? formulaEditorChemicalSectionItems[index]
									.subscript - 1
							: 1,
						index
					)
				}}
			>
				<TiArrowDownOutline />
			</Button>
		)
	}
}
