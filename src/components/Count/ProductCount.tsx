import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Center, Text } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"

// If no values, use this:
type ProductCountProps = Record<string, never>
// If values, fill in the object below
//type ProductCountProps = {}

export const ProductCount: React.FC<ProductCountProps> = () => {
	// const formula = useMainStore((state) => state.formula)

	const reactantCountList = useMainStore((state) => state.reactantCountList)

	const productCountList = useMainStore((state) => state.productCountList)

	const numSamePairs = () => {
		return reactantCountList.filter((reactant, index) => {
			return reactant.count === productCountList[index].count
		}).length
	}

	const determineElementSame = (index: number) => {
		let match = false
		reactantCountList.forEach((reactantCount) => {
			if (
				productCountList[index].symbol === reactantCount.symbol &&
				productCountList[index].count === reactantCount.count
			) {
				match = true
			}
		})
		return match
	}

	return (
		<Box
			className="ProductCount"
			border={`1px solid #44475a`}
			borderRadius={"1vw"}
			w="33vw"
			h="auto"
			mt="2vh"
		>
			{productCountList
				.filter((product) => {
					return product.count >= 1
				})
				.map((product, i) => {
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
								{product.symbol}:{product.count}
							</Text>
						</Center>
					)
				})}
		</Box>
	)
}
