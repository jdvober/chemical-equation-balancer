import { AtomSVG } from '@/components/Balancer/ChemicalDisplay/AtomSVG'
import { dracCurrentLine, dracCyan } from '@/theme/colors/colors'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { v4 as uuid } from 'uuid'

type Props = { item: ChemicalCompound }
type ChemicalDisplayAtomProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const ChemicalDisplayAtom: ChemicalDisplayAtomProps = ({ item }) => {
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
		<Flex className="ChemicalDisplayFormulas" direction="row">
			{getCompoundString(item).map((compound) => {
				return Array(
					compound.count *
						item.coefficient *
						(compound.parenthesesSubscript <= 0
							? 1
							: compound.parenthesesSubscript)
				)
					.fill(0)
					.map(() => {
						return (
							<Box ml=".5vw" mr=".5vw" mb="1vh" mt="1vh" h="2rem">
								<AtomSVG
									cirFill={dracCurrentLine}
									cirRadiusInEm={0.85}
									cirStroke="black"
									symbol={compound.symbol}
									textFill={dracCyan}
									key={uuid()}
								/>
							</Box>
						)
					})
			})}
		</Flex>
	)
}
