/*

Put Global Functions you want to be available everywhere in this file.

*/

// export const CalculateCountList = ( formula: ChemicalFormula, formulaSection: FormulaSection ) => {
export const CalculateCountList = ( formula: ChemicalFormula, countList: {
	symbol: ChemicalSymbol
	count: number
}[], formulaSection: FormulaSection ) => {

	let newCountList = countList.map( ( entry ) => {
		return entry
	} )
	if ( formulaSection === "REACTANTS" ) {

		// Go element by element in the list and calculate how many exist in the formula.
		countList.forEach( ( countListElement, i ) => {
			let numOfElementPresent = 0
			formula.reactants.forEach( ( reactant ) => {
				reactant.elements.forEach( ( reactantElement ) => {
					if ( reactantElement.symbol === countListElement.symbol ) {
						console.log( `coefficient: ${ reactant.coefficient }` )
						numOfElementPresent += reactantElement.subscript * reactant.coefficient
					}
				} )
			} )

			newCountList[ i ] = {
				symbol: countListElement.symbol,
				count: numOfElementPresent
			}
		} )
		return newCountList
	} else {
		// Go element by element in the list and calculate how many exist in the formula.
		countList.forEach( ( countListElement, i ) => {
			let numOfElementPresent = 0
			formula.products.forEach( ( product ) => {
				product.elements.forEach( ( productElement ) => {
					if ( productElement.symbol === countListElement.symbol ) {
						numOfElementPresent += productElement.subscript * product.coefficient
					}
				} )
			} )

			newCountList[ i ] = {
				symbol: countListElement.symbol,
				count: numOfElementPresent
			}
		} )
		return newCountList

	}





	// console.log( formula )
	// const allSymbols: string[] = []
	// const symbols: string[] = []
	// if ( formulaSection == "REACTANTS" ) {

	// 	formula.reactants.forEach( ( reactant ) => {
	// 		reactant.elements.forEach( ( element ) => {
	// 			if ( !symbols.includes( element.symbol ) ) {
	// 				symbols.push( element.symbol )
	// 			}
	// 			for ( let c = 0; c < reactant.coefficient; c++ ) {
	// 				for ( let s = 0; s < element.subscript; s++ ) {
	// 					allSymbols.push( element.symbol )
	// 				}
	// 			}
	// 		} )
	// 	} )
	// 	console.log( symbols, allSymbols )

	// } else if ( formulaSection == "PRODUCTS" ) {
	// 	formula.products.forEach( ( product ) => {
	// 		product.elements.forEach( ( element ) => {
	// 			if ( !symbols.includes( element.symbol ) ) {
	// 				symbols.push( element.symbol )
	// 			}
	// 			for ( let c = 0; c < product.coefficient; c++ ) {
	// 				for ( let s = 0; s < element.subscript; s++ ) {
	// 					allSymbols.push( element.symbol )
	// 				}
	// 			}
	// 		} )
	// 	} )
	// }

	// // const elementCountList: ElementCountList = []

	// const elementCountList: ElementCountList = symbols.map( ( symbol, i ) => {
	// 	return {
	// 		symbol: symbol,
	// 		count: allSymbols.filter( ( x ) => x === symbol ).length
	// 	}
	// } )
	// // for ( let i = 0; i < elementCountList.length; i++ ) {
	// // 	elementCountList.push( {
	// // 		elementListIndex: i,
	// // 		symbol: elementCountList[ i ].symbol,
	// // 		count: allSymbols.filter( ( e ) => e == elementCountList[ i ].symbol ).length,
	// // 	} )
	// // }
	// console.log( elementCountList )
	// return elementCountList
}
