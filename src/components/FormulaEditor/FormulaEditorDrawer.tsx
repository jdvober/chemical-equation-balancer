import React from "react"

import {
	Box,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Spacer,
	Stack,
	Switch,
	Text,
} from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore"
import { FormulaEditor } from "./FormulaEditor"

// If no values, use this:
type FormulaEditorDrawerProps = Record<string, never>
// If values, fill in the object below
//type FormulaEditorDrawerProps = {}

export const FormulaEditorDrawer: React.FC<FormulaEditorDrawerProps> = () => {
	// const { isOpen, onOpen, onClose } = useDisclosure()
	const setEditFormulaSection = useMainStore(
		(state) => state.setEditFormulaSection
	)
	const editFormulaSection = useMainStore((state) => state.editFormulaSection)

	return (
		<Box>
			<DrawerOverlay />
			<DrawerContent
				h="99vh"
				w="96vw"
				bgColor={"dracula.dracBG"}
				border="2px solid #FFB86C"
				borderRadius={"1vw"}
				opacity={"95%"}
				ml="2vw"
			>
				<DrawerHeader borderBottomWidth="1px" color="dracula.dracFG">
					<Stack direction="row">
						<Text>Edit Formula</Text>
						<Spacer />
						<Stack direction={"row"} alignSelf={"center"}>
							<Text>Reactants</Text>
							<Switch
								variant="neutral"
								size="lg"
								onChange={() =>
									setEditFormulaSection(
										editFormulaSection === "REACTANTS"
											? "PRODUCTS"
											: "REACTANTS"
									)
								}
							/>
							<Text>Products</Text>
						</Stack>
						<Spacer />
						<DrawerCloseButton />
					</Stack>
				</DrawerHeader>
				<DrawerBody>
					<FormulaEditor />
				</DrawerBody>
			</DrawerContent>
		</Box>
	)
}
