import React from "react"

import { Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
//@ts-ignore
import { Colors } from "../../theme/colors/colors"

// If no values, use this:
type EditorCloseButtonProps = Record<string, never>
// If values, fill in the object below
//type EditorCloseButtonProps = {}

export const EditorCloseButton: React.FC<EditorCloseButtonProps> = () => {
	return (
		<Box className="EditorCloseButton">
			<Link to={`/`}>
				<Box
					border={`2px solid`}
					borderColor={Colors.dracula.dracCyan}
					fontSize={"2xl"}
					pl="1vw"
					pr="1vw"
					pt="1vh"
					pb="1vh"
					borderRadius={"xl"}
				>
					X
				</Box>
			</Link>
		</Box>
	)
}
