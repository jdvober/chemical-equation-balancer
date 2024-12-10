import React from "react"
import { RxReset } from "react-icons/rx"

import { useMainStore } from "@/stores/MainStore"
import { dracPurple } from "@/theme/colors/colors"
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
				h="2.5rem"
				w="auto"
				fontSize={"1rem"}
				alignSelf={"center"}
				onClick={() => {
					setEditorChemicalSectionItems(
						editorChemicalSectionItems.slice(0, -1)
					)
				}}
				bg="drac.cl"
				color="drac.fg"
				css={{ transition: "all 0.1s ease-in-out" }}
				_hover={{
					color: "drac.red",
					boxShadow: `0 5px 15px ${dracPurple}`,
				}}
			>
				<RxReset />
			</Button>
		</Box>
	)
}
