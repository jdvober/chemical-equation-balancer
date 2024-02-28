import React from "react"
import { RxReset } from "react-icons/rx"
import { v4 as uuid } from "uuid"

import { Box, Button, Flex, VStack } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore"
import { ChemicalDropZone } from "./ChemicalDropZone"
import { ChemicalElementEditorButton } from "./ChemicalElementEditorButton"
import { DraggableElement } from "./DraggableElement"

// If no values, use this:
// type FormulaEditorChemicalSectionProps = Record<string, never>
// If values, fill in the object below
type FormulaEditorChemicalSection = { items: ChemicalElement[] }
export const FormulaEditorChemicalSection: React.FC<
	FormulaEditorChemicalSection
> = ({ items }) => {
	const setFormulaEditorChemicalSectionItems = useMainStore(
		(state) => state.setFormulaEditorChemicalSectionItems
	)
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
					h="16vh"
					maxW="75vw"
					align={"center"}
					pl="2vw"
					pr="2vw"
				>
					{items.length === 0 ? (
						<ChemicalDropZone
							title={"FormulaEditorChemicalSection"}
							items={[]}
							key={uuid()}
						/>
					) : (
						items.map((item, index) => (
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
									parent={"FormulaEditorChemicalSection"}
									subscript={items[index].subscript}
								/>
								<ChemicalElementEditorButton
									isUpArrow={false}
									index={index}
								/>
							</VStack>
						))
					)}
					{items.length >= 1 ? (
						<ChemicalDropZone
							title={"FormulaEditorChemicalSection"}
							items={[]}
						/>
					) : null}
					<Button
						ml="2vw"
						fontSize={"2rem"}
						onClick={() => {
							setFormulaEditorChemicalSectionItems([])
						}}
					>
						<RxReset />
					</Button>
				</Flex>
			</Flex>
		</Box>
	)
}
