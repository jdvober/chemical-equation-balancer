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

	// TODO: Not adding to reactants / products for some reason???
	const addNewReactants = () => {
		let newReactants = formula.reactants
		formulaEditorChemicalSectionItems.forEach((item) => {
			newReactants = [
				...newReactants,
				{
					coefficient: 1,
					formulaSection: "REACTANTS",
					elements: [
						{
							index: item.index,
							subscript: item.subscript,
							symbol: item.symbol,
						},
					],
				},
			]
		})
		setReactants(newReactants)
		setFormulaEditorChemicalSectionItems([])
	}

	const addNewProducts = () => {
		let newProducts = formula.products
		formulaEditorChemicalSectionItems.forEach((item) => {
			newProducts = [
				...newProducts,
				{
					coefficient: 1,
					formulaSection: "REACTANTS",
					elements: [
						{
							index: item.index,
							subscript: item.subscript,
							symbol: item.symbol,
						},
					],
				},
			]
		})

		setProducts(newProducts)
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
					borderRadius="8"
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
									<VStack key={uuid()}>
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
						<VStack>
							<Button
								mt="1vh"
								mb="1vh"
								ml="2vw"
								fontSize={"2rem"}
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
									// TODO: Add to formula instead of generic formula
									console.log("PRESSed")
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
