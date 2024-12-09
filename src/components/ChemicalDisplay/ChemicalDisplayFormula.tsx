import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Flex, Text } from "@chakra-ui/react"

type Props = { item: ChemicalCompound }
type ChemicalDisplayFormulaProps = Props extends Record<string, never>
	? React.FC<Record<string, never>>
	: React.FC<Props>

export const ChemicalDisplayFormula: ChemicalDisplayFormulaProps = ({
	item,
}) => {
	const getCompoundString = (compound: ChemicalCompound) => {
		let symbolList = [] as {
			symbol: ChemicalSymbol
			count: number
			parenthesesSubscript: number
			isFirstElementInChunk: boolean
			isLastElementInChunk: boolean
		}[]
		compound.chunks.forEach((chunk) => {
			chunk.elements.forEach((element, i) => {
				symbolList.push({
					symbol: element.symbol,
					count: element.subscript.value,
					parenthesesSubscript: chunk.parenthesesSubscript,
					isFirstElementInChunk: i === 0 ? true : false,
					isLastElementInChunk:
						i === chunk.elements.length - 1 ? true : false,
				})
			})
		})
		return symbolList
	}

	return (
		<Box className="ChemicalDisplayFormulas">
			<Flex dir="row" key={uuid()} height="4em">
				{/*             */}
				{/* Coefficient */}
				{/*             */}
				<Text color="drac.pink" fontSize="2em">
					{item.coefficient}
				</Text>
				{/*    */}
				{/* Of */}
				{/*    */}
				<Text ml=".25em" mr=".25em" fontSize="2em">
					of
				</Text>
				{/*         */}
				{/* Formula */}
				{/*         */}
				{getCompoundString(item).map((compound) => {
					return (
						<Flex dir="row" key={uuid()}>
							{compound.parenthesesSubscript >= 2 &&
							compound.isFirstElementInChunk === true ? (
								<Text color="drac.orange" fontSize="2em">
									(
								</Text>
							) : null}
							<Text color="drac.purple" fontSize="2em">
								{compound.symbol}
							</Text>

							<Text color="drac.purple" fontSize="2em">
								{compound.count > 1 ? (
									<sub>{compound.count}</sub>
								) : null}
							</Text>

							{compound.parenthesesSubscript >= 2 &&
							compound.isLastElementInChunk === true ? (
								<Flex dir="row">
									<Text color="drac.orange" fontSize="2em">
										)
									</Text>
									<Text color="drac.orange" fontSize="2em">
										<sub>
											{compound.parenthesesSubscript}
										</sub>
									</Text>
								</Flex>
							) : null}
						</Flex>
					)
				})}
			</Flex>
		</Box>
	)
}
