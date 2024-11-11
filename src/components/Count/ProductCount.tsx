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

	// const allSymbols: string[] = []

	// const symbols: string[] = []

	// const [reactantCounts, setReactantCounts] = useState(reactantCountList)
	// const [productCounts, setProductCounts] = useState(reactantCountList)

	// formula.products.forEach((product) => {
	// 	product.elements.forEach((element) => {
	// 		if (!symbols.includes(element.symbol)) {
	// 			symbols.push(element.symbol)
	// 		}
	// 		for (let c = 0; c < product.coefficient; c++) {
	// 			for (let s = 0; s < element.subscript; s++) {
	// 				allSymbols.push(element.symbol)
	// 			}
	// 		}
	// 	})
	// })

	// const elements: {
	// 	elementListIndex: number
	// 	symbol: string
	// 	count: number
	// }[] = []
	// for (let i = 0; i < elements.length; i++) {
	// 	elements.push({
	// 		elementListIndex: i,
	// 		symbol: symbols[i],
	// 		count: allSymbols.filter((e) => e == elements[i].symbol).length,
	// 	})
	// }

	const numSamePairs = () => {
		return reactantCountList.filter((reactant, index) => {
			return reactant.count === productCountList[index].count
		}).length
	}

	const determineElementSame = (index: number) => {
		return reactantCountList[index].count === productCountList[index].count
			? true
			: false
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
