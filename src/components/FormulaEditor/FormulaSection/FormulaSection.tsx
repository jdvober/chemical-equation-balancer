import React from "react"

import { CompoundConstruction } from "@/components/FormulaEditor/FormulaSection/CompoundConstruction/CompoundConstruction"
import { EditorControls } from "@/components/FormulaEditor/FormulaSection/EditorControls"
import { FormulaDisplay } from "@/components/FormulaEditor/FormulaSection/FormulaDisplay"
import { useMainStore } from "@/stores/MainStore"
import { Box, Flex } from "@chakra-ui/react"
import { dracOrange, dracRed } from "../../../theme/colors/colors"

// If no values, use this:
type FormulaSectionProps = Record<string, never>
// If values, fill in the object below
//type FormulaSectionProps = {}

export const FormulaSection: React.FC<FormulaSectionProps> = () => {
	const reactantAndProductElementListsMatch = useMainStore(
		(state) => state.reactantAndProductElementListsMatch
	)
	return (
		<Box flexGrow={1} className="FormulaSection">
			<Flex
				borderRadius="8px"
				border={`1px solid ${
					reactantAndProductElementListsMatch === true
						? dracOrange
						: dracRed
				}`}
				flex="1"
				h="10rem"
				align={"center"}
				justifyContent={"flex-start"}
				overflowX={"auto"}
				overflowY={"clip"}
			>
				<CompoundConstruction />
				<EditorControls />
				<FormulaDisplay />
			</Flex>
		</Box>
	)
}
