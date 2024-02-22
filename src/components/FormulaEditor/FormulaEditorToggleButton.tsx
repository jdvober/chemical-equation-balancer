import React, { useState } from "react"

import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Spacer,
	Stack,
	Switch,
	Text,
	useDisclosure,
} from "@chakra-ui/react"

import { FormulaEditor } from "./FormulaEditor"

// If no values, use this:
type FormulaEditorToggleButtonProps = Record<string, never>
// If values, fill in the object below
//type FormulaEditorToggleButtonProps = {}

export const FormulaEditorToggleButton: React.FC<
	FormulaEditorToggleButtonProps
> = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [section, setSection] = useState("REACTANTS")

	return (
		<Box className="FormulaEditorToggleButton" w="5vw" h="2vh">
			<Button onClick={onOpen}>Edit</Button>
			<Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent
					h="80vh"
					bgColor={"dracula.dracBG"}
					border="2px solid #FFB86C"
					borderRadius={"1vw"}
					opacity={"98%"}
				>
					<DrawerHeader
						borderBottomWidth="1px"
						color="dracula.dracFG"
					>
						<Stack direction="row">
							<Text>Edit Formula</Text>
							<Spacer />
							<Stack direction={"row"}>
								<Text>Reactants</Text>
								<Switch
									variant="neutral"
									size="lg"
									onChange={() =>
										setSection(
											section === "REACTANTS"
												? "PRODUCTS"
												: "REACTANTS"
										)
									}
								/>
								<Text>Products</Text>S
							</Stack>
						</Stack>
					</DrawerHeader>
					<DrawerBody>
						<FormulaEditor />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	)
}
