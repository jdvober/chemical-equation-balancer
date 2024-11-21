import "../../../customCSS/ChemicalDropZone.css"

import React from "react"

import { Box, Flex } from "@chakra-ui/react"
import { useDroppable } from "@dnd-kit/core"

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
			className="ChemicalDropZoneBox"
			ref={setNodeRef}
			borderRadius="2xl"
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
				// border={"1px solid " + dracCyan}
				backgroundColor={isOver ? "dracula.dracYellow" : ""}
				boxShadow={"0 0 0 10px rgba(241, 250, 140, 80)"}
				borderRadius="xl"
				w="4vw"
				h="4vw"
			/>
		</Flex>
	)
}
