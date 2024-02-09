import { create } from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

type State = {
	formula: {
		reactants: ChemicalReactant[],
		products: ChemicalProduct[]
	},
	formulaHeightVH: number
}

type Action = {

	updateCoefficient: ( formulaSection: "Reactants" | "Products", index: number, newCoefficient: number ) => void,
}

export const useMainStore = create<State & Action>()(
	persist(
		immer( ( set ) => ( {
			///////////
			// State //
			///////////
			formula: {
				reactants: [ {
					coefficient: 1,
					elements: [
						{

							symbol: "H",
							subscript: 2
						}
					],
					formulaSection: "Reactants",
				},
				{
					coefficient: 1,
					elements: [
						{
							symbol: "O",
							subscript: 2
						}
					],
					formulaSection: "Reactants",
				} ],
				products: [

					{
						coefficient: 1,
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
						formulaSection: "Products",
					}
				]


			},
			formulaHeightVH: 20,

			/////////////
			// Actions //
			/////////////
			updateCoefficient: ( formulaSection, index, newCoefficient ) => set( ( state ) => {
				// Check to make sure we have an integer
				if ( !Number.isInteger( newCoefficient ) ) { return }

				if ( formulaSection === "Reactants" ) {
					state.formula.reactants[ index ].coefficient = newCoefficient
					return
				}

				state.formula.products[ index ].coefficient = newCoefficient
			} )
			,

		}
		) ),
		{
			// Use Local Storage
			name: "main-storage",
			getStorage: () => sessionStorage,
		} )

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
