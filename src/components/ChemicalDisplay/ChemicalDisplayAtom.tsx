import { AtomSVG } from "@/components/ChemicalDisplay/AtomSVG"
import { dracCurrentLine, dracCyan } from "@/theme/colors/colors"
import { Box, HStack } from "@chakra-ui/react"
import React from "react"
import { v4 as uuid } from "uuid"

type Props = { item: ChemicalCompound }
type ChemicalDisplayAtomProps = Props extends Record<string, never>
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
		<Box className="ChemicalDisplayFormulas">
			<HStack overflowX={"scroll"} ml="1vw" mb="1vw" maxW="24vw">
				{getCompoundString(item).map((compound) => {
					return (
						<div key={uuid()}>
							<HStack ml="1vw">
								{Array(
									compound.count *
										item.coefficient *
										(compound.parenthesesSubscript <= 0
											? 1
											: compound.parenthesesSubscript)
								)
									.fill(0)
									.map(() => {
										return (
											<AtomSVG
												cirFill={dracCurrentLine}
												cirRadiusInVW={2.5}
												cirStroke="drac.black"
												symbol={compound.symbol}
												textFill={dracCyan}
												key={uuid()}
											/>
										)
									})}
							</HStack>
						</div>
					)
				})}
			</HStack>
		</Box>
	)
}
