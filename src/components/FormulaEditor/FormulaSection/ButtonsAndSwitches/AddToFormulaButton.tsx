import React, { useState } from 'react'
import { TiChevronRightOutline } from 'react-icons/ti'

import { useMainStore } from '@/stores/MainStore'
import { Colors, dracPink, dracPurple } from '@/theme/colors/colors'
import { Box, Button, Dialog, Flex, Group, Spacer } from '@chakra-ui/react'
import { motion } from 'motion/react'

// If no values, use this:
type AddToFormulaButtonProps = Record<string, never>
// If values, fill in the object below
//type AddToFormulaButtonProps = {}

export const AddToFormulaButton: React.FC<AddToFormulaButtonProps> = () => {
	const setReactants = useMainStore((state) => state.setReactants)
	const setEditorConstructionSectionChunks = useMainStore(
		(state) => state.setEditorConstructionSectionChunks
	)
	const editorConstructionSectionChunks = useMainStore(
		(state) => state.editorConstructionSectionChunks
	)

	const setProducts = useMainStore((state) => state.setProducts)

	const formula = useMainStore((state) => state.formula)
	const countList = useMainStore((state) => state.countList)
	const setCountList = useMainStore((state) => state.setCountList)
	const addNewReactants = () => {
		let newReactants = formula.reactants
		if (newReactants.length < 1) {
			return
		}
		newReactants = [
			...newReactants,
			{
				coefficient: 1,

				formulaSection: 'REACTANTS',
				isHovered: false,
				chunks: editorConstructionSectionChunks,
			},
		]

		setReactants(newReactants)
		let newElements: ChemicalElement[] = []

		editorConstructionSectionChunks.forEach((chunk) => {
			chunk.elements.forEach((element) => {
				newElements.push(element)
			})
		})

		// Update the counts
		let newCountList = countList.map((element) => {
			let tempCountReactants

			newElements.forEach((newElement) => {
				if (newElement.symbol === element.symbol) {
					tempCountReactants = {
						symbol: newElement.symbol as ChemicalSymbol,
						reactantCount: (element.reactantCount +
							newElement.subscript.value) as number,
						productCount: element.productCount,
					}
				}
			})
			if (tempCountReactants != undefined) {
				return tempCountReactants
			} else {
				return element
			}
		})

		setCountList(newCountList)
		setEditorConstructionSectionChunks([])
	}

	const addNewProducts = () => {
		let newProducts = formula.products
		if (newProducts.length < 1) {
			return
		}
		newProducts = [
			...newProducts,
			{
				coefficient: 1,

				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: editorConstructionSectionChunks,
			},
		]

		setProducts(newProducts)
		let newElements: ChemicalElement[] = []

		editorConstructionSectionChunks.forEach((chunk) => {
			chunk.elements.forEach((element) => {
				newElements.push(element)
			})
		})

		// Update the counts
		let newCountList = countList.map((element) => {
			let tempCountProducts

			newElements.forEach((newElement) => {
				if (newElement.symbol === element.symbol) {
					tempCountProducts = {
						symbol: newElement.symbol as ChemicalSymbol,
						reactantCount: element.reactantCount,
						productCount: (element.productCount +
							newElement.subscript.value) as number,
					}
				}
			})
			if (tempCountProducts != undefined) {
				return tempCountProducts
			} else {
				return element
			}
		})

		setCountList(newCountList)
		setEditorConstructionSectionChunks([])
	}

	const [open, setOpen] = useState(false)

	const AddButton = () => {
		return (
			<Dialog.Trigger asChild>
				<Button
					h='2.5rem'
					bg='currentLine'
					color={open ? 'red' : 'foreground'}
					boxShadow={open ? `0 5px 15px ${dracPurple}` : ''}
					_hover={{
						color: 'red',
						boxShadow: `0 5px 15px ${dracPurple}`,
					}}
				>
					<TiChevronRightOutline />
				</Button>
			</Dialog.Trigger>
		)
	}

	const PopContent = () => {
		return (
			<Dialog.Content>
				<Dialog.Body bg='background.dark' borderRadius={'0.5em'}>
					<Group mt='5%' mb='auto'>
						<Button
							onClick={() => {
								addNewReactants()
							}}
							bg='currentLine'
							color={Colors.fg.DEFAULT.value}
							boxShadow={`0 5px 15px ${dracPink}`}
							dropShadow={`${Colors.purple.DEFAULT.value} 0 0 0.3vmin)`}
							_hover={{
								color: 'red',
								boxShadow: `0 5px 15px ${dracPurple}`,
							}}
							alignSelf='flex-end'
						>
							Add To Reactants
						</Button>
						<Spacer />
						<Button
							onClick={() => {
								addNewProducts()
							}}
							bg='currentLine'
							color='foreground'
							boxShadow={`0 5px 15px ${dracPink}`}
							_hover={{
								color: 'red',
								boxShadow: `0 5px 15px ${dracPurple}`,
							}}
							alignSelf='flex-end'
						>
							Add To Products
						</Button>
					</Group>
				</Dialog.Body>
			</Dialog.Content>
		)
	}

	return (
		<motion.div>
			<Box className='AddToFormulaButton'>
				<Dialog.Root
					motionPreset='slide-in-left'
					placement='center'
					open={open}
					onOpenChange={(e: any) => setOpen(e.open)}
				>
					<Flex
						direction='row'
						justifyContent='center'
						alignItems='center'
					>
						<AddButton />
						<PopContent />
					</Flex>
				</Dialog.Root>
			</Box>
		</motion.div>
	)
}
