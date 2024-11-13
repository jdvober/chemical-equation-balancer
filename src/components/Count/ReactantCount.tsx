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

	const numSamePairs = () => {
		return reactantCountList.filter((reactant, index) => {
			return reactant.count === productCountList[index].count
		}).length
	}

	const determineElementSame = (index: number) => {
		let match = false
		productCountList.forEach((productCount) => {
			if (
				reactantCountList[index].symbol === productCount.symbol &&
				reactantCountList[index].count === productCount.count
			) {
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
			{reactantCountList
				.filter((reactant) => {
					return reactant.count >= 1
				})
				.map((reactant, i) => {
					return (
						<Center key={uuid()}>
							<Text
								color={
									numSamePairs() === reactantCountList.length
										? "dracula.dracGreen"
										: determineElementSame(i) === true
										? "dracula.dracYellow"
										: "dracula.dracRed"
								}
								opacity={
									numSamePairs() === reactantCountList.length
										? "100%"
										: determineElementSame(i) === true
										? "50%"
										: "100%"
								}
							>
								{reactant.symbol}:{reactant.count}
							</Text>
						</Center>
					)
				})}
		</Box>
	)
}
