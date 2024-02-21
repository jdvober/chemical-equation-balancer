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
	const showBorders = true as boolean
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
				version="1.1"
				viewBox={`0 0 ${cirRadiusInVW * 2}vw ${cirRadiusInVW * 2}vw`}
				xmlns="http://www.w3.org/2000/svg"
			>
				<g
					// transform="translate(.25 -109.89)"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle
						cx={`${cirRadiusInVW}vw`}
						cy={`${cirRadiusInVW}vw`}
						r={`${cirRadiusInVW}vw`}
						fill={cirFill}
						stroke={cirStroke}
						strokeWidth=".5"
					/>
					<text
						// transform="matrix(1.8042 0 0 1.7838 -1362.4 -1018.6)"
						fill={textFill}
						// fontFamily="'JetBrains Mono'"
						fontSize={`${cirRadiusInVW}vw`}
						letterSpacing="0px"
						stroke="black"
						strokeWidth=".27871"
						text-align="center"
						wordSpacing="0px"
					>
						{" "}
						{/* <tspan x="810.60564" y="785.17116"> */}
						<tspan> {symbol} </tspan>
					</text>
				</g>
			</svg>
		</Box>
	)
}
