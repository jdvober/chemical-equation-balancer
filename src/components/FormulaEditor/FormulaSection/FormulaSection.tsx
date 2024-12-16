import React from 'react'

import { ReactantProductSwitch } from '@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/ReactantProductSwitch'
import { CompoundConstruction } from '@/components/FormulaEditor/FormulaSection/CompoundConstruction/CompoundConstruction'
import { EditorControls } from '@/components/FormulaEditor/FormulaSection/EditorControls'
import { FormulaDisplay } from '@/components/FormulaEditor/FormulaSection/FormulaDisplay'
import { useMainStore } from '@/stores/MainStore'
import { dracGreen, dracRed } from '@/theme/colors/colors'
import { Box, Flex } from '@chakra-ui/react'

// If no values, use this:
type FormulaSectionProps = Record<string, never>
// If values, fill in the object below
//type FormulaSectionProps = {}

export const FormulaSection: React.FC<FormulaSectionProps> = () => {
	const reactantAndProductElementListsMatch = useMainStore(
		(state) => state.reactantAndProductElementListsMatch
	)
	return (
		<Box className="FormulaSection" flexGrow={1} w="100%">
			<Flex
				direction="row"
				border={`1px solid ${
					reactantAndProductElementListsMatch === true
						? dracGreen
						: dracRed
				}`}
				borderRadius={'1rem'}
				alignItems={'center'}
				justifyContent={'flex-start'}
				overflowX={'auto'}
				overflowY={'clip'}
				p=".5rem"
				pl="2rem"
				m=".5rem"
				gap=".5em"
			>
				<CompoundConstruction />
				<EditorControls />
				<ReactantProductSwitch />
				<FormulaDisplay />
			</Flex>
		</Box>
	)
}
