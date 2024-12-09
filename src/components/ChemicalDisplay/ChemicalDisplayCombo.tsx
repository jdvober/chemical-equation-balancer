import { ChemicalDisplayAtom } from "@/components/ChemicalDisplay/ChemicalDisplayAtom"
import { ChemicalDisplayFormula } from "@/components/ChemicalDisplay/ChemicalDisplayFormula"
import { useMainStore } from "@/stores/MainStore"
import { Box, GridItem, SimpleGrid } from "@chakra-ui/react"
import React from "react"
import { v4 as uuid } from "uuid"

type Props = { formulaSection: FormulaSection }
type ChemicalDisplayComboProps = Props extends Record<string, never>
	? React.FC<Record<string, never>>
	: React.FC<Props>

export const ChemicalDisplayCombo: ChemicalDisplayComboProps = ({
	formulaSection,
}) => {
	const formula = useMainStore((state) => state.formula)
	return formulaSection === "REACTANTS" ? (
		<Box className="ChemicalDisplayCombo">
			{formula.reactants.map((reactant) => {
				return (
					<SimpleGrid columns={3} gap={"1vw"} key={uuid()}>
						<GridItem colSpan={1}>
							<ChemicalDisplayFormula
								item={reactant}
								key={uuid()}
							/>
						</GridItem>
						<GridItem colSpan={2}>
							<ChemicalDisplayAtom item={reactant} key={uuid()} />
						</GridItem>
					</SimpleGrid>
				)
			})}
		</Box>
	) : (
		<Box className="ChemicalDisplayCombo">
			{formula.products.map((product) => {
				return (
					<SimpleGrid columns={3} key={uuid()}>
						<GridItem colSpan={1}>
							<ChemicalDisplayFormula
								item={product}
								key={uuid()}
							/>
						</GridItem>
						<GridItem colSpan={2}>
							<ChemicalDisplayAtom item={product} key={uuid()} />
						</GridItem>
					</SimpleGrid>
				)
			})}
		</Box>
	)
}
