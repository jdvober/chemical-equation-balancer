import React from "react"

import { Flex, VStack } from "@chakra-ui/react"
import { useMainStore } from "../../stores/MainStore.ts"
import { FormulaEditorEditButton } from "../FormulaEditor/FormulaEditorEditButton.tsx"
import { BalancerFormula } from "./BalancerFormula"
import { ChemicalDisplay } from "./ChemicalDisplay/ChemicalDisplay"
import { Count } from "./Count/Count"

// If no values, use this:
type BalancerProps = Record<string, never>
// If values, fill in the object below
// type FormulaProps = {}

export const Balancer: React.FC<BalancerProps> = () => {
	const view = useMainStore((state) => state.view)

	if (view === "BALANCER") {
		return (
			<VStack>
				<Flex
					direction="row"
					justifyContent={
						"space-around"
					} /*justify ==> along main axis*/
					alignItems={"center"} /*align ==> along cross axis*/
				>
					<BalancerFormula />
					<FormulaEditorEditButton />
				</Flex>
				<Count />
				<ChemicalDisplay />
			</VStack>
		)
	} else {
		return null
	}
}
