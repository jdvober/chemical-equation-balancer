import React from "react"

import { Box, Flex } from "@chakra-ui/react"
import { useDroppable } from "@dnd-kit/core"

import { dracCyan } from "../../vars/GlobalVars"

// If no values, use this:
// type ChemicalDropZoneProps = Record<string, never>
// If values, fill in the object below
type ChemicalDropZone = { title: string; items: any[] }
export const ChemicalDropZone: React.FC<ChemicalDropZone> = ({ title }) => {
	const { isOver, setNodeRef } = useDroppable({
		id: title,
	})

	return (
		<Flex
			ref={setNodeRef}
			backgroundColor={isOver ? "dracula.dracGreen" : ""}
			borderRadius="8"
			flex="1"
			padding="1vh"
			flexDirection="row"
			w="auto"
			h="auto"
			align={"center"}
			justify="space-between"
			ml="2vw"
			mr="2vw"
		>
			<Box
				border={"1px solid " + dracCyan}
				borderRadius="8"
				w="6vw"
				h="6vw"
			/>
		</Flex>
	)
}
