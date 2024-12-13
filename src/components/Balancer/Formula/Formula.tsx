import React from 'react'

import { Flex, Spacer } from '@chakra-ui/react'

import { Arrow } from '@/components/Balancer/Formula/Arrow.tsx'
import { CoefficientAndCompound } from '@/components/Balancer/Formula/CoefficientAndCompound.tsx'
import { useMainStore } from '../../../stores/MainStore.ts'

// If no values, use this:
type FormulaProps = Record<string, never>
// If values, fill in the object below
// type FormulaProps = {}

export const Formula: React.FC<FormulaProps> = () => {
	const formula = useMainStore((state) => state.formula)

	return (
		<Flex
			direction="row"
			border={`1px solid currentLine`}
			borderRadius={'1rem'}
			p="1rem"
			overflowX={'scroll'}
			overflowY={'hidden'}
			alignItems="center"
			justifyContent="center"
		>
			<Spacer />
			<Spacer />
			{formula.reactants.map((item, itemIndex) => (
				<CoefficientAndCompound item={item} itemIndex={itemIndex} />
			))}

			<Arrow />

			{formula.products.map((item, itemIndex) => (
				<CoefficientAndCompound item={item} itemIndex={itemIndex} />
			))}
			<Spacer />
			<Spacer />
		</Flex>
	)
}
