/*

Put Global Functions you want to be available everywhere in this file.

*/

// export const CalculateCountList = ( formula: ChemicalFormula, formulaSection: FormulaSection ) => {
export const CalculateCountList = (formula: ChemicalFormula) => {
	let countList = [
		{ symbol: 'H', reactantCount: 0, productCount: 0 },
		{ symbol: 'He', reactantCount: 0, productCount: 0 },
		{ symbol: 'Li', reactantCount: 0, productCount: 0 },
		{ symbol: 'Be', reactantCount: 0, productCount: 0 },
		{ symbol: 'B', reactantCount: 0, productCount: 0 },
		{ symbol: 'C', reactantCount: 0, productCount: 0 },
		{ symbol: 'N', reactantCount: 0, productCount: 0 },
		{ symbol: 'O', reactantCount: 0, productCount: 0 },
		{ symbol: 'F', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ne', reactantCount: 0, productCount: 0 },
		{ symbol: 'Na', reactantCount: 0, productCount: 0 },
		{ symbol: 'Mg', reactantCount: 0, productCount: 0 },
		{ symbol: 'Al', reactantCount: 0, productCount: 0 },
		{ symbol: 'Si', reactantCount: 0, productCount: 0 },
		{ symbol: 'P', reactantCount: 0, productCount: 0 },
		{ symbol: 'S', reactantCount: 0, productCount: 0 },
		{ symbol: 'Cl', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ar', reactantCount: 0, productCount: 0 },
		{ symbol: 'K', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ca', reactantCount: 0, productCount: 0 },
		{ symbol: 'Sc', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ti', reactantCount: 0, productCount: 0 },
		{ symbol: 'V', reactantCount: 0, productCount: 0 },
		{ symbol: 'Cr', reactantCount: 0, productCount: 0 },
		{ symbol: 'Mn', reactantCount: 0, productCount: 0 },
		{ symbol: 'Fe', reactantCount: 0, productCount: 0 },
		{ symbol: 'Co', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ni', reactantCount: 0, productCount: 0 },
		{ symbol: 'Cu', reactantCount: 0, productCount: 0 },
		{ symbol: 'Zn', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ga', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ge', reactantCount: 0, productCount: 0 },
		{ symbol: 'As', reactantCount: 0, productCount: 0 },
		{ symbol: 'Se', reactantCount: 0, productCount: 0 },
		{ symbol: 'Br', reactantCount: 0, productCount: 0 },
		{ symbol: 'Kr', reactantCount: 0, productCount: 0 },
		{ symbol: 'Rb', reactantCount: 0, productCount: 0 },
		{ symbol: 'Sr', reactantCount: 0, productCount: 0 },
		{ symbol: 'Y', reactantCount: 0, productCount: 0 },
		{ symbol: 'Zr', reactantCount: 0, productCount: 0 },
		{ symbol: 'Nb', reactantCount: 0, productCount: 0 },
		{ symbol: 'Mo', reactantCount: 0, productCount: 0 },
		{ symbol: 'Tc', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ru', reactantCount: 0, productCount: 0 },
		{ symbol: 'Rh', reactantCount: 0, productCount: 0 },
		{ symbol: 'Pd', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ag', reactantCount: 0, productCount: 0 },
		{ symbol: 'Cd', reactantCount: 0, productCount: 0 },
		{ symbol: 'In', reactantCount: 0, productCount: 0 },
		{ symbol: 'Sn', reactantCount: 0, productCount: 0 },
		{ symbol: 'Sb', reactantCount: 0, productCount: 0 },
		{ symbol: 'Te', reactantCount: 0, productCount: 0 },
		{ symbol: 'I', reactantCount: 0, productCount: 0 },
		{ symbol: 'Xe', reactantCount: 0, productCount: 0 },
		{ symbol: 'Cs', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ba', reactantCount: 0, productCount: 0 },
		{ symbol: 'Hf', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ta', reactantCount: 0, productCount: 0 },
		{ symbol: 'W', reactantCount: 0, productCount: 0 },
		{ symbol: 'Re', reactantCount: 0, productCount: 0 },
		{ symbol: 'Os', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ir', reactantCount: 0, productCount: 0 },
		{ symbol: 'Pt', reactantCount: 0, productCount: 0 },
		{ symbol: 'Au', reactantCount: 0, productCount: 0 },
		{ symbol: 'Hg', reactantCount: 0, productCount: 0 },
		{ symbol: 'Tl', reactantCount: 0, productCount: 0 },
		{ symbol: 'Pb', reactantCount: 0, productCount: 0 },
		{ symbol: 'Bi', reactantCount: 0, productCount: 0 },
		{ symbol: 'Pi', reactantCount: 0, productCount: 0 },
		{ symbol: 'At', reactantCount: 0, productCount: 0 },
		{ symbol: 'Rn', reactantCount: 0, productCount: 0 },
		{ symbol: 'Fr', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ra', reactantCount: 0, productCount: 0 },
		{ symbol: 'Rf', reactantCount: 0, productCount: 0 },
		{ symbol: 'Db', reactantCount: 0, productCount: 0 },
		{ symbol: 'Sg', reactantCount: 0, productCount: 0 },
		{ symbol: 'Bh', reactantCount: 0, productCount: 0 },
		{ symbol: 'Hs', reactantCount: 0, productCount: 0 },
		{ symbol: 'Mt', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ds', reactantCount: 0, productCount: 0 },
		{ symbol: 'Rg', reactantCount: 0, productCount: 0 },
		{ symbol: 'Cn', reactantCount: 0, productCount: 0 },
		{ symbol: 'Nh', reactantCount: 0, productCount: 0 },
		{ symbol: 'Fl', reactantCount: 0, productCount: 0 },
		{ symbol: 'Mc', reactantCount: 0, productCount: 0 },
		{ symbol: 'Lv', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ts', reactantCount: 0, productCount: 0 },
		{ symbol: 'Og', reactantCount: 0, productCount: 0 },
		{ symbol: 'La', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ce', reactantCount: 0, productCount: 0 },
		{ symbol: 'Pr', reactantCount: 0, productCount: 0 },
		{ symbol: 'Nd', reactantCount: 0, productCount: 0 },
		{ symbol: 'Pm', reactantCount: 0, productCount: 0 },
		{ symbol: 'Sm', reactantCount: 0, productCount: 0 },
		{ symbol: 'Eu', reactantCount: 0, productCount: 0 },
		{ symbol: 'Gd', reactantCount: 0, productCount: 0 },
		{ symbol: 'Tb', reactantCount: 0, productCount: 0 },
		{ symbol: 'Dy', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ho', reactantCount: 0, productCount: 0 },
		{ symbol: 'Er', reactantCount: 0, productCount: 0 },
		{ symbol: 'Tm', reactantCount: 0, productCount: 0 },
		{ symbol: 'Yb', reactantCount: 0, productCount: 0 },
		{ symbol: 'Lu', reactantCount: 0, productCount: 0 },
		{ symbol: 'Ac', reactantCount: 0, productCount: 0 },
		{ symbol: 'Th', reactantCount: 0, productCount: 0 },
		{ symbol: 'Pa', reactantCount: 0, productCount: 0 },
		{ symbol: 'U', reactantCount: 0, productCount: 0 },
		{ symbol: 'Np', reactantCount: 0, productCount: 0 },
		{ symbol: 'Pu', reactantCount: 0, productCount: 0 },
		{ symbol: 'Am', reactantCount: 0, productCount: 0 },
		{ symbol: 'Cm', reactantCount: 0, productCount: 0 },
		{ symbol: 'Bk', reactantCount: 0, productCount: 0 },
		{ symbol: 'Cf', reactantCount: 0, productCount: 0 },
		{ symbol: 'Es', reactantCount: 0, productCount: 0 },
		{ symbol: 'Fm', reactantCount: 0, productCount: 0 },
		{ symbol: 'Md', reactantCount: 0, productCount: 0 },
		{ symbol: 'No', reactantCount: 0, productCount: 0 },
		{ symbol: 'Lr', reactantCount: 0, productCount: 0 },
	]
	let newCountList = countList.map((entry) => {
		return entry
	}) as ElementCountList

	// REACTANTS
	// Go element by element in the list and calculate how many exist in the formula.
	countList.forEach((countListElement, i) => {
		let numOfElementPresentReactants = 0
		let numOfElementPresentProducts = 0

		formula.reactants.forEach((reactant) => {
			reactant.chunks.forEach((chunk) => {
				chunk.elements.forEach((reactantElement) => {
					if (reactantElement.symbol === countListElement.symbol) {
						numOfElementPresentReactants +=
							reactantElement.subscript.value *
							reactant.coefficient
					}
				})
			})
		})

		formula.products.forEach((product) => {
			product.chunks.forEach((chunk) => {
				chunk.elements.forEach((productElement) => {
					if (productElement.symbol === countListElement.symbol) {
						numOfElementPresentProducts +=
							productElement.subscript.value * product.coefficient
					}
				})
			})
		})

		newCountList[i] = {
			symbol: countListElement.symbol as ChemicalSymbol,
			reactantCount: numOfElementPresentReactants,
			productCount: numOfElementPresentProducts,
		}
	})

	return newCountList
}

export const formulaToString = (formula: ChemicalFormula) => {
	let formulaStr = ''
	// Reactants
	formula.reactants.forEach((reactant, i) => {
		reactant.chunks.forEach((chunk) => {
			// Open Parens
			if (chunk.parenthesesSubscript >= 2) {
				formulaStr += '('
			}

			chunk.elements.forEach((element) => {
				let tempStr = ''
				tempStr += element.symbol
				// Add subscripts
				if (element.subscript.value >= 2) {
					tempStr += element.subscript.value.toString()
				}

				// Add to formula
				formulaStr += tempStr
			})

			// Close Parens
			if (chunk.parenthesesSubscript >= 2) {
				formulaStr += ')'
				formulaStr += chunk.parenthesesSubscript
			}
		})

		// Plus

		if (i < formula.reactants.length - 1) {
			formulaStr += ' + '
		}
	})

	// Arrow

	formulaStr += ' --> '

	// Products
	formula.products.forEach((product, i) => {
		product.chunks.forEach((chunk) => {
			// Open Parens
			if (chunk.parenthesesSubscript >= 2) {
				formulaStr += '('
			}
			chunk.elements.forEach((element) => {
				let tempStr = ''
				tempStr += element.symbol

				// Add subscripts
				if (element.subscript.value >= 2) {
					tempStr += element.subscript.value.toString()
				}

				// Add to formula
				formulaStr += tempStr
			})

			// Close Parens
			if (chunk.parenthesesSubscript >= 2) {
				formulaStr += ')'
				formulaStr += chunk.parenthesesSubscript
			}
		})

		// Plus

		if (i < formula.products.length - 1) {
			formulaStr += ' + '
		}
	})
	return formulaStr
}
