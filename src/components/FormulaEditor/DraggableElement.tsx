import { useState } from "react"
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti"

import { Button, Flex, Text, VStack } from "@chakra-ui/react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

export const DraggableElement = ({
	id,
	symbol,
	index,
	parent,
	subscript = 1,
}: {
	id: string
	symbol: string
	index: number
	parent: string
	subscript?: number
}) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: id,
		data: {
			title: symbol,
			index: index,
			parent: parent,
		},
	})
	const style = {
		transform: CSS.Translate.toString(transform),
	}
	const [col, setCol] = useState("dracula.dracFG")
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
			w={`4vw`}
			h={`4vw`}
			mb=".25vw"
			ml=".125vw"
			mr=".125vw"
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
				{parent === "FormulaEditorChemicalSection" ? (
					<Button border="1px solid green">
						<TiArrowUpOutline />
					</Button>
				) : null}
				<Text
					onMouseEnter={() => {
						setCol("dracula.dracRed")
					}}
					onMouseLeave={() => {
						setCol("dracula.dracFG")
					}}
					fontSize="2vw"
				>
					{symbol}
					{subscript >= 2 ? <sub>subscript</sub> : ""}
				</Text>
				{parent === "FormulaEditorChemicalSection" ? (
					<Button border="1px solid red">
						<TiArrowDownOutline />
					</Button>
				) : null}
			</VStack>
		</Flex>
	)
}
