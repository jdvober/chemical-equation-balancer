import React from "react"

import { Box } from "@chakra-ui/react"

type AtomSVGProps = {
	symbol: ChemicalSymbol
	cirRadiusInVH: number
	cirFill: string
	cirStroke: string
	textFill: string
}
export const AtomSVG: React.FC<AtomSVGProps> = ({
	symbol,
	cirRadiusInVH,
	cirFill,
	cirStroke,
	textFill,
}) => {
	return (
		<Box ml="1vw" p="0" m="0">
			<svg
				width="10vh"
				height="10vh"
				version="1.1"
				viewBox={`0 0 10vh 10vh`}
				xmlns="http://www.w3.org/2000/svg">
				<g
					// transform="translate(.25 -109.89)"
					stroke-linecap="round"
					stroke-linejoin="round">
					<circle
						cx="5vh"
						cy="5vh"
						r="3vh"
						fill={cirFill}
						stroke={cirStroke}
						stroke-width=".5"
					/>
					<text
						// transform="matrix(1.8042 0 0 1.7838 -1362.4 -1018.6)"
						fill={textFill}
						font-family="'JetBrains Mono'"
						font-size="2vh"
						letter-spacing="0px"
						stroke="black"
						stroke-width=".27871"
						text-align="center"
						word-spacing="0px">
						{" "}
						<tspan x="810.60564" y="785.17116">
							{" "}
							H{" "}
						</tspan>
					</text>
				</g>
			</svg>
		</Box>
	)
}
