import React, { useState } from "react"
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti"

import { Button } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore"
import { dracGreen, dracRed } from "../../vars/GlobalVars"

// If no values, use this:
// type ChemicalElementEditorButtonProps = Record<string, never>
// If values, fill in the object below
type ChemicalElementEditorButtonProps = {
	isUpArrow: boolean
	index: number
}

export const ChemicalElementEditorButton: React.FC<
	ChemicalElementEditorButtonProps
> = ({ isUpArrow, index }) => {
	const [opacity, setOpacity] = useState(25)
	const setSubscriptColor = useMainStore((state) => state.setSubscriptColor)
	const formulaEditorChemicalSectionItems = useMainStore(
		(state) => state.formulaEditorChemicalSectionItems
	)
	const setFormulaEditorChemicalSectionItemSubscript = useMainStore(
		(state) => state.setFormulaEditorChemicalSectionItemSubscript
	)

	if (isUpArrow === true) {
		return (
			<Button
				border={`1px solid ${dracGreen}`}
				h="3vh"
				opacity={`${opacity}%`}
				onMouseEnter={() => {
					setOpacity(100)
					setSubscriptColor("dracula.dracGreen")
				}}
				onMouseLeave={() => {
					setOpacity(25)
					setSubscriptColor("dracula.dracPurple")
				}}
				onClick={() => {
					setFormulaEditorChemicalSectionItemSubscript(
						formulaEditorChemicalSectionItems[index].subscript + 1,
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
					setSubscriptColor("dracula.dracRed")
				}}
				onMouseLeave={() => {
					setOpacity(25)
					setSubscriptColor("dracula.dracPurple")
				}}
				onClick={() => {
					if (
						formulaEditorChemicalSectionItems[index].subscript >= 2
					) {
						setFormulaEditorChemicalSectionItemSubscript(
							formulaEditorChemicalSectionItems[index].subscript -
								1,
							index
						)
					}
				}}
			>
				<TiArrowDownOutline />
			</Button>
		)
	}
}
