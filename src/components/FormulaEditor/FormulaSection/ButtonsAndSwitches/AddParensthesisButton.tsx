import React from "react"

import { Button, Text } from "@chakra-ui/react"

// If no values, use this:
type AddParensthesisButtonProps = Record<string, never>
// If values, fill in the object below
//type AddParensthesisButtonProps = {}

export const AddParensthesisButton: React.FC<
	AddParensthesisButtonProps
> = () => {
	return (
		<Button
			className="AddParensthesisButton"
			w="5vw"
			h="5vh"
			fontSize={"1.5rem"}
			alignSelf={"center"}
			onClick={() => {}}
		>
			<Text>
				{"( )"}
				<sub>x</sub>
			</Text>
		</Button>
	)
}
