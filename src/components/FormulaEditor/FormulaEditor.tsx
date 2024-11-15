import React, { useState } from "react"
import { IoMdCloseCircle, IoMdCloseCircleOutline } from "react-icons/io"

import { Box, Flex, Stack, Switch, Text } from "@chakra-ui/react"
import { useMainStore } from "../../stores/MainStore"
import { dracOrange } from "../../vars/GlobalVars.ts"
import { FormulaEditorChemicalSection } from "./FormulaEditorChemicalSection"
import { FormulaEditorElementSection } from "./FormulaEditorElementSection"

// If no values, use this:
type FormulaEditorProps = Record<string, never>
// If values, fill in the object below
//type FormulaEditorProps = {}

export const FormulaEditor: React.FC<FormulaEditorProps> = () => {
	const setEditFormulaSection = useMainStore(
		(state) => state.setEditFormulaSection
	)
	const editFormulaSection = useMainStore((state) => state.editFormulaSection)
	const setView = useMainStore((state) => state.setView)
	const countList = useMainStore((state) => state.countList)
	const setReactantAndProductElementListsMatch = useMainStore(
		(state) => state.setReactantAndProductElementListsMatch
	)
	const [closeButtonHovered, setCloseButtonHovered] = useState(false)

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
		<Box
			className="FormulaEditor"
			color="dracula.dracFG"
			h="95vh"
			w="95vw"
			border={`1px solid ${dracOrange}`}
			borderRadius={"2vh"}
			mt="2.5vh"
			mb="2.5vh"
			ml="2.5vw"
			mr="2.5vw"
			p="1vh"
			boxShadow={`10px 5px 5px #8F4A00`}
		>
			<Box>
				<Stack direction="row">
					<Flex
						dir="row"
						w="33vw"
						alignSelf={"center"}
						justifyContent={"center"}
					>
						<Text fontSize={"3vh"}>Edit Formula</Text>
					</Flex>
					<Stack
						direction={"row"}
						alignSelf={"center"}
						justifyContent={"center"}
						w="33vw"
						fontSize={"3vh"}
					>
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
					{/* Check to make sure there isn't a situation where an element exists on one side of the equation, but not the
						other. It will crash if it tries to compare two arrays
						of different lengths. */}
					<Flex
						dir="row"
						w="33vw"
						alignSelf="center"
						justifyContent={"flex-end"}
					>
						{reactantsProductsContainSameElements() === true ? (
							closeButtonHovered === false ? (
								<IoMdCloseCircleOutline
									onClick={() => {
										setView("BALANCER")
									}}
									size={window.innerHeight * 0.05}
									onMouseEnter={() => {
										setCloseButtonHovered(true)
									}}
								/>
							) : (
								<IoMdCloseCircle
									onClick={() => {
										setView("BALANCER")
									}}
									size={window.innerHeight * 0.05}
									onMouseLeave={() => {
										setCloseButtonHovered(false)
									}}
								/>
							)
						) : (
							<Text
								color={"dracRed"}
								fontSize={"3vh"}
								alignSelf={"center"}
								justifyContent={"end"}
							>
								Elements on both sides of the → must match! 🚫
							</Text>
						)}
					</Flex>
				</Stack>
				<FormulaEditorChemicalSection />
				<FormulaEditorElementSection />
			</Box>
		</Box>
	)
}
