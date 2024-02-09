import React from "react"

import { Box, Text } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"

// If no values, use this:
type ProductCountProps = Record<string, never>
// If values, fill in the object below
//type ProductCountProps = {}

export const ProductCount: React.FC<ProductCountProps> = () => {
	const formula = useMainStore((state) => state.formula)
	const allSymbols: string[] = []
	const symbols: string[] = []
	formula.products.forEach((product) => {
		product.elements.forEach((element) => {
			if (!symbols.includes(element.symbol)) {
				symbols.push(element.symbol)
			}
			for (let c = 0; c < product.coefficient; c++) {
				for (let s = 0; s < element.subscript; s++) {
					allSymbols.push(element.symbol)
				}
			}
		})
	})

	const elements: {
		symbol: string
		count: number
	}[] = []
	for (const symbol of symbols) {
		elements.push({
			symbol: symbol,
			count: allSymbols.filter((e) => e == symbol).length,
		})
	}

	return (
		<Box
			className="ProductCount"
			border={`1px solid #44475a`}
			w="33vw"
			h="auto">
			{elements.map((element) => (
				<Box>
					<Text color="dracula.dracFG">{`${element.symbol}:${element.count} `}</Text>
				</Box>
			))}
		</Box>
	)
}
