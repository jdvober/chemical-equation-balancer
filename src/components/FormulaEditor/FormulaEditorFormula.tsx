import React from "react"
import { v4 as uuid } from "uuid"

import { Box, GridItem, HStack, Text, Tooltip } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore"
import { ChemicalCompound } from "../Formula/ChemicalCompound/ChemicalCompound"

// If no values, use this:
type FormulaEditorFormulaProps = Record<string, never>
// If values, fill in the object below
//type FormulaProps = {}

export const FormulaEditorFormula: React.FC<FormulaEditorFormulaProps> = () => {
	const formula = useMainStore((state) => state.formula)
	const setReactants = useMainStore((state) => state.setReactants)
	const setProducts = useMainStore((state) => state.setProducts)
	const setHoverStatus = useMainStore((state) => state.setHoverStatus)
	const setCountList = useMainStore((state) => state.setCountList)
	const productCountList = useMainStore((state) => state.reactantCountList)

	const getTooltipLabel = (compound: ChemicalCompound) => {
		return (
			<HStack>
				<Text>Click To Delete</Text>
				{compound.elements.map((elem) => {
					return (
						<Text key={uuid()}>
							{elem.symbol}
							<sub>
								{elem.subscript >= 2 ? elem.subscript : ""}
							</sub>
						</Text>
					)
				})}
			</HStack>
		)
	}

	const removeReactant = (
		formula: ChemicalFormula,
		reactantIndex: number
	) => {
		let newReactants = formula.reactants.filter((_, index) => {
			return index !== reactantIndex
		})

		// Update the counts
		let newElements = formula.reactants[reactantIndex].elements
		let newCountList = productCountList.map((reactantCount) => {
			let tempCount
			newElements.forEach((newElement) => {
				if (newElement.symbol === reactantCount.symbol) {
					tempCount = {
						symbol: newElement.symbol as ChemicalSymbol,
						count: (reactantCount.count -
							newElement.subscript *
								formula.reactants[reactantIndex]
									.coefficient) as number,
					}
				}
			})
			if (tempCount != undefined) {
				return tempCount
			} else {
				return reactantCount
			}
		})

		setCountList(newCountList, "REACTANTS")
		setReactants(newReactants)
	}

	const removeProduct = (productIndex: number) => {
		let newProducts = formula.products.filter((_, index) => {
			return index !== productIndex
		})
		setProducts(newProducts)
		//
		// Update the counts
		let newElements = formula.products[productIndex].elements
		let newCountList = productCountList.map((productCount) => {
			let tempCount
			newElements.forEach((newElement) => {
				if (newElement.symbol === productCount.symbol) {
					tempCount = {
						symbol: newElement.symbol as ChemicalSymbol,
						count: (productCount.count -
							newElement.subscript *
								formula.reactants[productIndex]
									.coefficient) as number,
					}
				}
			})
			if (tempCount != undefined) {
				return tempCount
			} else {
				return productCount
			}
		})

		setCountList(newCountList, "PRODUCTS")
		setReactants(newProducts)
	}

	return (
		<HStack className="FormulaEditorFormula">
			{formula.reactants.map((reactant, reactantIndex) => {
				return (
					<GridItem key={uuid()}>
						<HStack alignItems={"center"} key={uuid()}>
							<Tooltip
								label={getTooltipLabel(reactant)}
								key={uuid()}
							>
								<Box
									key={uuid()}
									className="compound-container"
									onClick={() => {
										removeReactant(formula, reactantIndex)
									}}
									onMouseEnter={() =>
										setHoverStatus(
											"REACTANTS",
											reactantIndex,
											true
										)
									}
									onMouseLeave={() =>
										setHoverStatus(
											"REACTANTS",
											reactantIndex,
											false
										)
									}
								>
									<ChemicalCompound
										key={uuid()}
										compound={reactant}
										formulaSection="REACTANTS"
										index={reactantIndex}
										includeSymbols={true}
										isHovered={
											formula.reactants[reactantIndex]
												.isHovered
										}
										fontSizeInVH={4}
									/>
								</Box>
							</Tooltip>
						</HStack>
					</GridItem>
				)
			})}
			<Text color="dracula.dracYellow" mr="1vw" fontSize={"4vh"}>
				→
			</Text>

			{formula.products.map((product, productIndex) => {
				// const [hov, setHov] = useState(false)
				return (
					<GridItem key={uuid()}>
						<HStack alignItems={"center"} key={uuid()}>
							<Tooltip
								label={getTooltipLabel(product)}
								key={uuid()}
							>
								<Box
									className="compound-container"
									onClick={() => {
										removeProduct(productIndex)
									}}
									onMouseEnter={() =>
										setHoverStatus(
											"PRODUCTS",
											productIndex,
											true
										)
									}
									onMouseLeave={() =>
										setHoverStatus(
											"PRODUCTS",
											productIndex,
											false
										)
									}
									key={uuid()}
								>
									<ChemicalCompound
										compound={product}
										formulaSection="PRODUCTS"
										index={productIndex}
										includeSymbols={true}
										isHovered={
											formula.products[productIndex]
												.isHovered
										}
										fontSizeInVH={4}
										key={uuid()}
									/>
								</Box>
							</Tooltip>
						</HStack>
					</GridItem>
				)
			})}
		</HStack>
	)
}
