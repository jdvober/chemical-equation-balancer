import React from "react"

import { Box, HStack, VStack } from "@chakra-ui/react"
//@ts-ignore
import { Colors } from "../../theme/colors/colors"

import { Link } from "react-router-dom"
import { FormulaEditorChemicalSection } from "./FormulaEditorChemicalSection.tsx"
import { FormulaEditorElementSection } from "./FormulaEditorElementSection.tsx"

// If no values, use this:
type FormulaEditorProps = Record<string, never>
// If values, fill in the object below
//type FormulaEditorProps = {}

export const FormulaEditor: React.FC<FormulaEditorProps> = () => {
	return (
		<Box className="FormulaEditor" color="dracula.dracFG" h="90%">
			<VStack>
				<HStack>
					<FormulaEditorChemicalSection />
					<Link to={`/`}>
						<Box
							border={`2px solid`}
							borderColor={Colors.dracula.dracCyan}
							fontSize={"2xl"}
							pl="1vw"
							pr="1vw"
							pt="1vh"
							pb="1vh"
							borderRadius={"xl"}
						>
							X
						</Box>
					</Link>
				</HStack>
				<FormulaEditorElementSection />
			</VStack>
		</Box>
	)
}
