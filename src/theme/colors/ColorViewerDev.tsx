import { Box, Center, ColorSwatch, Flex, Group, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Swatches } from './colors.ts'

type Props = {}
type ColorViewerDevProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const ColorViewerDev: ColorViewerDevProps = () => {
	const [colorInfo, setColorInfo] = useState(['', '', ''])

	const normalSwatches = Swatches.filter((swatch) => {
		return !swatch.name.includes('Dracula')
	})

	const dracSwatches = Swatches.filter((swatch) => {
		return swatch.name.includes('Dracula')
	})

	return (
		<Center w='100svw' h='100svh'>
			<Flex
				direction='column'
				width='100%'
				p='5%'
				justifyContent={'space-between'}
			>
				<Center w='100%' h='2em' color='white'>
					{colorInfo[0]}
					{colorInfo[0] === '' ? '' : ' '}
					{colorInfo[0] != colorInfo[1] ? colorInfo[1] : ''}
					{colorInfo[0] === '' ? '' : ' - '}
					{colorInfo[2]}
				</Center>
				<Center flexGrow={1} alignItems='flex-start'>
					<HStack>
						<Box>
							{normalSwatches.map((swatch) => {
								return (
									<Group
										attached
										width='20vw'
										maxW='20vw'
										grow
										m='2vh'
										key={uuid()}
									>
										{swatch.colors.map((color) => {
											return (
												<ColorSwatch
													key={uuid()}
													value={color.value}
													onMouseEnter={() => {
														setColorInfo([
															color.name,
															swatch.name,
															color.value,
														])
													}}
													onMouseLeave={() => {
														setColorInfo([
															'',
															'',
															'',
														])
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

						<Box>
							{dracSwatches.map((swatch) => {
								return (
									<Group
										attached
										width='20vw'
										maxW='20vw'
										grow
										m='2vh'
										key={uuid()}
									>
										{swatch.colors.map((color) => {
											return (
												<ColorSwatch
													key={uuid()}
													value={color.value}
													onMouseOver={() => {
														setColorInfo([
															color.name,
															swatch.name.startsWith(
																'Dracula'
															)
																? swatch.name.slice(
																		8
																	)
																: swatch.name,
															color.value,
														])
													}}
													onMouseLeave={() => {
														setColorInfo([
															'',
															'',
															'',
														])
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
					</HStack>
				</Center>
			</Flex>
		</Center>
	)
}
