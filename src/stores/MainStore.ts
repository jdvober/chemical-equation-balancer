import { create } from "zustand"

// import { persist } from "zustand/middleware"


interface State {
	formula: {
		reactants: ChemicalReactant[],
		products: ChemicalProduct[]
	},
	updateCoefficient: ( isReactant: boolean, index: number, newCoefficient: number ) => void,
	formulaHeight: string
}

export const useMainStore = create<State>()(
	/* persist(*/
	( set ) => ( {
		formula: {
			reactants: [ {
				coefficient: 2,
				elements: [
					{

						symbol: "H",
						subscript: 2
					}
				],
				isReactant: true
			},
			{
				coefficient: 1,
				elements: [
					{
						symbol: "O",
						subscript: 2
					}
				],
				isReactant: true
			} ],
			products: [

				{
					coefficient: 2,
					elements: [
						{
							symbol: "H",
							subscript: 2
						},
						{
							symbol: "O",
							subscript: 1
						}
					],
					isReactant: false
				}
			]


		},
		updateCoefficient: ( isReactant, index, newCoefficient ) => set( ( state ) => {
			// Exit early to prevent negative coefficients
			if ( newCoefficient <= 1 ) { return state }
			// Check to make sure we have an integer
			if ( !Number.isInteger( newCoefficient ) ) { return state }

			if ( isReactant === true ) {
				state.formula.reactants[ index ].coefficient = newCoefficient
				return state
			}

			state.formula.products[ index ].coefficient = newCoefficient

			return state
		} )
		,

		formulaHeight: "3em"
	} ) )

/*
If you would like to use localstorage or sessionstorage, uncomment the commented "persist" sections and see zustand documentation
*/

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
