import React from "react"
import { v4 as uuid } from "uuid"

import { DraggableElement } from "@/components/FormulaEditor/DraggableElement"
import { ChemicalElementSubscriptModificationButton } from "@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/ChemicalElementSubscriptModificationButton"
import { ChemicalDropZone } from "@/components/FormulaEditor/FormulaSection/ChemicalDropZone"
import { EditorControls } from "@/components/FormulaEditor/FormulaSection/EditorControls"
import { EditorFormula } from "@/components/FormulaEditor/FormulaSection/FormulaDisplay"
import { useMainStore } from "@/stores/MainStore"
import { Box, Flex, Spacer, VStack } from "@chakra-ui/react"

// If no values, use this:
type CompoundConstructionProps = Record<string, never>
// If values, fill in the object below
//type CompoundConstructionProps = {}

export const CompoundConstruction: React.FC<CompoundConstructionProps> = () => {
	const editorChemicalSectionItems = useMainStore(
		(state) => state.editorChemicalSectionItems
	)

	const reactantAndProductElementListsMatch = useMainStore(
		(state) => state.reactantAndProductElementListsMatch
	)
	return (
		<Box w="95vw" className="CompoundConstruction">
			<Flex dir="row">
				{editorChemicalSectionItems.length === 0 ? (
					<ChemicalDropZone
						title={"FormulaEditorChemicalSection"}
						items={[]}
						key={uuid()}
					/>
				) : (
					editorChemicalSectionItems.map((item, index) => (
						<VStack key={uuid()} h="100%" alignSelf="center">
							<ChemicalElementSubscriptModificationButton
								isUpArrow={true}
								index={index}
							/>
							<DraggableElement
								symbol={item.symbol}
								id={uuid()}
								eID={item.eID}
								key={uuid()}
								index={index}
								parent={"FormulaEditorChemicalSection"}
								subscript={
									editorChemicalSectionItems[index].subscript
								}
								subscriptColor="dracula.dracPurple"
							/>
							<ChemicalElementSubscriptModificationButton
								isUpArrow={false}
								index={index}
							/>
						</VStack>
					))
				)}
				{editorChemicalSectionItems.length >= 1 ? (
					<ChemicalDropZone
						title={"FormulaEditorChemicalSection"}
						items={[]}
					/>
				) : null}
				<EditorControls />
				<Spacer />
				<EditorFormula />
			</Flex>
		</Box>
	)
}
