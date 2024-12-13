import React, { useState } from 'react'
import { TiArrowDownOutline, TiArrowUpOutline } from 'react-icons/ti'

import { Button } from '@chakra-ui/react'

import { useMainStore } from '../../../../stores/MainStore'

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
		(state) => state.editorConstructionSectionChunks
	)
	const setFormulaEditorChemicalSectionItemSubscriptValue = useMainStore(
		(state) => state.setEditorConstructionSectionItemSubscriptValue
	)

	if (isUpArrow === true) {
		return (
			<Button
				border={`1px solid green`}
				h="1.25rem"
				w="1rem"
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
				<TiArrowUpOutline color="black" />
			</Button>
		)
	} else {
		return (
			<Button
				border={`1px solid red`}
				h="1.25rem"
				w="1rem"
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
							: 1,
						chunkIndex,
						elementIndex
					)
				}}
			>
				<TiArrowDownOutline color="black" />
			</Button>
		)
	}
}
