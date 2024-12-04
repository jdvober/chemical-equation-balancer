import { toPx } from "@/functions/toPx"
import { Box, Center } from "@chakra-ui/react"
import React from "react"
import { NavLink } from "react-router-dom"

type Props = {
	to: string // A string with the React Router Route
	children?: React.ReactNode // The stuff inside the tag
	// Define arbitrary props
	[key: string]: any
}
type NavLinkButtonProps = Props extends Record<string, never>
	? React.FC<Record<string, never>>
	: React.FC<Props>

export const NavLinkButton: NavLinkButtonProps = ({
	to,
	children,
	...rest
}) => {
	return (
		<NavLink className="NavButton" to={to}>
			<Box borderRadius={toPx(rest.width, "width") / 6} {...rest}>
				<Center w="100%" h="100%" fontSize="3xl">
					{children}
				</Center>
			</Box>
		</NavLink>
	)
}
