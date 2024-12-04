import { ChemicalDisplayAtom } from "@/components/ChemicalDisplay/ChemicalDisplayAtom"
import { ChemicalDisplayFormula } from "@/components/ChemicalDisplay/ChemicalDisplayFormula"
import { useMainStore } from "@/stores/MainStore"
import { Box, Flex } from "@chakra-ui/react"
import React from "react"
import { v4 as uuid } from "uuid"

type Props = {}
type ChemicalDisplayComboProps = Props extends Record<string, never>
	? React.FC<Record<string, never>>
	: React.FC<Props>

export const ChemicalDisplayCombo: ChemicalDisplayComboProps = () => {
	const formula = useMainStore((state) => state.formula)
	return (
		<Box className="ChemicalDisplayCombo">
			{formula.reactants.map((reactant) => {
				return (
					<Flex
						direction="row"
						justifyContent="space-between"
						key={uuid()}
					>
						<ChemicalDisplayFormula item={reactant} key={uuid()} />
						<ChemicalDisplayAtom item={reactant} key={uuid()} />
					</Flex>
				)
			})}
		</Box>
	)
}
