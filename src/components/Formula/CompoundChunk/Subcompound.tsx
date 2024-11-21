import React from "react"
import { v4 as uuid } from "uuid"

import { ChemicalElement } from "@/components/Formula/ChemicalElement/ChemicalElement"
import { Flex } from "@chakra-ui/react"

// If no values, use this:
// type SubcompoundProps = Record<string, never>
// If values, fill in the object below
type SubcompoundProps = {
	chunk: CompoundChunk
	isHovered: boolean
}

export const Subcompound: React.FC<SubcompoundProps> = ({
	chunk,
	isHovered,
}) => {
	return (
		<Flex dir="row" className="Subcompound" key={uuid()}>
			{chunk.elements.map((element) => {
				return (
					<ChemicalElement
						key={uuid()}
						fontSizeInVH={2}
						symbol={element.symbol}
						isHovered={isHovered}
						subscript={element.subscript}
					/>
				)
			})}
		</Flex>
	)
}
