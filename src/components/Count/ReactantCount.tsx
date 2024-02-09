import React from "react"

import { Box, Text } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"

// If no values, use this:
type ReactantCountProps = Record<string, never>
// If values, fill in the object below
//type ReactantCountProps = {}

export const ReactantCount: React.FC<ReactantCountProps> = () => {
	const formula = useMainStore((state) => state.formula)
	const reactantCountList = useMainStore((state) => state.reactantCountList)
	const productCountList = useMainStore((state) => state.productCountList)
	const allSymbols: string[] = []
	const symbols: string[] = []
	formula.reactants.forEach((reactant) => {
		reactant.elements.forEach((element) => {
			if (!symbols.includes(element.symbol)) {
				symbols.push(element.symbol)
			}
			for (let c = 0; c < reactant.coefficient; c++) {
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
			className="ReactantCount"
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
