/*

Put Global Functions you want to be available everywhere in this file.

*/

export const CalculateCountList = ( formula: ChemicalFormula, formulaSection: FormulaSection ) => {

	console.log( formula )
	const allSymbols: string[] = []
	const symbols: string[] = []
	if ( formulaSection == "REACTANTS" ) {

		formula.reactants.forEach( ( reactant ) => {
			reactant.elements.forEach( ( element ) => {
				if ( !symbols.includes( element.symbol ) ) {
					symbols.push( element.symbol )
				}
				for ( let c = 0; c < reactant.coefficient; c++ ) {
					for ( let s = 0; s < element.subscript; s++ ) {
						allSymbols.push( element.symbol )
					}
				}
			} )
		} )
		console.log( symbols, allSymbols )

	} else if ( formulaSection == "PRODUCTS" ) {
		formula.products.forEach( ( product ) => {
			product.elements.forEach( ( element ) => {
				if ( !symbols.includes( element.symbol ) ) {
					symbols.push( element.symbol )
				}
				for ( let c = 0; c < product.coefficient; c++ ) {
					for ( let s = 0; s < element.subscript; s++ ) {
						allSymbols.push( element.symbol )
					}
				}
			} )
		} )
	}

	// const elementCountList: ElementCountList = []

	const elementCountList: ElementCountList = symbols.map( ( symbol, i ) => {
		return {
			symbol: symbol,
			count: allSymbols.filter( ( x ) => x === symbol ).length
		}
	} )
	// for ( let i = 0; i < elementCountList.length; i++ ) {
	// 	elementCountList.push( {
	// 		elementListIndex: i,
	// 		symbol: elementCountList[ i ].symbol,
	// 		count: allSymbols.filter( ( e ) => e == elementCountList[ i ].symbol ).length,
	// 	} )
	// }
	console.log( elementCountList )
	return elementCountList
}
