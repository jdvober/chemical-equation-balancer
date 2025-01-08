import React from 'react'

import { Box } from '@chakra-ui/react'

type AtomSVGProps = {
	symbol: ChemicalSymbol
	cirRadiusInEm: number
	cirFill: string
	cirStroke: string
	textFill: string
}
export const AtomSVG: React.FC<AtomSVGProps> = ({
	symbol,
	cirRadiusInEm: r,
	cirFill,
	cirStroke,
	textFill,
}) => {
	const toEm = (num: number) => {
		return `${num}em`
	}

	return (
		<Box ml=".1vw">
			<svg width={toEm(r * 2.5)} height={toEm(r * 2.5)} viewBox={`0 0 ${toEm(r * 2.5)} ${toEm(r * 2.5)}`}>
				<circle
					cx={'50%'}
					cy={'50%'}
					r={toEm(r)}
					stroke={cirStroke}
					strokeWidth="3"
					fill={cirFill}
				/>
				<text
					x='50%'
					y='55%'
					fontSize={toEm(r * 2)}
					textAnchor="middle"
					strokeWidth=".5px"
					alignmentBaseline="middle"
					dominantBaseline='middle'
					fill={textFill}
				>
					{symbol}
				</text>
			</svg>
		</Box>
	)
}
