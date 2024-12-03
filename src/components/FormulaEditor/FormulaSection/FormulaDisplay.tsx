import React from "react"
import { v4 as uuid } from "uuid"

import { Box, GridItem, HStack, Text } from "@chakra-ui/react"

import { CalculateCountList } from "../../../functions/GlobalFunctions"
import { useMainStore } from "../../../stores/MainStore"
import { ChemicalCompound } from "../../Formula/ChemicalCompound/ChemicalCompound"

// If no values, use this:
type FormulaDisplayProps = Record<string, never>
// If values, fill in the object below
//type FormulaProps = {}

export const FormulaDisplay: React.FC<FormulaDisplayProps> = () => {
	const formula = useMainStore((state) => state.formula)
	const setReactants = useMainStore((state) => state.setReactants)
	const setProducts = useMainStore((state) => state.setProducts)
	const setHoverStatus = useMainStore((state) => state.setHoverStatus)
	const setCountList = useMainStore((state) => state.setCountList)

	const removeReactant = (
		formula: ChemicalFormula,
		reactantIndex: number
	) => {
		let newReactants = formula.reactants.filter((_, index) => {
			return index !== reactantIndex
		})

		setCountList(
			CalculateCountList({
				reactants: newReactants,
				products: formula.products,
			})
		)
		setReactants(newReactants)
	}

	const removeProduct = (productIndex: number) => {
		let newProducts = formula.products.filter((_, index) => {
			return index !== productIndex
		})

		setCountList(CalculateCountList(formula))

		setProducts(newProducts)
	}

	return (
		<HStack pt="1vh" pb="1vh" alignSelf={"center"} ml="2vw">
			{formula.reactants.map((reactant, reactantIndex) => {
				return (
					<GridItem key={uuid()}>
						<HStack alignItems={"center"} key={uuid()}>
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
								/>
							</Box>
						</HStack>
					</GridItem>
				)
			})}
			<Text color="yellow" mr="1vw" fontSize={"4vh"}>
				→
			</Text>

			{formula.products.map((product, productIndex) => {
				return (
					<GridItem key={uuid()}>
						<HStack alignItems={"center"} key={uuid()}>
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
									key={uuid()}
								/>
							</Box>
						</HStack>
					</GridItem>
				)
			})}
		</HStack>
	)
}
