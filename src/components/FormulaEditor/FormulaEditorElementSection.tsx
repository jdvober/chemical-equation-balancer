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
									if (symbol != "") {
										return (
											<DraggableElement
												symbol={symbol}
												index={i}
												id={uuid()}
												eID={uuid()}
												parent={
													"FormulaEditorElementSection"
												}
												subscript={0}
												subscriptColor="dracula.dracPurple"
												key={uuid()}
											/>
										)
									}

									return (
										<Box
											key={uuid()}
											padding="3"
											w={`3vw`}
											h={`3vw`}
											mb=".25vw"
											ml=".125vw"
											mr={".125vw"}
											borderRadius="8"
											border={"2px solid gray.500"}
										></Box>
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
