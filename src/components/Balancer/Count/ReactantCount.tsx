import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Center, Text } from "@chakra-ui/react"

import { CalculateCountList } from "../../../functions/GlobalFunctions.ts"
import { useMainStore } from "../../../stores/MainStore.ts"

// If no values, use this:
type ReactantCountProps = Record<string, never>
// If values, fill in the object below
//type ReactantCountProps = {}

export const ReactantCount: React.FC<ReactantCountProps> = () => {
	const formula = useMainStore((state) => state.formula)
	const countList = CalculateCountList(formula)

	const numSamePairs = () => {
		return countList.filter((element) => {
			return element.reactantCount === element.productCount
		}).length
	}

	const determineElementSame = () => {
		let match = false
		countList.forEach((count) => {
			if (count.reactantCount === count.productCount) {
				match = true
			}
		})
		return match
	}

	return (
		<Box
			className="ReactantCount"
			border={`1px solid #44475a`}
			borderRadius={"1vw"}
			w="33vw"
			h="auto"
			mt="2vh"
		>
			{countList
				.filter((element) => {
					return element.reactantCount >= 1
				})
				.map((element) => {
					return (
						<Center key={uuid()}>
							<Text
								color={
									numSamePairs() === countList.length
										? "dracula.dracGreen"
										: determineElementSame() === true
										? "dracula.dracYellow"
										: "dracula.dracRed"
								}
								opacity={
									numSamePairs() === countList.length
										? "100%"
										: determineElementSame() === true
										? "50%"
										: "100%"
								}
							>
								{element.symbol}:{element.reactantCount}
							</Text>
						</Center>
					)
				})}
		</Box>
	)
}
