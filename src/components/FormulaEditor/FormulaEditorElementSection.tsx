import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react"

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
				<Text>Elements</Text>
				<Flex
					w="86vw"
					border="1px solid cyan"
					wrap="wrap"
					justify={"center"}
				>
					{elements.map((period) => {
						return (
							<HStack>
								{period.map((symbol, i) => {
									return (
										<DraggableElement
											symbol={symbol}
											id={uuid()}
											index={i}
											parent={"ELEMENT_SECTION"}
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
