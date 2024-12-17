import { CompoundChunk } from '@/components/Balancer/Formula/CompoundChunk/CompoundChunk'
import { ChunkSubscriptModificationButton } from '@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/ChunkSubscriptModificationButton'
import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import { v4 as uuid } from 'uuid'

type Props = { chunk: CompoundChunk; chunkIndex: number }
type CompoundStackProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const CompoundStack: CompoundStackProps = ({ chunk, chunkIndex }) => {
	return (
		<Box className="CompoundStack" key={chunk.chunkID}>
			<VStack key={uuid()} h="100%" alignSelf="center">
				{chunk.parenthesesSubscript >= 1 ? (
					<ChunkSubscriptModificationButton
						chunkID={chunk.chunkID}
						isUpArrow={true}
					/>
				) : null}

				<CompoundChunk
					chunk={chunk}
					chunkIndex={chunkIndex}
					arrows={true}
					key={uuid()}
					location="CONSTRUCTION"
				/>
				{chunk.parenthesesSubscript >= 1 ? (
					<ChunkSubscriptModificationButton
						chunkID={chunk.chunkID}
						isUpArrow={false}
					/>
				) : null}
			</VStack>
		</Box>
	)
}
