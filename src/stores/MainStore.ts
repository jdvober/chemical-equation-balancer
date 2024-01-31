import { create } from "zustand"

// import { persist } from "zustand/middleware"

export type Electron = {
	id: number
	energyLevel: number,
}

interface State {
	electrons: Electron[]
	addElectron: () => void
	removeElectron: () => void
	totalEnergyLevels: number
	updateTotalEnergyLevels: ( newTotalEnergyLevels: number ) => void
}

const determineEnergyLevel = ( electrons: Electron[] | [] ) => {
	switch ( electrons.length ) {
		case 0: case 1:
			return 1
		case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
			return 2
		case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17:
			return 3
		default:
			return 4
	}
}
export const useMainStore = create<State>()(
	// persist(
	( set ) => ( { // (set, get)
		electrons: [

		],
		addElectron: () => set( ( state ) => ( {
			electrons:
				[ ...state.electrons, {
					id: state.electrons.length,
					energyLevel: determineEnergyLevel( state.electrons ),
				}, ]

		} ) ),
		removeElectron: () => set( ( state ) => ( {
			electrons: state.electrons.length != 0 ? state.electrons.slice( 0, -1 ) : state.electrons
		} ) ),
		totalEnergyLevels: 4,
		updateTotalEnergyLevels: ( newTotalEnergyLevels ) => set( () => ( { totalEnergyLevels: newTotalEnergyLevels } ) ),
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
