import React from "react"
import { RxReset } from "react-icons/rx"

import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { useDroppable } from "@dnd-kit/core"

import { DraggableElement } from "./DraggableElement"

// If no values, use this:
// type FormulaEditorChemicalSectionProps = Record<string, never>
// If values, fill in the object below
type FormulaEditorChemicalSection = { title: string; items: any[] }
export const FormulaEditorChemicalSection: React.FC<
	FormulaEditorChemicalSection
> = ({ title, items }) => {
	const { isOver, setNodeRef } = useDroppable({
		id: title,
	})

	return (
		<Box>
			<Flex
				flex="3"
				padding="5"
				flexDirection="row"
				minH="10rem"
				align={"center"}
			>
				<Flex
					ref={setNodeRef}
					backgroundColor={
						isOver ? "dracula.dracGreen" : "dracula.dracCurrentLine"
					}
					borderRadius="8"
					flex="1"
					padding="1vh"
					flexDirection="row"
					minW="20vw"
					w="20vw"
					minH="15vh"
					maxH="15vh"
					maxW="75vw"
					align={"center"}
					justify="space-between"
				>
					{items.length === 0 ? (
						<Text fontSize={"1.5rem"}>
							Drag Elements Here To Build A Compound
						</Text>
					) : (
						items.map(({ title: title }, key) => (
							<DraggableElement
								symbol={title}
								id={title}
								key={key}
								index={key}
								parent={"FormulaEditorChemicalSection"}
							/>
						))
					)}
					<Button ml="2vw" fontSize={"2rem"}>
						<RxReset />
					</Button>
				</Flex>
			</Flex>
		</Box>
	)
}
