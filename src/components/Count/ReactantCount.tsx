import React from "react"
import { v4 as uuid } from "uuid"

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
		elementListIndex: number
		symbol: string
		count: number
	}[] = []
	for (let i = 0; i < elements.length; i++) {
		elements.push({
			elementListIndex: i,
			symbol: symbols[i],
			count: allSymbols.filter((e) => e == elements[i].symbol).length,
		})
	}

	return (
		<Box
			className="ReactantCount"
			border={`1px solid #44475a`}
			w="33vw"
			h="auto">
			{symbols.map((_, i) => {
				return (
					<Box key={uuid()}>
						<Text
							color={
								reactantCountList[i].count ==
								productCountList[i].count
									? "dracula.dracGreen"
									: "dracula.dracRed"
							}>
							{`${reactantCountList[i].symbol}:${reactantCountList[i].count}`}
						</Text>
					</Box>
				)
			})}
		</Box>
	)
}
