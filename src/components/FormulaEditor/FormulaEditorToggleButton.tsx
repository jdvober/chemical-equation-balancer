import React from "react"

import { Box, Button, Drawer, useDisclosure } from "@chakra-ui/react"

import { FormulaEditorDrawer } from "./FormulaEditorDrawer"

// If no values, use this:
type FormulaEditorToggleButtonProps = Record<string, never>
// If values, fill in the object below
//type FormulaEditorToggleButtonProps = {}

export const FormulaEditorToggleButton: React.FC<
	FormulaEditorToggleButtonProps
> = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Box className="FormulaEditorToggleButton" w="5vw" h="2vh">
			<Button onClick={onOpen}>Edit</Button>
			<Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
				<FormulaEditorDrawer />
			</Drawer>
		</Box>
	)
}
