import React from "react"
import { v4 as uuid } from "uuid"

import { useMainStore } from "@/stores/MainStore"
import { dracPurple } from "@/theme/colors/colors"
import { Button, Text } from "@chakra-ui/react"

// If no values, use this:
type AddParensthesisButtonProps = Record<string, never>
// If values, fill in the object below
//type AddParensthesisButtonProps = {}

export const AddParensthesisButton: React.FC<
	AddParensthesisButtonProps
> = () => {
	const selectedConstructionCompoundIDs = useMainStore(
		(state) => state.selectedConstructionCompoundIDs
	)
	const setSelectedConstructionCompoundIDs = useMainStore(
		(state) => state.setSelectedConstructionCompoundIDs
	)
	const editorConstructionSectionChunks = useMainStore(
		(state) => state.editorConstructionSectionChunks
	)
	const setEditorConstructionSectionChunks = useMainStore(
		(state) => state.setEditorConstructionSectionChunks
	)

	const setParens = () => {
		console.log(
			`Selected Construction Compound IDs: ${selectedConstructionCompoundIDs}`
		)
		console.log(
			`Editor ConstructionSectionChunks: ${editorConstructionSectionChunks}`
		)
		const newElements: ChemicalElement[] = []

		// Create a list of elements that will be added to the new chunk, based on what was selected by the user
		editorConstructionSectionChunks.forEach((chunk) => {
			chunk.elements.forEach((element) => {
				if (selectedConstructionCompoundIDs.includes(element.eID)) {
					newElements.push(element)
				}
			})
		})

		// Remove the elements from their old locations

		const newChunks = editorConstructionSectionChunks.map((chunk) => {
			let newChunk: CompoundChunk = {
				chunkID: chunk.chunkID,
				parenthesesSubscript: chunk.parenthesesSubscript,
				elements: chunk.elements.filter((element) => {
					if (
						!selectedConstructionCompoundIDs.includes(element.eID)
					) {
						return element
					}
				}),
			}
			return newChunk
		})

		// Unselect all elements

		setSelectedConstructionCompoundIDs([])

		// Update
		setEditorConstructionSectionChunks([
			{
				chunkID: uuid(),
				parenthesesSubscript: 1,
				elements: newElements,
			},
			...newChunks,
		])
	}

	return (
		<Button
			className="AddParensthesisButton"
			w="5vw"
			h="5vh"
			fontSize={"1.5rem"}
			alignSelf={"center"}
			onClick={() => {
				setParens()
			}}
			bg="drac.cl"
			color="drac.fg"
			css={{ transition: "all 0.1s ease-in-out" }}
			_hover={{
				color: "drac.red",
				boxShadow: `0 5px 15px ${dracPurple}`,
			}}
		>
			<Text>
				{"( )"}
				<sub>x</sub>
			</Text>
		</Button>
	)
}
