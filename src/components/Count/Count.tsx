import React from "react"

import { HStack, Text } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"
import { ProductCount } from "./ProductCount"
import { ReactantCount } from "./ReactantCount"

// If no values, use this:
type CountProps = Record<string, never>
// If values, fill in the object below
//type CountProps = {}

export const Count: React.FC<CountProps> = () => {
	return (
		<HStack
			className="Count-container"
			border={`1px solid #44475a`}
			w="33vw"
			h="auto">
			<ReactantCount />
			<ProductCount />
		</HStack>
	)
}
