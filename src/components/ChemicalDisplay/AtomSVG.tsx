import React from "react"

import { Box } from "@chakra-ui/react"

type AtomSVGProps = {
	symbol: ChemicalSymbol
	cirRadiusInVW: number
	cirFill: string
	cirStroke: string
	textFill: string
}
export const AtomSVG: React.FC<AtomSVGProps> = ({
	symbol,
	cirRadiusInVW,
	cirFill,
	cirStroke,
	textFill,
}) => {
	const showBorders = false as boolean
	const fontHeight = cirRadiusInVW * 1.25
	const textYPos = cirRadiusInVW + fontHeight / 3
	return (
		<Box
			ml="1vw"
			p="0"
			m="0"
			border={showBorders === true ? "1px solid blue" : ""}
		>
			<svg
				width={`${cirRadiusInVW * 2}vw`}
				height={`${cirRadiusInVW * 2}vw`}
			>
				<circle
					cx={"50%"}
					cy={"50%"}
					r={`${cirRadiusInVW}vw`}
					stroke={cirStroke}
					stroke-width="3"
					fill={cirFill}
				/>
				<text
					x="50%"
					y={`${textYPos}vw`}
					fontSize={`${fontHeight}vw`}
					text-anchor="middle"
					stroke="black"
					stroke-width="1px"
					alignment-baseline="middle"
					fill={textFill}
				>
					{symbol}
				</text>
			</svg>
		</Box>
	)
}
