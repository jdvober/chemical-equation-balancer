import React from "react"

import { Switch } from "@/components/ui/switch"
import { useMainStore } from "@/stores/MainStore"
import { Flex, Text } from "@chakra-ui/react"

// If no values, use this:
type ReactantProductSwitchProps = Record<string, never>
// If values, fill in the object below
//type ReactantProductSwitchProps = {}

export const ReactantProductSwitch: React.FC<
	ReactantProductSwitchProps
> = () => {
	const setEditFormulaSection = useMainStore(
		(state) => state.setEditFormulaSection
	)
	const editFormulaSection = useMainStore((state) => state.editFormulaSection)
	return (
		<Flex direction={"row"} className="ReactantProductSwitch">
			<Text fontSize=".75rem">Reactants</Text>
			<Switch
				checked={editFormulaSection === "REACTANTS" ? false : true}
				onCheckedChange={() => {
					setEditFormulaSection(
						editFormulaSection === "REACTANTS"
							? "PRODUCTS"
							: "REACTANTS"
					)
				}}
				ml=".5rem"
				mr=".5rem"
				size={"sm"}
			/>
			<Text fontSize=".75rem">Products</Text>
		</Flex>
	)
}
