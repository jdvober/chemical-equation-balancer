import React from "react"

import { Subcompound } from "@/components/Formula/CompoundChunk/Subcompound"
import { Flex, Text } from "@chakra-ui/react"

// If no values, use this:
// type CompoundChunkProps = Record<string, never>
// If values, fill in the object below
type CompoundChunkProps = {
	chunk: CompoundChunk
	chunkIndex: number
	arrows: boolean
}

export const CompoundChunk: React.FC<CompoundChunkProps> = ({
	chunk,
	chunkIndex,
	arrows,
}) => {
	return (
		<Flex
			className="CompoundChunk"
			direction="row"
			justifyContent={"center"} /*justify ==> along main axis*/
			alignItems={"center"} /*align ==> along cross axis*/
		>
			{chunk.parenthesesSubscript >= 1 ? (
				<Text fontSize="2vw">(</Text>
			) : null}
			<Subcompound
				chunk={chunk}
				chunkIndex={chunkIndex}
				arrows={arrows}
			/>
			{chunk.parenthesesSubscript >= 1 ? (
				<Text fontSize="2vw">)</Text>
			) : null}
			{chunk.parenthesesSubscript > 1 ? (
				<Text fontSize="2vw">
					<sub>{chunk.parenthesesSubscript}</sub>
				</Text>
			) : null}
		</Flex>
	)
}
