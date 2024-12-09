import { Box, Text } from "@chakra-ui/react"
import React from "react"

type Props = {}
type ArrowProps = Props extends Record<string, never>
	? React.FC<Record<string, never>>
	: React.FC<Props>

export const Arrow: ArrowProps = () => {
	return (
		<Box className="Arrow">
			<Text
				color="drac.yellow"
				ml="1vw"
				mr="1vw"
				alignSelf="center"
				fontSize="4rem"
			>
				→
			</Text>
		</Box>
	)
}
