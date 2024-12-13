import React from 'react'

import { Subcompound } from '@/components/Balancer/Formula/CompoundChunk/Subcompound'
import { Flex, Text } from '@chakra-ui/react'

// If no values, use this:
// type CompoundChunkProps = Record<string, never>
// If values, fill in the object below
type CompoundChunkProps = {
	chunk: CompoundChunk
	chunkIndex: number
	arrows: boolean
	location: CompoundLocation
}

export const CompoundChunk: React.FC<CompoundChunkProps> = ({
	chunk,
	chunkIndex,
	arrows,
	location,
}) => {
	return (
		<Flex
			className="CompoundChunk"
			direction="row"
			justifyContent={'center'} /*justify ==> along main axis*/
			alignItems="center"
			_hover={{
				transform: 'scale(1.2)',
				color: 'red',
			}}
		>
			<Text fontSize="3rem" color="orange">
				{chunk.parenthesesSubscript >= 1 ? '(' : null}
			</Text>
			<Subcompound
				chunk={chunk}
				chunkIndex={chunkIndex}
				arrows={arrows}
				location={location}
			/>
			<Text fontSize="3rem" color="orange">
				{chunk.parenthesesSubscript >= 1 ? ')' : null}
			</Text>
			{chunk.parenthesesSubscript > 1 ? (
				<Text fontSize="2rem" color="orange" alignSelf="flex-end">
					<sub>{chunk.parenthesesSubscript}</sub>
				</Text>
			) : null}
		</Flex>
	)
}
