import { ChemicalDisplayAtom } from '@/components/Balancer/ChemicalDisplay/ChemicalDisplayAtom'
import { ChemicalDisplayFormula } from '@/components/Balancer/ChemicalDisplay/ChemicalDisplayFormula'
import { useMainStore } from '@/stores/MainStore'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { v4 as uuid } from 'uuid'

type Props = { formulaSection: FormulaSection }
type ChemicalDisplayComboProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const ChemicalDisplayCombo: ChemicalDisplayComboProps = ({
	formulaSection,
}) => {
	const formula = useMainStore((state) => state.formula)
	return formulaSection === 'REACTANTS' ? (
		<Box className="ChemicalDisplayCombo">
			{formula.reactants.map((item) => {
				return (
					<Flex
						dir="row"
						key={uuid()}
						border={
							item.isHovered === true
								? `1px solid fg`
								: `1px solid bg`
						}
						p=".5rem"
						borderRadius=".5rem"
						alignItems={'center'}
					>
						<Box justifySelf="flex-start">
							<ChemicalDisplayFormula item={item} key={uuid()} />
						</Box>
						<Box overflowX={'scroll'} w="auto" ml="1em">
							<ChemicalDisplayAtom item={item} key={uuid()} />
						</Box>
					</Flex>
				)
			})}
		</Box>
	) : (
		<Box className="ChemicalDisplayCombo">
			{formula.products.map((item) => {
				return (
					<Flex
						dir="row"
						key={uuid()}
						border={
							item.isHovered === true
								? `1px solid fg`
								: `1px solid bg`
						}
						p=".5rem"
						borderRadius=".5rem"
						alignItems={'center'}
						justifyContent={'space-around'}
					>
						<Box justifySelf="flex-start">
							<ChemicalDisplayFormula item={item} key={uuid()} />
						</Box>
						<Box overflowX={'scroll'} w="auto" ml="1em">
							<ChemicalDisplayAtom item={item} key={uuid()} />
						</Box>
					</Flex>
				)
			})}
		</Box>
	)
}
