import React, { useState } from "react"
import { RxReset } from "react-icons/rx"
import { TiChevronRightOutline } from "react-icons/ti"
import { v4 as uuid } from "uuid"

import { Switch } from "@/components/ui/switch"
import {
	Box,
	Button,
	Flex,
	HStack,
	Spacer,
	Text,
	VStack,
} from "@chakra-ui/react"
import { useMainStore } from "../../stores/MainStore"
import { dracOrange, dracRed } from "../../vars/GlobalVars.ts"
import { ChemicalDropZone } from "./ChemicalDropZone"
import { ChemicalElementEditorButton } from "./ChemicalElementEditorButton"
import { DraggableElement } from "./DraggableElement"
import { FormulaEditorFormula } from "./FormulaEditorFormula.tsx"

// If no values, use this:
type FormulaEditorChemicalSectionProps = Record<string, never>
// If values, fill in the object below
// type FormulaEditorChemicalSection = { items: ChemicalElement[] }
export const FormulaEditorChemicalSection: React.FC<
	FormulaEditorChemicalSectionProps
> = () => {
	const setFormulaEditorChemicalSectionItems = useMainStore(
		(state) => state.setFormulaEditorChemicalSectionItems
	)

	const formulaEditorChemicalSectionItems = useMainStore(
		(state) => state.formulaEditorChemicalSectionItems
	)

	const setReactants = useMainStore((state) => state.setReactants)

	const setProducts = useMainStore((state) => state.setProducts)

	const editFormulaSection = useMainStore((state) => state.editFormulaSection)

	const formula = useMainStore((state) => state.formula)
	const countList = useMainStore((state) => state.countList)
	const setCountList = useMainStore((state) => state.setCountList)
	const reactantAndProductElementListsMatch = useMainStore(
		(state) => state.reactantAndProductElementListsMatch
	)
	const [useParens, setUseParens] = useState(false)

	const addNewReactants = () => {
		let newReactants = formula.reactants
		const elements = formulaEditorChemicalSectionItems.map((item) => {
			return {
				index: item.index,
				subscript: item.subscript,
				symbol: item.symbol,
			}
		})
		newReactants = [
			...newReactants,
			{
				coefficient: 1,

				formulaSection: "REACTANTS",
				isHovered: false,
				elements: elements as ChemicalElement[],
			},
		]

		setReactants(newReactants)
		let newElements = elements.map((element) => {
			return {
				symbol: element.symbol,
				count: element.subscript,
			}
		})

		// Update the counts
		let newCountList = countList.map((element) => {
			let tempCountReactants

			newElements.forEach((newElement) => {
				if (newElement.symbol === element.symbol) {
					tempCountReactants = {
						symbol: newElement.symbol as ChemicalSymbol,
						reactantCount: (element.reactantCount +
							newElement.count) as number,
						productCount: element.productCount,
					}
				}
			})
			if (tempCountReactants != undefined) {
				return tempCountReactants
			} else {
				return element
			}
		})

		setCountList(newCountList)
		setFormulaEditorChemicalSectionItems([])
	}

	const addNewProducts = () => {
		let newProducts = formula.products
		const elements = formulaEditorChemicalSectionItems.map((item) => {
			return {
				index: item.index,
				subscript: item.subscript,
				symbol: item.symbol,
			}
		})
		newProducts = [
			...newProducts,
			{
				coefficient: 1,
				formulaSection: "PRODUCTS",
				isHovered: false,
				elements: elements as ChemicalElement[],
			},
		]

		setProducts(newProducts)

		let newElements = elements.map((element) => {
			return {
				symbol: element.symbol,
				count: element.subscript,
			}
		})

		// Update the counts
		let newCountList = countList.map((element) => {
			let tempCountProducts

			newElements.forEach((newElement) => {
				if (newElement.symbol === element.symbol) {
					tempCountProducts = {
						symbol: newElement.symbol as ChemicalSymbol,
						reactantCount: element.productCount,
						productCount: (element.productCount +
							newElement.count) as number,
					}
				}
			})
			if (tempCountProducts != undefined) {
				return tempCountProducts
			} else {
				return element
			}
		})

		setCountList(newCountList)
		setFormulaEditorChemicalSectionItems([])
	}

	return (
		<Box w="95vw">
			<Flex
				flex="3"
				padding="5"
				flexDirection="row"
				minH="10rem"
				align={"center"}
				justify="space-evenly"
			>
				<Flex
					borderRadius="8px"
					border={`1px solid ${
						reactantAndProductElementListsMatch === true
							? dracOrange
							: dracRed
					}`}
					flex="1"
					padding="1vh"
					flexDirection="row"
					// minW="20vw"
					w="95vw"
					// minH="15vh"
					h="20vh"
					// maxW="75vw"
					align={"center"}
					pl="2vw"
					pr="2vw"
					justifyContent={"flex-start"}
					overflowX={"auto"}
					overflowY={"clip"}
				>
					<Flex dir="row">
						{formulaEditorChemicalSectionItems.length === 0 ? (
							<ChemicalDropZone
								title={"FormulaEditorChemicalSection"}
								items={[]}
								key={uuid()}
							/>
						) : (
							formulaEditorChemicalSectionItems.map(
								(item, index) => (
									<VStack
										key={uuid()}
										h="100%"
										alignSelf="center"
									>
										<ChemicalElementEditorButton
											isUpArrow={true}
											index={index}
										/>
										<DraggableElement
											symbol={item.symbol}
											id={uuid()}
											eID={item.eID}
											key={uuid()}
											index={index}
											parent={
												"FormulaEditorChemicalSection"
											}
											subscript={
												formulaEditorChemicalSectionItems[
													index
												].subscript
											}
											subscriptColor="dracula.dracPurple"
										/>
										<ChemicalElementEditorButton
											isUpArrow={false}
											index={index}
										/>
									</VStack>
								)
							)
						)}
						{formulaEditorChemicalSectionItems.length >= 1 ? (
							<ChemicalDropZone
								title={"FormulaEditorChemicalSection"}
								items={[]}
							/>
						) : null}
						<VStack h="100%" alignSelf="center">
							<HStack>
								<Switch
									checked={useParens}
									variant="solid"
									colorPalette={"dracula.dracOrange"}
									onCheckedChange={(e) => {
										setUseParens(e.checked)
									}}
									ml="2vw"
									w="3vw"
									h="5vh"
								></Switch>

								<Text>
									( )<sub>x</sub>
								</Text>
							</HStack>
							<Button
								// mt="1vh"
								// mb="1vh"
								ml="2vw"
								w="5vw"
								h="5vh"
								fontSize={"2rem"}
								alignSelf={"center"}
								onClick={() => {
									setFormulaEditorChemicalSectionItems(
										formulaEditorChemicalSectionItems.slice(
											0,
											-1
										)
									)
								}}
							>
								<RxReset />
							</Button>
							<Button
								// mt="1vh"
								// mb="1vh"
								ml="2vw"
								fontSize={"2rem"}
								w="5vw"
								h="5vh"
								onClick={() => {
									editFormulaSection === "REACTANTS"
										? addNewReactants()
										: addNewProducts()
								}}
							>
								<TiChevronRightOutline />
							</Button>
						</VStack>
						<Spacer />
						<Box pt="1vh" pb="1vh" alignSelf={"center"} ml="2vw">
							<FormulaEditorFormula />
						</Box>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	)
}
