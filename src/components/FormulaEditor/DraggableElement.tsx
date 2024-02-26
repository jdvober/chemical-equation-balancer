import { useState } from "react"

import { Flex, Text } from "@chakra-ui/react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

export const DraggableElement = ({
	id,
	symbol,
	index,
	parent,
}: {
	id: string
	symbol: string
	index: number
	parent: string
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
			backgroundColor={symbol === "" ? "" : col}
			color="dracula.dracCurrentLine"
			w={`4vw`}
			h={`4vw`}
			mb=".25vw"
			ml=".125vw"
			mr=".125vw"
			justify={"center"}
			borderRadius="8"
			border={symbol === "" ? "" : "2px solid gray.500"}
			boxShadow={symbol === "" ? "" : "0px 0px 5px 2px #2121213b"}
			transform={style.transform}
			{...listeners}
			{...attributes}
			ref={setNodeRef}
		>
			<Text
				onMouseEnter={() => {
					console.log(`Mouse Entered in ${symbol}`)
					setCol("dracula.dracRed")
				}}
				onMouseLeave={() => {
					setCol("dracula.dracFG")
				}}
				fontSize="2vw"
			>
				{symbol}
			</Text>
		</Flex>
	)
}
