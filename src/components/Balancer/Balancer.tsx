import React from "react"
import "../../App.css"

import { EditFormulaButton } from "@/components/Balancer/EditFormulaButton"
import { ChemicalDisplay } from "@/components/ChemicalDisplay/ChemicalDisplay"
import { Count } from "@/components/Count/Count"
import { Formula } from "@/components/Formula/Formula"
import { Box, Flex, VStack } from "@chakra-ui/react"

// If no values, use this:
type BalancerProps = Record<string, never>
// If values, fill in the object below
//type BalancerProps = {}

export const Balancer: React.FC<BalancerProps> = () => {
	return (
		<Box className="Balancer">
			<VStack w="100vw">
				<Flex
					dir="row"
					justifyContent="space-between"
					alignItems={"center"}
				>
					<Box marginEnd="auto">
						<Formula />
					</Box>
					<EditFormulaButton />
				</Flex>
				<Count />
				<ChemicalDisplay />
			</VStack>
		</Box>
	)
}
