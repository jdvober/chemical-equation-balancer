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
			justifyContent={"center"} /*justify ==> along main axis*/
			alignContent="center"
			_hover={{
				transform: "scale(1.2)",
				color: "drac.red",
			}}
		>
			{chunk.parenthesesSubscript >= 1 ? (
				<Text fontSize="3.25vw" color="drac.orange">
					(
				</Text>
			) : null}
			<Subcompound
				chunk={chunk}
				chunkIndex={chunkIndex}
				arrows={arrows}
				location={location}
			/>
			{chunk.parenthesesSubscript >= 1 ? (
				<Flex dir="column">
					<Text
						fontSize="3.25vw"
						color="drac.orange"
						alignSelf="center"
					>
						)
					</Text>
				</Flex>
			) : null}
			{chunk.parenthesesSubscript > 1 ? (
				<Text
					fontSize="2.25vw"
					color="drac.orange"
					alignSelf="flex-end"
				>
					<sub>{chunk.parenthesesSubscript}</sub>
				</Text>
			) : null}
		</Flex>
	)
}
