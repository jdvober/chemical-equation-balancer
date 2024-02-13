/*

Put Global Functions you want to be available everywhere in this file.

*/
import { useMainStore } from "../stores/MainStore.ts"

const formula = useMainStore( ( state ) => state.formula )

export const calculateCountList = ( formulaSection: FormulaSection ) => {

	const allSymbols: string[] = []
	const symbols: string[] = []
	if ( formulaSection == "Reactants" ) {

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

	} else if ( formulaSection == "Products" ) {
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

	const elements: {
		elementListIndex: number
		symbol: string
		count: number
	}[] = []
	for ( let i = 0; i < elements.length; i++ ) {
		elements.push( {
			elementListIndex: i,
			symbol: elements[ i ].symbol,
			count: allSymbols.filter( ( e ) => e == elements[ i ].symbol ).length,
		} )
	}
	return elements
}
