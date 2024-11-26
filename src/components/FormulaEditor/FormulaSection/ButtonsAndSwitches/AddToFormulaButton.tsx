import React from "react"
import { TiChevronRightOutline } from "react-icons/ti"

import { useMainStore } from "@/stores/MainStore"
import { Box, Button } from "@chakra-ui/react"

// If no values, use this:
type AddToFormulaButtonProps = Record<string, never>
// If values, fill in the object below
//type AddToFormulaButtonProps = {}

export const AddToFormulaButton: React.FC<AddToFormulaButtonProps> = () => {
	const editFormulaSection = useMainStore((state) => state.editFormulaSection)
	const setReactants = useMainStore((state) => state.setReactants)
	const setEditorChemicalSectionItems = useMainStore(
		(state) => state.setEditorChemicalSectionChunks
	)
	const editorChemicalSectionItems = useMainStore(
		(state) => state.editorChemicalSectionChunks
	)

	const setProducts = useMainStore((state) => state.setProducts)

	const formula = useMainStore((state) => state.formula)
	const countList = useMainStore((state) => state.countList)
	const setCountList = useMainStore((state) => state.setCountList)
	const addNewReactants = () => {
		let newReactants = formula.reactants
		const elements = editorChemicalSectionItems.map((item) => {
			return {
				index: item.index,
				subscript: item.subscript,
				symbol: item.symbol,
			}
		})
		newReactants = [
			...newReactants,
			{
				coefficient: 1,

				formulaSection: "REACTANTS",
				isHovered: false,
				chunks: [
					{
						parenthesesSubscript: 3,
						elements: elements as ChemicalElement[],
					},
				],
			},
		]

		setReactants(newReactants)
		let newElements = elements.map((element) => {
			return {
				symbol: element.symbol,
				count: element.subscript,
			}
		})

		// Update the counts
		let newCountList = countList.map((element) => {
			let tempCountReactants

			newElements.forEach((newElement) => {
				if (newElement.symbol === element.symbol) {
					tempCountReactants = {
						symbol: newElement.symbol as ChemicalSymbol,
						reactantCount: (element.reactantCount +
							newElement.count) as number,
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
		setEditorChemicalSectionItems([])
	}

	const addNewProducts = () => {
		let newProducts = formula.products
		const elements = editorChemicalSectionItems.map((item) => {
			return {
				eID: item.eID,
				index: item.index,
				symbol: item.symbol,
				subscript: item.subscript,
			} as ChemicalElement
		})
		newProducts = [
			...newProducts,
			{
				coefficient: 1,
				formulaSection: "PRODUCTS",
				isHovered: false,
				chunks: [
					{
						parenthesesSubscript: 2,
						elements: elements as ChemicalElement[],
					},
				],
			},
		]

		setProducts(newProducts)

		let newElements = elements.map((element) => {
			return {
				symbol: element.symbol,
				count: element.subscript,
			}
		})

		// Update the counts
		let newCountList = countList.map((element) => {
			let tempCountProducts

			newElements.forEach((newElement) => {
				if (newElement.symbol === element.symbol) {
					tempCountProducts = {
						symbol: newElement.symbol as ChemicalSymbol,
						reactantCount: element.productCount,
						productCount: (element.productCount +
							newElement.count) as number,
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
		setEditorChemicalSectionItems([])
	}
	return (
		<Box className="AddToFormulaButton">
			<Button
				fontSize={"2rem"}
				w="5vw"
				h="5vh"
				onClick={() => {
					editFormulaSection === "REACTANTS"
						? addNewReactants()
						: addNewProducts()
				}}
			>
				<TiChevronRightOutline />
			</Button>
		</Box>
	)
}
