import React from 'react'
import { v4 as uuid } from 'uuid'

import { HStack, Text, VStack } from '@chakra-ui/react'

import { CompoundChunk } from '@/components/Balancer/Formula/CompoundChunk/CompoundChunk'
import { useMainStore } from '@/stores/MainStore.ts'

type ChemicalCompoundProps = {
	compound: ChemicalCompound
	formulaSection: FormulaSection
	index: number
	includeSymbols: boolean
	location: CompoundLocation
}
export const ChemicalCompound: React.FC<ChemicalCompoundProps> = ({
	compound,
	formulaSection,
	index,
	includeSymbols,
	location,
}) => {
	const formula = useMainStore((state) => state.formula)
	const setHoverStatus = useMainStore((state) => state.setHoverStatus)
	const item =
		formulaSection === 'REACTANTS'
			? formula.reactants[index]
			: formula.products[index]

	const handleMouseEnter = () => {
		setHoverStatus(item.formulaSection, index, true)
	}
	const handleMouseLeave = () => {
		setHoverStatus(item.formulaSection, index, false)
	}

	return (
		<VStack>
			<HStack
				className="compound"
				mt={'auto'}
				mb={'auto'}
				key={uuid()}
				alignSelf="center"
			>
				{compound.chunks.map((chunk, chunkIndex) => (
					<HStack
						key={uuid()}
						_hover={{
							transform: 'scale()',
							color: 'red',
						}}
						onMouseEnter={() => {
							handleMouseEnter()
						}}
						onMouseLeave={() => {
							handleMouseLeave()
						}}
					>
						<CompoundChunk
							chunk={chunk}
							chunkIndex={chunkIndex}
							arrows={false}
							location={location}
						/>
					</HStack>
				))}
				{formulaSection === 'REACTANTS' ? (
					index < formula.reactants.length - 1 ? (
						<Text
							color="comment"
							ml="1rem"
							mr="1rem"
							fontSize="3rem"
						>
							{includeSymbols ? '+' : ''}
						</Text>
					) : null
				) : index < formula.products.length - 1 ? (
					<Text color="comment" ml="1rem" mr="1rem" fontSize="3rem">
						{includeSymbols ? '+' : ''}
					</Text>
				) : null}
			</HStack>
		</VStack>
	)
}
