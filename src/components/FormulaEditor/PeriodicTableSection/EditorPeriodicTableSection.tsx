import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Flex, HStack, VStack } from "@chakra-ui/react"

import { useMainStore } from "../../../stores/MainStore"
import { PeriodicTableDraggableElement } from "./PeriodicTableDraggableElement"

type EditorPeriodicTableSectionProps = {}

export const EditorPeriodicTableSection: React.FC<
	EditorPeriodicTableSectionProps
> = () => {
	const elements = useMainStore((state) => state.elements)
	return (
		<Box>
			<VStack color="drac.fg">
				<Flex w="86vw" wrap="wrap" justify={"center"}>
					{elements.map((period) => {
						return (
							<HStack key={uuid()}>
								{period.map((symbol) => {
									if (symbol != "BLANK") {
										const uniqueID = `${symbol}-${uuid()}`
										return (
											<PeriodicTableDraggableElement
												symbol={symbol}
												id={uniqueID}
												eID={uniqueID}
												parent={
													"FormulaEditorElementSection"
												}
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
