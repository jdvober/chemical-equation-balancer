import React from "react"
import { v4 as uuid } from "uuid"

import { useMainStore } from "@/stores/MainStore"
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
	const setEditorChemicalSectionChunks = useMainStore(
		(state) => state.setEditorChemicalSectionChunks
	)
	const editorChemicalSectionChunks = useMainStore(
		(state) => state.editorChemicalSectionChunks
	)

	const setParens = (chunkID: string) => {
		console.log(
			chunkID,
			selectedConstructionCompoundIDs,
			editorChemicalSectionChunks
		)
	}
	return (
		<Button
			className="AddParensthesisButton"
			w="5vw"
			h="5vh"
			fontSize={"1.5rem"}
			alignSelf={"center"}
			onClick={() => {
				setParens(uuid())
			}}
		>
			<Text>
				{"( )"}
				<sub>x</sub>
			</Text>
		</Button>
	)
}
