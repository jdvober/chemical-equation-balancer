import React from "react"
import { RxReset } from "react-icons/rx"
import { TiChevronRightOutline } from "react-icons/ti"
import { v4 as uuid } from "uuid"

import { Box, Button, Flex, HStack, VStack } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore"
import { ChemicalDropZone } from "./ChemicalDropZone"
import { ChemicalElementEditorButton } from "./ChemicalElementEditorButton"
import { DraggableElement } from "./DraggableElement"

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
					border="1px solid orange"
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
				>
					<VStack>
						<HStack>
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
									ml="2vw"
									fontSize={"2rem"}
									onClick={() => {
										setFormulaEditorChemicalSectionItems([])
									}}
								>
									<RxReset />
								</Button>
								<Button
									ml="2vw"
									fontSize={"2rem"}
									onClick={() => {
										// TODO: Add to formula instead of generic formula
										editFormulaSection === "REACTANTS"
											? setReactants([
													{
														coefficient: 1,
														formulaSection:
															editFormulaSection,
														elements: [
															{
																index: 0,
																subscript: 6,
																symbol: "Ga",
															},
														],
													},
											  ])
											: setProducts([
													{
														coefficient: 1,
														formulaSection:
															editFormulaSection,
														elements: [
															{
																index: 0,
																subscript: 6,
																symbol: "Ga",
															},
														],
													},
											  ])
									}}
								>
									<TiChevronRightOutline />
								</Button>
							</VStack>
						</HStack>
					</VStack>
				</Flex>
			</Flex>
		</Box>
	)
}
