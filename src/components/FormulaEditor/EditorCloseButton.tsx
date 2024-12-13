import React from 'react'

//@ts-ignore
import { NavLinkButton } from '@/components/ui/NavLinkButton'
import { dracCurrentLine, dracFG } from '@/theme/colors/colors'
import { Flex } from '@chakra-ui/react'
import { TiTimesOutline } from 'react-icons/ti'

// If no values, use this:
type EditorCloseButtonProps = Record<string, never>
// If values, fill in the object below
//type EditorCloseButtonProps = {}

export const EditorCloseButton: React.FC<EditorCloseButtonProps> = () => {
	return (
		<NavLinkButton
			to={'/balancer'}
			bg={dracCurrentLine}
			color={dracFG}
			width="2rem"
			height="2rem"
			css={{ transition: 'all 0.1s ease-in-out' }}
			_hover={{
				color: 'red',
				boxShadow: `0 5px 15px purple`,
			}}
			borderRadius=".5rem"
			justifySelf="flex-end"
			ml="1rem"
			mr="1rem"
		>
			<Flex dir="column" wrap="wrap" justify="center">
				<TiTimesOutline />
			</Flex>
		</NavLinkButton>
	)
}
