import { v4 as uuid } from "uuid"

import { Flex, Text, VStack } from "@chakra-ui/react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

import { dracFG, dracRed } from "@/theme/colors/colors"
import { useMainStore } from "../../../stores/MainStore"

export const PeriodicTableDraggableElement = ({
	id,
	eID,
	symbol,
	parent,
}: {
	id: string
	eID: string
	symbol: ChemicalSymbol | ""
	parent: string
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

	const formulaEditorChemicalSectionItems = useMainStore(
		(state) => state.editorChemicalSectionItems
	)

	const setFormulaEditorChemicalSectionItems = useMainStore(
		(state) => state.setEditorChemicalSectionItems
	)

	const addElement = () => {
		console.log(eID)
		setFormulaEditorChemicalSectionItems([
			...formulaEditorChemicalSectionItems,
			{
				eID: uuid(),
				index: formulaEditorChemicalSectionItems.length,
				symbol: symbol,
				subscript: 1,
				subscriptColor: "dracula.dracPurple",
			},
		] as ChemicalSectionItem[])
		console.log(formulaEditorChemicalSectionItems)
	}

	const handleClick = () => {
		addElement()
	}

	return (
		<Flex
			padding="3"
			backgroundColor={
				symbol === "" || parent !== "FormulaEditorElementSection"
					? ""
					: dracFG
			}
			color={"dracula.dracCurrentLine"}
			w={`3vw`}
			h={`3vw`}
			mb=".25vw"
			ml=".125vw"
			mr={".125vw"}
			align="center"
			justify={"center"}
			borderRadius="lg"
			border={symbol === "" ? "" : "2px solid gray.500"}
			boxShadow={symbol === "" ? "" : "0px 0px 5px 2px #2121213b"}
			transform={style.transform}
			{...listeners}
			{...attributes}
			ref={setNodeRef}
			userSelect={"none"}
			onClick={() => {
				handleClick()
			}}
			_hover={{ bg: dracRed }}
		>
			<VStack>
				<Flex
					direction={"row"}
					justifyContent={"center"} /*justify ==> along main axis*/
					alignItems={"center"} /*align ==> along cross axis*/
				>
					<Text
						fontSize={"1.5vw"}
						color={"dracula.dracBG"}
						userSelect={"none"}
						justifySelf="center"
					>
						{symbol}
					</Text>
				</Flex>
			</VStack>
		</Flex>
	)
}
