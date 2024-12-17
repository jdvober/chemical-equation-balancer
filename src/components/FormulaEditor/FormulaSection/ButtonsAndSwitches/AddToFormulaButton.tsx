import React, { useState } from 'react'
import { TiChevronRightOutline } from 'react-icons/ti'

import { useMainStore } from '@/stores/MainStore'
import { Box, Button } from '@chakra-ui/react'
import { motion } from 'motion/react'

// If no values, use this:
type AddToFormulaButtonProps = Record<string, never>
// If values, fill in the object below
//type AddToFormulaButtonProps = {}

export const AddToFormulaButton: React.FC<AddToFormulaButtonProps> = () => {
	const editFormulaSection = useMainStore((state) => state.editFormulaSection)
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

	const [hovered, setHovered] = useState(false)

	return (
		<motion.div
			onHoverStart={() => {
				setHovered(true)
			}}
			onHoverEnd={() => {
				setHovered(false)
			}}
			whileHover={{ scale: 1.2 }}
		>
			<Box className="AddToFormulaButton">
				<Button
					h="2.5rem"
					onClick={() => {
						editFormulaSection === 'REACTANTS'
							? addNewReactants()
							: addNewProducts()
					}}
					bg="currentLine"
					color={hovered ? 'red' : 'fg'}
					boxShadow={hovered ? `0 5px 15px purple` : ''}
				>
					<TiChevronRightOutline />
				</Button>
			</Box>
		</motion.div>
	)
}
