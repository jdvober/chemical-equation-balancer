import React from "react"

import { Subcompound } from "@/components/Formula/CompoundChunk/Subcompound"
import { Flex, Text } from "@chakra-ui/react"

// If no values, use this:
// type CompoundChunkProps = Record<string, never>
// If values, fill in the object below
type CompoundChunkProps = {
	chunk: CompoundChunk
	isHovered: boolean
}

export const CompoundChunk: React.FC<CompoundChunkProps> = ({
	chunk,
	isHovered,
}) => {
	return (
		<Flex className="CompoundChunk" direction="row">
			{chunk.parenthesesSubscript >= 1 ? <Text>(</Text> : null}
			<Subcompound chunk={chunk} isHovered={isHovered} />
			{chunk.parenthesesSubscript >= 1 ? <Text>)</Text> : null}
			{chunk.parenthesesSubscript > 1 ? (
				<sub>{chunk.parenthesesSubscript}</sub>
			) : null}
		</Flex>
	)
}
