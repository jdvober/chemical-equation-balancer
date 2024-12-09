import React from "react"
import "../../App.css"

import { ChemicalDisplay } from "@/components/Balancer/ChemicalDisplay/ChemicalDisplay"
import { Count } from "@/components/Balancer/Count/Count"
import { EditFormulaButton } from "@/components/Balancer/EditFormulaButton"
import { Formula } from "@/components/Balancer/Formula/Formula"
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
