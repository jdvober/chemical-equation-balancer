import { CalculateCountList } from "@/functions/GlobalFunctions"
import { useMainStore } from "@/stores/MainStore"
import { Box, Center, Text } from "@chakra-ui/react"
import React from "react"
import { v4 as uuid } from "uuid"

type Props = { formulaSection: FormulaSection }
type CounterProps = Props extends Record<string, never>
	? React.FC<Record<string, never>>
	: React.FC<Props>

export const Counter: CounterProps = ({ formulaSection }) => {
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
			className={
				formulaSection === "REACTANTS"
					? "ReactantCount"
					: "ProductCount"
			}
			border={`1px solid #44475a`}
			borderRadius={"1vw"}
			h="auto"
			mt="2vh"
		>
			{countList
				.filter((element) => {
					return formulaSection === "REACTANTS"
						? element.reactantCount >= 1
						: element.productCount >= 1
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
										? "drac.green"
										: determineElementSame() === true
										? "drac.yellow"
										: "drac.red"
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
