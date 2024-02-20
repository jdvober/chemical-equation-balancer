import React from "react"
import { ReactSVG } from "react-svg"

import { Box } from "@chakra-ui/react"

type AtomSVGProps = Record<string, never>
export const AtomSVG: React.FC<AtomSVGProps> = () => {
	// const dieWidthInVH: string = "8vh"
	// 	const dieHeightInVH: string = "8vh"

	return (
		<Box margin="0.25vw">
			<Box margin="0.25vw">
				<ReactSVG src="/public/atom.svg" r={"20px"} />
			</Box>
		</Box>
	)
}
