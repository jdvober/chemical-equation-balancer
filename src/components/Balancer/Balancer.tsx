import React from "react"
import "../../App.css"

import { EditFormulaButton } from "@/components/Balancer/EditFormulaButton"
import { ChemicalDisplay } from "@/components/ChemicalDisplay/ChemicalDisplay"
import { Count } from "@/components/Count/Count"
import { Formula } from "@/components/Formula/Formula"
import { Box, Center, HStack, VStack } from "@chakra-ui/react"

// If no values, use this:
type BalancerProps = Record<string, never>
// If values, fill in the object below
//type BalancerProps = {}

export const Balancer: React.FC<BalancerProps> = () => {
	return (
		<Box className="Balancer">
			<Center fontSize="5xl" bg="drac.bg">
				<VStack>
					<HStack>
						<Formula />
						<EditFormulaButton />
					</HStack>
					<Count />
					<ChemicalDisplay />
				</VStack>
			</Center>
		</Box>
	)
}
