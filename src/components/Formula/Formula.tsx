import React from "react"
import { v4 as uuid } from "uuid"

import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react"

import { useMainStore } from "../../stores/MainStore.ts"
import { ChemicalCompound } from "./ChemicalCompound/ChemicalCompound.tsx"
import { Coefficient } from "./Coefficient/Coefficient"

// If no values, use this:
type FormulaProps = Record<string, never>
// If values, fill in the object below
// type FormulaProps = {}

export const Formula: React.FC<FormulaProps> = () => {
	const formula = useMainStore((state) => state.formula)
	const formulaHeightVH = useMainStore((state) => state.formulaHeightVH)

	return (
		<Flex
			w="90vw"
			border={`1px solid #44475a`}
			borderRadius={"1vw"}
			h={"25vh"}
			overflowX={"scroll"}
			m="1vh"
			alignItems="center"
		>
			<Spacer />
			<Spacer />
			{formula.reactants.map((reactant, reactantIndex) => (
				<Box
					w="auto"
					h={`${formulaHeightVH}vh`}
					key={uuid()}
					alignSelf="center"
				>
					<HStack alignItems={"center"}>
						<Box
							className={`coefficient-reactants-${reactantIndex}-container`}
						>
							<Coefficient
								index={reactantIndex}
								formulaSection="REACTANTS"
							/>
						</Box>
						<Box alignItems="center" alignSelf="center">
							<ChemicalCompound
								compound={reactant}
								formulaSection="REACTANTS"
								index={reactantIndex}
								includeSymbols={true}
							/>
						</Box>
					</HStack>
				</Box>
			))}
			<Text
				color="dracula.dracYellow"
				ml="1vw"
				mr="1vw"
				alignSelf="center"
			>
				→
			</Text>

			{formula.products.map((product, productIndex) => (
				<Box w="auto" h={`${formulaHeightVH}vh`} key={uuid()}>
					<HStack>
						<Box
							className={`coefficient-products-${productIndex}-container`}
						>
							<Coefficient
								index={productIndex}
								formulaSection="PRODUCTS"
								key={uuid()}
							/>
						</Box>
						<Box
							className={`chemicalCompound-products-${productIndex}-container`}
							justifyItems="center"
						>
							<ChemicalCompound
								compound={product}
								formulaSection="PRODUCTS"
								index={productIndex}
								includeSymbols={true}
							/>
						</Box>
					</HStack>
				</Box>
			))}
			<Spacer />
			<Spacer />
		</Flex>
	)
}
