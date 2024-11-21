import React from "react"
import { v4 as uuid } from "uuid"

import { CompoundConstructionElement } from "@/components/FormulaEditor/CompoundConstructionElement"
import { ChemicalElementSubscriptModificationButton } from "@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/ChemicalElementSubscriptModificationButton"
import { ChemicalDropZone } from "@/components/FormulaEditor/FormulaSection/ChemicalDropZone"
import { useMainStore } from "@/stores/MainStore"
import { Flex, VStack } from "@chakra-ui/react"

// If no values, use this:
type CompoundConstructionProps = Record<string, never>
// If values, fill in the object below
//type CompoundConstructionProps = {}

export const CompoundConstruction: React.FC<CompoundConstructionProps> = () => {
	const editorChemicalSectionItems = useMainStore(
		(state) => state.editorChemicalSectionItems
	)

	return (
		<Flex dir="row" w="auto" className="CompoundConstruction">
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
						<CompoundConstructionElement
							symbol={item.symbol}
							id={uuid()}
							eID={item.eID}
							key={uuid()}
							index={index}
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
		</Flex>
	)
}
