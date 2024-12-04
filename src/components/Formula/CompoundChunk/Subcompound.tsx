import React from "react"
import { v4 as uuid } from "uuid"

import { EditorFormulaElement } from "@/components/Formula/CompoundChunk/EditorFormulaElement"
import { FormulaElement } from "@/components/Formula/CompoundChunk/FormulaElement"
import { ChemicalElementSubscriptModificationButton } from "@/components/FormulaEditor/FormulaSection/ButtonsAndSwitches/ChemicalElementSubscriptModificationButton"
import { CompoundConstructionElement } from "@/components/FormulaEditor/FormulaSection/CompoundConstruction/CompoundConstructionElement"
import { PeriodicTableDraggableElement } from "@/components/FormulaEditor/PeriodicTableSection/PeriodicTableDraggableElement"
import { Box, Flex } from "@chakra-ui/react"

// If no values, use this:
// type SubcompoundProps = Record<string, never>
// If values, fill in the object below
type SubcompoundProps = {
	chunk: CompoundChunk
	chunkIndex: number
	arrows: boolean
	location: CompoundLocation
}

export const Subcompound: React.FC<SubcompoundProps> = ({
	chunk,
	chunkIndex,
	arrows,
	location,
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
						{location === "FORMULA" ? (
							<FormulaElement
								key={uuid()}
								id={`${element.symbol}-${uuid()}`}
								symbol={element.symbol}
								eID={element.eID}
								chunkID={chunk.chunkID}
								subscript={element.subscript}
							/>
						) : null}
						{location === "CONSTRUCTION" ? (
							<CompoundConstructionElement
								key={uuid()}
								id={`${element.symbol}-${uuid()}`}
								symbol={element.symbol}
								eID={element.eID}
								chunkID={chunk.chunkID}
								subscript={element.subscript}
							/>
						) : null}
						{location === "EDITOR_FORMULA" ? (
							<EditorFormulaElement
								key={uuid()}
								id={`${element.symbol}-${uuid()}`}
								symbol={element.symbol}
								eID={element.eID}
								chunkID={chunk.chunkID}
								subscript={element.subscript}
							/>
						) : null}
						{location === "PERIODIC_TABLE" ? (
							<PeriodicTableDraggableElement
								key={uuid()}
								id={`${element.symbol}-${uuid()}`}
								symbol={element.symbol}
								eID={element.eID}
								parent="FormulaEditorElementSection"
							/>
						) : null}
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
