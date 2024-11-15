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
	Tooltip,
} from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore"
import { FormulaEditor } from "./FormulaEditor"

// If no values, use this:
type FormulaEditorDrawerProps = Record<string, never>
// If values, fill in the object below
//type FormulaEditorDrawerProps = {}

export const FormulaEditorDrawer: React.FC<FormulaEditorDrawerProps> = () => {
	const setEditFormulaSection = useMainStore(
		(state) => state.setEditFormulaSection
	)
	const editFormulaSection = useMainStore((state) => state.editFormulaSection)
	const setEditFormulaDrawerActive = useMainStore(
		(state) => state.setEditFormulaDrawerActive
	)
	const countList = useMainStore((state) => state.countList)
	const setReactantAndProductElementListsMatch = useMainStore(
		(state) => state.setReactantAndProductElementListsMatch
	)

	const reactantsProductsContainSameElements = () => {
		let reactantElementList = countList
			.map((element) => {
				return { symbol: element.symbol, count: element.reactantCount }
			})
			.filter((reactant) => {
				return reactant.count >= 1
			})
			.map((reactant) => {
				return reactant.symbol
			})
			.sort()
		let productElementList = countList
			.map((element) => {
				return { symbol: element.symbol, count: element.productCount }
			})
			.filter((product) => {
				return product.count >= 1
			})
			.map((product) => {
				return product.symbol
			})
			.sort()

		for (var i = 0; i < reactantElementList.length; ++i) {
			if (reactantElementList[i] !== productElementList[i]) {
				setReactantAndProductElementListsMatch(false)
				return false
			}
		}
		setReactantAndProductElementListsMatch(true)
		return true
	}

	return (
		<Box>
			<DrawerOverlay />
			<DrawerContent
				h="99vh"
				w="96vw"
				bgColor={"dracula.dracBG"}
				border={`2px solid #FFB86C`}
				borderRadius={"1vw"}
				opacity={"95%"}
				ml="2vw"
			>
				<DrawerHeader borderBottomWidth="1px" color="dracula.dracFG">
					<Stack direction="row">
						<Text userSelect={"none"}>Edit Formula</Text>
						<Spacer />
						<Stack direction={"row"} alignSelf={"center"}>
							<Text userSelect={"none"}>Reactants</Text>
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
							<Text userSelect={"none"}>Products</Text>
						</Stack>
						<Spacer />
						{/* Check to make sure there isn't a situation where an element exists on one side of the equation, but not the
						other. It will crash if it tries to compare two arrays
						of different lengths. */}
						<Box w="25vw">
							{reactantsProductsContainSameElements() === true ? (
								<DrawerCloseButton
									onClick={() => {
										setEditFormulaDrawerActive(false)
									}}
								/>
							) : (
								<Tooltip
									content="Elements on both sides of the → must match!"
									userSelect={"none"}
								>
									<Text
										color={"dracRed"}
										fontSize={"medium"}
										userSelect={"none"}
									>
										Elements on both sides of the → must
										match! 🚫
									</Text>
								</Tooltip>
							)}
						</Box>
					</Stack>
				</DrawerHeader>
				<DrawerBody>
					<FormulaEditor />
				</DrawerBody>
			</DrawerContent>
		</Box>
	)
}
