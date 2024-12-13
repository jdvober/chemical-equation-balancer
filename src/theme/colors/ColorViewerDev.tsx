import React, { useState } from 'react'
import { Swatches } from '../theme.ts'
import {
	Box,
	Center,
	ColorSwatch,
	Flex,
	Grid,
	GridItem,
	Group,
	HStack,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverRoot,
	PopoverTrigger,
	Text,
} from '@chakra-ui/react'

type Props = {}
type ColorViewerDevProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const ColorViewerDev: ColorViewerDevProps = () => {
	const [colorInfo, setColorInfo] = useState(['', '', ''])

	return (
		<Center w="100vw" h="100vh">
			<Flex direction="row" width="100%" p="5%">
				<Center w="15vw">
					{colorInfo[0]}
					{colorInfo[0] === '' ? '' : ' '}
					{colorInfo[0] != colorInfo[1] ? colorInfo[1] : ''}
					{colorInfo[0] === '' ? '' : ' - '}
					{colorInfo[2]}
				</Center>
				<Center flexGrow={1}>
					<Box className="ColorViewerDev">
						{Swatches.map((swatch) => {
							return (
								<Group
									attached
									width="20vw"
									maxW="20vw"
									grow
									m="2vh"
								>
									{swatch.colors.map((color) => {
										return (
											<ColorSwatch
												value={color.value}
												onMouseOver={() => {
													setColorInfo([
														color.name,
														swatch.name,
														color.value,
													])
												}}
												onMouseLeave={() => {
													setColorInfo(['', '', ''])
												}}
												onClick={() => {
													window.navigator.clipboard.writeText(
														color.value
													)
												}}
											/>
										)
									})}
								</Group>
							)
						})}
					</Box>
				</Center>
			</Flex>
		</Center>
	)
}
