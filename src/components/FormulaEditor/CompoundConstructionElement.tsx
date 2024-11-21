import { useState } from "react"

import { Flex, Text, VStack } from "@chakra-ui/react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

import { dracOrange, dracPurple } from "@/theme/colors/colors"
import { useMainStore } from "../../stores/MainStore"

export const CompoundConstructionElement = ({
	id,
	eID,
	index,
	symbol,
	subscript,
}: {
	id: string
	eID: string
	index: number
	symbol: ChemicalSymbol | ""
	subscript: number
	subscriptColor: any
}) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: id,
		data: {
			symbol: symbol,
			parent: parent,
		},
	})

	const style = {
		transform: CSS.Translate.toString(transform),
	}
	const [col, setCol] = useState(dracPurple)
	const [isSelected, setIsSelected] = useState(false)

	const formulaEditorChemicalSectionItems = useMainStore(
		(state) => state.editorChemicalSectionItems
	)

	const setFormulaEditorChemicalSectionItems = useMainStore(
		(state) => state.setEditorChemicalSectionItems
	)

	const removeElement = () => {
		console.log(eID)

		console.log(formulaEditorChemicalSectionItems)
		console.log("Remove element?")
		setFormulaEditorChemicalSectionItems(
			[...formulaEditorChemicalSectionItems].filter((item) => {
				return item.eID != eID
			})
		)
	}
	const handleContextMenu = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		e.preventDefault()
		removeElement()
	}
	const handleClick = () => {
		setIsSelected(isSelected === true ? false : true)
		setCol(isSelected ? dracOrange : dracPurple)
	}

	const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
		if (e.deltaY < 0) {
			// Increment
			let newItems = [...formulaEditorChemicalSectionItems]
			let updatedItem = formulaEditorChemicalSectionItems.find((item) => {
				console.log(`${item.eID} === ${eID}`)
				return item.eID === eID
			})
			if (updatedItem != undefined) {
				newItems[
					formulaEditorChemicalSectionItems.indexOf(updatedItem)
				] = {
					eID: eID,
					index: index,
					symbol: symbol as ChemicalSymbol,
					subscript: subscript <= 98 ? subscript + 1 : 99,
					subscriptColor: dracPurple,
				}
			}
			setFormulaEditorChemicalSectionItems(newItems)
			return
		}
		// Decrement
		let newItems = [...formulaEditorChemicalSectionItems]
		let updatedItem = formulaEditorChemicalSectionItems.find((item) => {
			console.log(`${item.eID} === ${eID}`)
			return item.eID === eID
		})
		if (updatedItem != undefined) {
			newItems[formulaEditorChemicalSectionItems.indexOf(updatedItem)] = {
				eID: eID,
				index: index,
				symbol: symbol as ChemicalSymbol,
				subscript: subscript >= 2 ? subscript - 1 : 1,
				subscriptColor: dracPurple,
			}
		}
		setFormulaEditorChemicalSectionItems(newItems)
		return
	}

	return (
		<Flex
			padding="3"
			backgroundColor={"none"}
			color={col}
			w={`3vw`}
			h={`3vw`}
			mb=".25vw"
			ml=".125vw"
			mr={
				formulaEditorChemicalSectionItems[
					formulaEditorChemicalSectionItems.indexOf({
						eID: eID,
						index: index,
						symbol: symbol as ChemicalSymbol,
						subscript: subscript,
						subscriptColor: dracPurple,
					}) == -1
						? 0
						: formulaEditorChemicalSectionItems.indexOf({
								eID: eID,
								index: index,
								symbol: symbol as ChemicalSymbol,
								subscript: subscript,
								subscriptColor: dracPurple,
						  })
				].subscript <= 1
					? "-1vw"
					: ".125vw"
			}
			align="center"
			justify={"center"}
			transform={style.transform}
			{...listeners}
			{...attributes}
			ref={setNodeRef}
			userSelect={"none"}
			onContextMenu={(e) => {
				handleContextMenu(e)
			}}
			onClick={() => {
				handleClick()
			}}
			onWheel={(e) => {
				handleWheel(e)
			}}
			_hover={{ transform: "scale(1.2)" }}
		>
			<VStack>
				<Flex
					direction={"row"}
					justifyContent={"center"} /*justify ==> along main axis*/
					alignItems={"center"} /*align ==> along cross axis*/
				>
					<Text
						fontSize={"3.75vh"}
						color={col}
						userSelect={"none"}
						justifySelf="center"
					>
						{symbol}
					</Text>
					<Text
						fontSize={"3.25vh"}
						color={col}
						opacity={subscript === 1 ? "0%" : "100%"}
						userSelect={"none"}
					>
						<sub color={col}>
							{formulaEditorChemicalSectionItems[index].subscript}
						</sub>
					</Text>
				</Flex>
			</VStack>
		</Flex>
	)
}
