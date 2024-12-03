import React from "react"
import { v4 as uuid } from "uuid"

import { ChemicalElementSubscriptModificationButton } from "@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/ChemicalElementSubscriptModificationButton"
import { CompoundConstructionElement } from "@/components/FormulaEditor/FormulaSection/CompoundConstruction/CompoundConstructionElement"
import { Box, Flex } from "@chakra-ui/react"

// If no values, use this:
// type SubcompoundProps = Record<string, never>
// If values, fill in the object below
type SubcompoundProps = {
	chunk: CompoundChunk
	chunkIndex: number
	arrows: boolean
}

export const Subcompound: React.FC<SubcompoundProps> = ({
	chunk,
	chunkIndex,
	arrows,
}) => {
	return (
		<Flex
			dir="row"
			className="Subcompound"
			key={uuid()}
			justifyContent={"center"} /*justify ==> along main axis*/
			alignItems={"center"} /*align ==> along cross axis*/
		>
			{chunk.elements.map((element, elementIndex) => {
				return (
					<Box key={uuid()}>
						{arrows === true ? (
							<ChemicalElementSubscriptModificationButton
								isUpArrow={true}
								chunkIndex={chunkIndex}
								elementIndex={elementIndex}
							/>
						) : null}
						<CompoundConstructionElement
							key={uuid()}
							id={`${element.symbol}-${uuid()}`}
							symbol={element.symbol}
							eID={element.eID}
							chunkID={chunk.chunkID}
							subscript={element.subscript}
						/>
						{arrows === true ? (
							<ChemicalElementSubscriptModificationButton
								isUpArrow={false}
								chunkIndex={chunkIndex}
								elementIndex={elementIndex}
							/>
						) : null}
					</Box>
				)
			})}
		</Flex>
	)
}
