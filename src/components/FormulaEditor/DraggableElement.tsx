import { useState } from "react"

import { Flex, HStack, Text, VStack } from "@chakra-ui/react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

import { useMainStore } from "../../stores/MainStore"

export const DraggableElement = ({
	id,
	symbol,
	index,
	parent,
	subscript,
}: {
	id: string
	symbol: string
	index: number
	parent: string
	subscript: number
}) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: id,
		data: {
			symbol: symbol,
			index: index,
			parent: parent,
		},
	})
	const style = {
		transform: CSS.Translate.toString(transform),
	}
	const [col, setCol] = useState("dracula.dracFG")

	const subscriptColor = useMainStore((state) => state.subscriptColor)
	const formulaEditorChemicalSectionItems = useMainStore(
		(state) => state.formulaEditorChemicalSectionItems
	)

	return (
		<Flex
			padding="3"
			backgroundColor={
				symbol === "" || parent !== "FormulaEditorElementSection"
					? ""
					: col
			}
			color={
				parent !== "FormulaEditorChemicalSection"
					? "dracula.dracCurrentLine"
					: "dracula.dracPurple"
			}
			w={`3vw`}
			h={`3vw`}
			mb=".25vw"
			ml=".125vw"
			mr={parent === "FormulaEditorChemicalSection" ? "2vw" : ".125vw"}
			align="center"
			justify={"center"}
			borderRadius="8"
			border={
				symbol === "" || parent === "FormulaEditorChemicalSection"
					? ""
					: "2px solid gray.500"
			}
			boxShadow={
				symbol === "" || parent === "FormulaEditorChemicalSection"
					? ""
					: "0px 0px 5px 2px #2121213b"
			}
			transform={style.transform}
			{...listeners}
			{...attributes}
			ref={setNodeRef}
		>
			<VStack>
				<HStack>
					<Text
						onMouseEnter={() => {
							setCol("dracula.dracRed")
						}}
						onMouseLeave={() => {
							setCol("dracula.dracFG")
						}}
						fontSize={
							parent === "FormulaEditorChemicalSection"
								? "2vw"
								: "1.5vw"
						}
						color={
							parent === "FormulaEditorChemicalSection"
								? "dracula.dracPurple"
								: "dracula.dracBG"
						}
					>
						{symbol}
					</Text>
					<Text
						onMouseEnter={() => {
							setCol("dracula.dracRed")
						}}
						onMouseLeave={() => {
							setCol("dracula.dracFG")
						}}
						fontSize={
							parent === "FormulaEditorChemicalSection"
								? "2vw"
								: "1.5vw"
						}
						color={subscriptColor}
						opacity={subscript === 1 ? "0%" : "100%"}
					>
						{parent === "FormulaEditorChemicalSection" ? (
							<sub>
								{
									formulaEditorChemicalSectionItems[index]
										.subscript
								}
							</sub>
						) : (
							""
						)}
					</Text>
				</HStack>
			</VStack>
		</Flex>
	)
}
