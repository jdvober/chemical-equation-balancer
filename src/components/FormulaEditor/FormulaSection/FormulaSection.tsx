import React from "react"

import { CompoundConstruction } from "@/components/FormulaEditor/FormulaSection/CompoundConstruction/CompoundConstruction"
import { EditorControls } from "@/components/FormulaEditor/FormulaSection/EditorControls"
import { EditorFormula } from "@/components/FormulaEditor/FormulaSection/FormulaDisplay"
import { useMainStore } from "@/stores/MainStore"
import { Box, Flex, Spacer } from "@chakra-ui/react"

// If no values, use this:
type FormulaSectionProps = Record<string, never>
// If values, fill in the object below
//type FormulaSectionProps = {}

export const FormulaSection: React.FC<FormulaSectionProps> = () => {
	const editorChemicalSectionItems = useMainStore(
		(state) => state.editorChemicalSectionItems
	)

	const reactantAndProductElementListsMatch = useMainStore(
		(state) => state.reactantAndProductElementListsMatch
	)
	return (
		<Box w="95vw" className="FormulaSection">
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
					// border={`1px solid ${
					// 	reactantAndProductElementListsMatch === true
					// 		? dracOrange
					// 		: dracRed
					// }`}
					border="1px solid yellow"
					flex="1"
					padding="1vh"
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
					<CompoundConstruction />
					<EditorControls />
					<Spacer />
					<EditorFormula />
				</Flex>
			</Flex>
		</Box>
	)
}
