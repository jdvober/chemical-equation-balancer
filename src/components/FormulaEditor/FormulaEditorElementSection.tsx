import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Flex, HStack, VStack } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore"
import { DraggableElement } from "./DraggableElement"

type FormulaEditorElementSectionProps = {}

export const FormulaEditorElementSection: React.FC<
	FormulaEditorElementSectionProps
> = () => {
	const elements = useMainStore((state) => state.elements)
	return (
		<Box>
			<VStack color="dracula.dracFG">
				<Flex w="86vw" wrap="wrap" justify={"center"}>
					{elements.map((period) => {
						return (
							<HStack key={uuid()}>
								{period.map((symbol, i) => {
									return (
										<DraggableElement
											symbol={symbol}
											id={uuid()}
											index={i}
											parent={
												"FormulaEditorElementSection"
											}
											subscript={0}
											key={uuid()}
										/>
									)
								})}
							</HStack>
						)
					})}
				</Flex>
			</VStack>
		</Box>
	)
}
