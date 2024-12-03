import { v4 as uuid } from "uuid"

import { Flex, Text, VStack } from "@chakra-ui/react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

import { useMainStore } from "../../../stores/MainStore"

export const PeriodicTableDraggableElement = ({
	id,
	eID,
	symbol,
	parent,
}: {
	id: string
	eID: string
	symbol: ChemicalSymbol
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

	const editorConstructionSectionChunks = useMainStore(
		(state) => state.editorConstructionSectionChunks
	)

	const setEditorConstructinSectionChunks = useMainStore(
		(state) => state.setEditorConstructionSectionChunks
	)

	const addElement = () => {
		console.log(eID)
		setEditorConstructinSectionChunks([
			...editorConstructionSectionChunks,
			{
				parenthesesSubscript: 0,
				elements: [
					{
						eID: `${symbol}-${uuid()}`,
						index: editorConstructionSectionChunks.length,
						symbol: symbol,
						subscript: { value: 1, color: "drac.purple" },
					},
				],
				chunkID: uuid(),
			},
		] as CompoundChunk[])
		console.log(editorConstructionSectionChunks)
	}

	const handleClick = () => {
		addElement()
	}

	return (
		<Flex
			padding="3"
			backgroundColor={
				symbol === "BLANK" || parent !== "FormulaEditorElementSection"
					? ""
					: "drac.fg"
			}
			color={"drac.cl"}
			w={`3vw`}
			h={`3vw`}
			mb=".25vw"
			ml=".125vw"
			mr={".125vw"}
			align="center"
			justify={"center"}
			borderRadius="lg"
			border={symbol === "BLANK" ? "" : "2px solid gray.500"}
			boxShadow={symbol === "BLANK" ? "" : "0px 0px 5px 2px #2121213b"}
			transform={style.transform}
			{...listeners}
			{...attributes}
			ref={setNodeRef}
			userSelect={"none"}
			onClick={() => {
				handleClick()
			}}
			_hover={{ bg: "drac.red" }}
		>
			<VStack>
				<Flex
					direction={"row"}
					justifyContent={"center"} /*justify ==> along main axis*/
					alignItems={"center"} /*align ==> along cross axis*/
				>
					<Text
						fontSize={"1.5vw"}
						color={"drac.bg"}
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
