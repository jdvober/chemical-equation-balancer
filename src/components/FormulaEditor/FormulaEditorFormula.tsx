import React, { useState } from "react"
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

	const [col, setCol] = useState("dracula.dracFG")

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
		console.log(formula.reactants)
		let newReactants = formula.reactants.filter((_, index) => {
			return index !== reactantIndex
		})
		console.log(newReactants)
		setReactants(newReactants)
	}

	const removeProduct = (productIndex: number) => {
		let newProducts = formula.products.filter((_, index) => {
			return index !== productIndex
		})
		setProducts(newProducts)
	}

	return (
		<HStack className="FormulaEditorFormula">
			{formula.reactants.map((reactant, reactantIndex) => {
				const [hov, setHov] = useState(false)

				return (
					<GridItem key={uuid()}>
						<HStack alignItems={"center"}>
							<Tooltip label={getTooltipLabel(reactant)}>
								<Box
									className="compound-container"
									onClick={() => {
										removeReactant(formula, reactantIndex)
									}}
									onMouseEnter={() => setHov(true)}
									onMouseLeave={() => setHov(false)}
								>
									<ChemicalCompound
										compound={reactant}
										formulaSection="REACTANTS"
										index={reactantIndex}
										includeSymbols={true}
										isHovered={hov}
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
				const [hov, setHov] = useState(false)
				return (
					<GridItem key={uuid()}>
						<HStack alignItems={"center"}>
							<Tooltip label={getTooltipLabel(product)}>
								<Box
									className="compound-container"
									onClick={() => {
										removeProduct(productIndex)
									}}
									onMouseEnter={() => setHov(true)}
									onMouseLeave={() => setHov(false)}
								>
									<ChemicalCompound
										compound={product}
										formulaSection="PRODUCTS"
										index={productIndex}
										includeSymbols={true}
										isHovered={hov}
										fontSizeInVH={4}
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
