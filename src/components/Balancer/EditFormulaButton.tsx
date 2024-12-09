import { NavLinkButton } from "@/components/ui/NavLinkButton"
import { dracCurrentLine, dracFG, dracPurple } from "@/theme/colors/colors"
import { Flex, Text } from "@chakra-ui/react"
import React from "react"

type Props = {}
type EditFormulaButtonProps = Props extends Record<string, never>
	? React.FC<Record<string, never>>
	: React.FC<Props>

export const EditFormulaButton: EditFormulaButtonProps = () => {
	return (
		<NavLinkButton
			to={"/editor"}
			bg={dracCurrentLine}
			color={dracFG}
			width="7vw"
			height="5em"
			css={{ transition: "all 0.1s ease-in-out" }}
			_hover={{
				color: "drac.red",
				boxShadow: `0 5px 15px ${dracPurple}`,
			}}
			borderRadius=".5em"
		>
			<Flex dir="column" wrap="wrap" justify="center">
				<Text fontSize=".75em">Edit</Text>
				<Text fontSize=".75em">Formula</Text>
			</Flex>
		</NavLinkButton>
	)
}
