import React from "react"
import { RxReset } from "react-icons/rx"
import { TiChevronRightOutline } from "react-icons/ti"
import { v4 as uuid } from "uuid"

import { Box, Button, Flex, Spacer, VStack } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore"
import { dracOrange } from "../../vars/GlobalVars.ts"
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
	const reactantCountList = useMainStore((state) => state.reactantCountList)
	const productCountList = useMainStore((state) => state.productCountList)
	const setCountList = useMainStore((state) => state.setCountList)

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
				elements: elements,
			},
		]

		setReactants(newReactants)
		let newElements = elements.map((element) => {
			return {
				symbol: element.symbol,
				count: element.subscript,
			}
		})
		let newCountList = [...reactantCountList, ...newElements]

		setCountList(newCountList, "REACTANTS")
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
				elements: elements,
			},
		]

		setProducts(newProducts)

		let newElements = elements.map((element) => {
			return {
				symbol: element.symbol,
				count: element.subscript,
			}
		})
		let newCountList = [...productCountList, ...newElements]

		setCountList(newCountList, "PRODUCTS")
		setFormulaEditorChemicalSectionItems([])
	}

	return (
		<Box>
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
					border={`1px solid ${dracOrange}`}
					flex="1"
					padding="1vh"
					flexDirection="row"
					minW="20vw"
					w="auto"
					minH="15vh"
					h="20vh"
					maxW="75vw"
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
							<Button
								mt="1vh"
								mb="1vh"
								ml="2vw"
								fontSize={"2rem"}
								alignSelf={"center"}
								onClick={() => {
									setFormulaEditorChemicalSectionItems([])
								}}
							>
								<RxReset />
							</Button>
							<Button
								mt="1vh"
								mb="1vh"
								ml="2vw"
								fontSize={"2rem"}
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
