import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Center, Text } from "@chakra-ui/react"
import { CalculateCountList } from "../../functions/GlobalFunctions.ts"
import { useMainStore } from "../../stores/MainStore.ts"

// If no values, use this:
type ProductCountProps = Record<string, never>
// If values, fill in the object below
//type ProductCountProps = {}

export const ProductCount: React.FC<ProductCountProps> = () => {
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
					return element.productCount >= 1
				})
				.sort((a: ElementCountListEntry, b: ElementCountListEntry) => {
					if (a.symbol < b.symbol) {
						return -1
					}
					if (a.symbol > b.symbol) {
						return 1
					}
					return 0
				})
				.map((element) => {
					return (
						<Center key={uuid()}>
							<Text
								color={
									numSamePairs() === countList.length
										? "green"
										: determineElementSame() === true
										? "yellow"
										: "red"
								}
								opacity={
									numSamePairs() === countList.length
										? "100%"
										: determineElementSame() === true
										? "50%"
										: "100%"
								}
							>
								{element.symbol}:{element.productCount}
							</Text>
						</Center>
					)
				})}
		</Box>
	)
}
