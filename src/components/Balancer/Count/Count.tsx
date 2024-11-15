import React from "react"

import { HStack } from "@chakra-ui/react"

import { ProductCount } from "./ProductCount"
import { ReactantCount } from "./ReactantCount"

// If no values, use this:
type CountProps = Record<string, never>
// If values, fill in the object below
//type CountProps = {}

export const Count: React.FC<CountProps> = () => {
	const showBorders = false as boolean
	return (
		<HStack
			className="Count-container"
			border={showBorders === true ? "1px solid #44475a" : ""}
			w="33vw"
			h="auto"
		>
			<ReactantCount />
			<ProductCount />
		</HStack>
	)
}
