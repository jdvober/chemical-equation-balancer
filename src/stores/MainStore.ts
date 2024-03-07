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
	editFormulaSection: FormulaSection,
	elements: ( ChemicalSymbol | "" )[][]
	subscriptColor: "dracula.dracRed" | "dracula.dracGreen" | "dracula.dracPurple"
	formulaEditorChemicalSectionItems: ChemicalSectionItem[]

}

type Action = {

	setReactants: ( newReactants: ChemicalReactant[] | ChemicalCompound[] ) => void,
	setProducts: ( newFormula: ChemicalProduct[] | ChemicalCompound[] ) => void,
	setCoefficient: ( formulaSection: FormulaSection, index: number, newCoefficient: number ) => void,
	setCountList: ( newCountList: ElementCountList, formulaSection: FormulaSection ) => void,
	setEditFormulaSection: ( newFormulaSection: FormulaSection ) => void
	setChemicalSelectionItemSubscriptColor: ( newSubscriptColor: "dracula.dracRed" | "dracula.dracGreen" | "dracula.dracPurple", index: number
	) => void
	setFormulaEditorChemicalSectionItems: ( newFormulaEditorChemicalSectionItems: ChemicalSectionItem[] ) => void
	setFormulaEditorChemicalSectionItemSubscript: ( newSubscript: number, index: number ) => void
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
		editFormulaSection: "REACTANTS",
		elements: [
			[ "H",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"He" ],
			[ "Li",
				"Be",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"B",
				"C",
				"N",
				"O",
				"F",
				"Ne" ],
			[ "Na",
				"Mg",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"",
				"Al",
				"Si",
				"P",
				"S",
				"Cl",
				"Ar" ],
			[ "K",
				"Ca",
				"Sc",
				"Ti",
				"V",
				"Cr",
				"Mn",
				"Fe",
				"Co",
				"Ni",
				"Cu",
				"Zn",
				"Ga",
				"Ge",
				"As",
				"Se",
				"Br",
				"Kr" ],
			[ "Rb",
				"Sr",
				"Y",
				"Zr",
				"Nb",
				"Mo",
				"Tc",
				"Ru",
				"Rh",
				"Pd",
				"Ag",
				"Cd",
				"In",
				"Sn",
				"Sb",
				"Te",
				"I",
				"Xe" ],
			[ "Cs",
				"Ba",
				"",
				"Hf",
				"Ta",
				"W",
				"Re",
				"Os",
				"Ir",
				"Pt",
				"Au",
				"Hg",
				"Tl",
				"Pb",
				"Bi",
				"Pi",
				"At",
				"Rn" ],
			[ "Fr",
				"Ra",
				"",
				"Rf",
				"Db",
				"Sg",
				"Bh",
				"Hs",
				"Mt",
				"Ds",
				"Rg",
				"Cn",
				"Nh",
				"Fl",
				"Mc",
				"Lv",
				"Ts",
				"Og" ],
			[ "La",
				"Ce",
				"Pr",
				"Nd",
				"Pm",
				"Sm",
				"Eu",
				"Gd",
				"Tb",
				"Dy",
				"Ho",
				"Er",
				"Tm",
				"Yb",
				"Lu" ],
			[ "Ac",
				"Th",
				"Pa",
				"U",
				"Np",
				"Pu",
				"Am",
				"Cm",
				"Bk",
				"Cf",
				"Es",
				"Fm",
				"Md",
				"No",
				"Lr" ],
		],
		subscriptColor: "dracula.dracPurple",
		formulaEditorChemicalSectionItems: [],

		////////////////////////////////////////////////////
		////////////////////////////////////////////////////
		////////////////////////////////////////////////////
		////////////////////////////////////////////////////
		///////////////////// Actions //////////////////////
		////////////////////////////////////////////////////
		////////////////////////////////////////////////////
		////////////////////////////////////////////////////
		////////////////////////////////////////////////////


		setReactants: ( newReactants ) => set( ( state ) => {
			state.formula.reactants = newReactants
		} ),
		setProducts: ( newProducts ) => set( ( state ) => {
			state.formula.products = newProducts
		} ),
		setCountList: ( newCountList, formulaSection ) => set( ( state ) => {
			console.log( `Updating Reactant Count to ${ newCountList }` )
			formulaSection === "REACTANTS" ? state.reactantCountList = newCountList : state.productCountList = newCountList
		} ),

		setCoefficient: ( formulaSection, index, newCoefficient ) => set( ( state ) => {
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
		} ),
		setEditFormulaSection: ( newFormulaSection ) => set( ( state ) => {
			state.editFormulaSection = newFormulaSection
		} ),
		setChemicalSelectionItemSubscriptColor: ( newSubscriptColor, index ) => set( ( state ) => {
			state.formulaEditorChemicalSectionItems[ index ].subscriptColor = newSubscriptColor
		} ),
		setFormulaEditorChemicalSectionItems: ( newFormulaEditorChemicalSectionItems ) => set( ( state ) => {
			state.formulaEditorChemicalSectionItems = newFormulaEditorChemicalSectionItems
		} ),
		setFormulaEditorChemicalSectionItemSubscript: ( newSubscript, index ) => set( ( state ) => {
			state.formulaEditorChemicalSectionItems[ index ].subscript = newSubscript
		} ),
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
