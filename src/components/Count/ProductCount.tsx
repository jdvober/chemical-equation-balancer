import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Text } from "@chakra-ui/react"

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

	return (
		<Box
			className="ProductCount"
			border={`1px solid #44475a`}
			w="33vw"
			h="auto">
			{productCountList.map((_, i) => {
				return (
					<Box key={uuid()}>
						<Text
							color={
								reactantCountList[i].count ==
								productCountList[i].count
									? "dracula.dracGreen"
									: "dracula.dracRed"
							}>
							{productCountList[i].symbol}:
							{productCountList[i].count}
						</Text>
					</Box>
				)
			})}
		</Box>
	)
}
