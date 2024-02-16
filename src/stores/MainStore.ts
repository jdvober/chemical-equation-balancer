import { create } from "zustand"
// import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

type State = {
	formula: {
		reactants: ChemicalReactant[],
		products: ChemicalProduct[]
	},
	formulaHeightVH: number,
	reactantCountList: {
		symbol: string
		count: number
	}[],
	productCountList: {
		symbol: string
		count: number
	}[],
}

type Action = {

	updateCoefficient: ( formulaSection: FormulaSection, index: number, newCoefficient: number ) => void,
	updateCountList: ( newCountList: ElementCountList, formulaSection: FormulaSection ) => void,
}

export const useMainStore = create<State & Action>()(
	// persist(
	immer( ( set ) => ( {
		///////////
		// State //
		///////////
		formula: {
			reactants: [ {
				coefficient: 1,
				elements: [
					{

						index: 0,
						symbol: "H",
						subscript: 2
					}
				],
				formulaSection: "REACTANTS",
			},
			{
				coefficient: 1,
				elements: [
					{
						index: 0,
						symbol: "O",
						subscript: 2
					}
				],
				formulaSection: "REACTANTS",
			} ],
			products: [

				{
					coefficient: 1,
					elements: [
						{
							index: 0,
							symbol: "H",
							subscript: 2
						},
						{
							index: 1,
							symbol: "O",
							subscript: 1
						}
					],
					formulaSection: "PRODUCTS",
				}
			]
		},
		formulaHeightVH: 20,
		reactantCountList: [ {
			symbol: "H",
			count: 2
		}, {
			symbol: "O",
			count: 2
		} ],
		productCountList: [ {
			symbol: "H",
			count: 2
		}, {
			symbol: "O",
			count: 1
		} ],

		/////////////
		// Actions //
		/////////////
		updateCountList: ( newCountList, formulaSection ) => set( ( state ) => {
			console.log( `Updating Reactant Count to ${ newCountList }` )
			formulaSection === "REACTANTS" ? state.reactantCountList = newCountList : state.productCountList = newCountList
		} ),

		updateCoefficient: ( formulaSection, index, newCoefficient ) => set( ( state ) => {
			// Check to make sure we have an integer
			if ( !Number.isInteger( newCoefficient ) ) { return }

			// Update the coefficient
			if ( formulaSection === "REACTANTS" ) {
				state.formula.reactants[ index ].coefficient = newCoefficient
				console.log( `Updating Coefficient ${ index } of Reactants to ${ newCoefficient }` )

			} else if ( formulaSection === "PRODUCTS" ) {

				console.log( `Updating Coefficient ${ index } of Products to ${ newCoefficient }` )
				state.formula.products[ index ].coefficient = newCoefficient
			}
		} )

	}
	) ),
	// {
	// 	// Use Local Storage
	// 	name: "main-storage",
	// 	getStorage: () => sessionStorage,
	// } )

)


// ₀₁₂₃₄₅₆₇₈₉→

// 2H₂ + 1O₂ → 2H₂O

/*
Schema

{
	reactants:[
			{
				coefficient: 2,
				elements:[
					{
						symbol: H,
						subscript: 2
					}
				]
			},
						{
				coefficient: 1,
				elements:[
					{
						symbol: O,
						subscript: 2
					}
				]
			}
		]
	products:
			{
				coefficient: 2,
				elements:[
					{
						symbol: "H",
						subscript: 2
					},
					{
						symbol: "O",
						subscript: 1
					}
				]
			}

}


*/
