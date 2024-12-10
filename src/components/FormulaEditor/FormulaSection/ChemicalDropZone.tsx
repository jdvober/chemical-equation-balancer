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
			borderRadius="1rem"
			flex="1"
			flexDirection="row"
			w="auto"
			h="auto"
			align={"center"}
			justify="space-between"
		>
			<Box
				// border={"1px solid " + dracCyan}
				backgroundColor={isOver ? "drac.yellow" : ""}
				boxShadow={"0 0 0 10px rgba(241, 250, 140, 80)"}
				borderRadius=".5rem"
				w="3em"
				h="3em"
			/>
		</Flex>
	)
}
