import React from "react"
import { RxReset } from "react-icons/rx"

import { useMainStore } from "@/stores/MainStore"
import { Box, Button } from "@chakra-ui/react"

// If no values, use this:
type ResetButtonProps = Record<string, never>
// If values, fill in the object below
//type ResetButtonProps = {}

export const ResetButton: React.FC<ResetButtonProps> = () => {
	const setEditorChemicalSectionItems = useMainStore(
		(state) => state.setEditorConstructionSectionChunks
	)

	const editorChemicalSectionItems = useMainStore(
		(state) => state.editorConstructionSectionChunks
	)

	return (
		<Box className="ResetButton">
			<Button
				w="5vw"
				h="5vh"
				fontSize={"2rem"}
				alignSelf={"center"}
				onClick={() => {
					setEditorChemicalSectionItems(
						editorChemicalSectionItems.slice(0, -1)
					)
				}}
				bg="comment"
				color="bground"
			>
				<RxReset />
			</Button>
		</Box>
	)
}
