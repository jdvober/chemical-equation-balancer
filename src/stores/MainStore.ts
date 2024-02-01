import { create } from "zustand"

// import { persist } from "zustand/middleware"


interface State {
	formula: {
		reactants: ChemicalReactant[],
		products: ChemicalProduct[]
	}
}

export const useMainStore = create<State>()(
	/* persist(*/
	( /*set*/ ) => ( { /* (set, get)*/
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
