import React from 'react'

import { Box, HStack, Text } from '@chakra-ui/react'

type ChemicalElementProps = {
	symbol: ChemicalSymbol
	subscript?: number
	isHovered?: boolean
}
export const ChemicalElement: React.FC<ChemicalElementProps> = ({
	symbol,
	subscript,
	isHovered,
}) => {
	return (
		<Box className='ChemicalElement'>
			<HStack color={isHovered === true ? 'red' : 'fg'}>
				<Text fontSize={'2rem'}>{symbol}</Text>
				{subscript && !(subscript <= 1) ? (
					<Text fontSize={'2rem'}>
						<math>
							<mi></mi>
							<msub>{subscript}</msub>
						</math>
					</Text>
				) : null}
			</HStack>
		</Box>
	)
}
