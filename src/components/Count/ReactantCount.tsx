import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Center, Text } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"

// If no values, use this:
type ReactantCountProps = Record<string, never>
// If values, fill in the object below
//type ReactantCountProps = {}

export const ReactantCount: React.FC<ReactantCountProps> = () => {
	const reactantCountList = useMainStore((state) => state.reactantCountList)
	const productCountList = useMainStore((state) => state.productCountList)

	return (
		<Box
			className="ReactantCount"
			border={`1px solid #44475a`}
			borderRadius={"1vw"}
			w="33vw"
			h="auto"
			mt="2vh"
		>
			{reactantCountList.map((_, i) => {
				return (
					<Center key={uuid()}>
						<Text
							color={
								reactantCountList[i].count ==
								productCountList[i].count
									? "dracula.dracGreen"
									: "dracula.dracRed"
							}
						>
							{reactantCountList[i].symbol}:
							{reactantCountList[i].count}
						</Text>
					</Center>
				)
			})}
		</Box>
	)
}
