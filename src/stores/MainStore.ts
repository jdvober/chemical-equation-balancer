import { create } from "zustand"

// import { persist } from "zustand/middleware"

export type Element = {
	symbol: "H" | "He" | "Li" | "Be" | "B" | "C" | "N" | "O" | "F" | "Ne" | "Na", // TODO Add remaining elements
	subscript: number
}
export type Compound = {
	coefficient: number,
	elements: Element[]
}

export type Reactant = Compound
export type Product = Compound
export type Formula = {
	reactants: Reactant[],
	products: Product[]
}

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

interface State {
}

export const useMainStore = create<State>()(
	// persist(
	( set ) => ( { // (set, get)
		formula: {
			reactants: [ {
				coefficient: 2,
				elements: [
					{
						symbol: "H",
						subscript: 2
					}
				]
			},
			{
				coefficient: 1,
				elements: [
					{
						symbol: "O",
						subscript: 2
					}
				]
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
					]
				}
			]


		}
		// electrons: [

		// ],
		// addElectron: () => set( ( state ) => ( {
		// 	electrons:
		// 		[ ...state.electrons, {
		// 			id: state.electrons.length,
		// 			energyLevel: determineEnergyLevel( state.electrons ),
		// 		}, ]

		// } ) ),
		// removeElectron: () => set( ( state ) => ( {
		// 	electrons: state.electrons.length != 0 ? state.electrons.slice( 0, -1 ) : state.electrons
		// } ) ),
		// totalEnergyLevels: 4,
		// updateTotalEnergyLevels: ( newTotalEnergyLevels ) => set( () => ( { totalEnergyLevels: newTotalEnergyLevels } ) ),
	}
		// ),
		// {
		// name: "main-storage",
		// getStorage: () => sessionStorage,
		// }
	) )

/*
If you would like to use localstorage or sessionstorage, uncomment the commented "persist" sections and see zustand documentation
*/
