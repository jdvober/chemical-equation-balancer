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
	editFormulaDrawerActive: boolean,
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
	setEditFormulaDrawerActive: ( isActive: boolean ) => void,
	setChemicalSelectionItemSubscriptColor: ( newSubscriptColor: "dracula.dracRed" | "dracula.dracGreen" | "dracula.dracPurple", index: number
	) => void
	setFormulaEditorChemicalSectionItems: ( newFormulaEditorChemicalSectionItems: ChemicalSectionItem[] ) => void
	setFormulaEditorChemicalSectionItemSubscript: ( newSubscript: number, index: number ) => void
	setHoverStatus: ( formulaSection: FormulaSection, index: number, newHoverStatus: boolean ) => void
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
				isHovered: false
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
				isHovered: false
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
					isHovered: false
				}
			]
		},
		formulaHeightVH: 20,
		reactantCountList: [
			{ symbol: "H", count: 2 },
			{ symbol: "He", count: 0 },
			{ symbol: "Li", count: 0 },
			{ symbol: "Be", count: 0 },
			{ symbol: "B", count: 0 },
			{ symbol: "C", count: 0 },
			{ symbol: "N", count: 0 },
			{ symbol: "O", count: 2 },
			{ symbol: "F", count: 0 },
			{ symbol: "Ne", count: 0 },
			{ symbol: "Na", count: 0 },
			{ symbol: "Mg", count: 0 },
			{ symbol: "Al", count: 0 },
			{ symbol: "Si", count: 0 },
			{ symbol: "P", count: 0 },
			{ symbol: "S", count: 0 },
			{ symbol: "Cl", count: 0 },
			{ symbol: "Ar", count: 0 },
			{ symbol: "K", count: 0 },
			{ symbol: "Ca", count: 0 },
			{ symbol: "Sc", count: 0 },
			{ symbol: "Ti", count: 0 },
			{ symbol: "V", count: 0 },
			{ symbol: "Cr", count: 0 },
			{ symbol: "Mn", count: 0 },
			{ symbol: "Fe", count: 0 },
			{ symbol: "Co", count: 0 },
			{ symbol: "Ni", count: 0 },
			{ symbol: "Cu", count: 0 },
			{ symbol: "Zn", count: 0 },
			{ symbol: "Ga", count: 0 },
			{ symbol: "Ge", count: 0 },
			{ symbol: "As", count: 0 },
			{ symbol: "Se", count: 0 },
			{ symbol: "Br", count: 0 },
			{ symbol: "Kr", count: 0 },
			{ symbol: "Rb", count: 0 },
			{ symbol: "Sr", count: 0 },
			{ symbol: "Y", count: 0 },
			{ symbol: "Zr", count: 0 },
			{ symbol: "Nb", count: 0 },
			{ symbol: "Mo", count: 0 },
			{ symbol: "Tc", count: 0 },
			{ symbol: "Ru", count: 0 },
			{ symbol: "Rh", count: 0 },
			{ symbol: "Pd", count: 0 },
			{ symbol: "Ag", count: 0 },
			{ symbol: "Cd", count: 0 },
			{ symbol: "In", count: 0 },
			{ symbol: "Sn", count: 0 },
			{ symbol: "Sb", count: 0 },
			{ symbol: "Te", count: 0 },
			{ symbol: "I", count: 0 },
			{ symbol: "Xe", count: 0 },
			{ symbol: "Cs", count: 0 },
			{ symbol: "Ba", count: 0 },
			{ symbol: "Hf", count: 0 },
			{ symbol: "Ta", count: 0 },
			{ symbol: "W", count: 0 },
			{ symbol: "Re", count: 0 },
			{ symbol: "Os", count: 0 },
			{ symbol: "Ir", count: 0 },
			{ symbol: "Pt", count: 0 },
			{ symbol: "Au", count: 0 },
			{ symbol: "Hg", count: 0 },
			{ symbol: "Tl", count: 0 },
			{ symbol: "Pb", count: 0 },
			{ symbol: "Bi", count: 0 },
			{ symbol: "Pi", count: 0 },
			{ symbol: "At", count: 0 },
			{ symbol: "Rn", count: 0 },
			{ symbol: "Fr", count: 0 },
			{ symbol: "Ra", count: 0 },
			{ symbol: "Rf", count: 0 },
			{ symbol: "Db", count: 0 },
			{ symbol: "Sg", count: 0 },
			{ symbol: "Bh", count: 0 },
			{ symbol: "Hs", count: 0 },
			{ symbol: "Mt", count: 0 },
			{ symbol: "Ds", count: 0 },
			{ symbol: "Rg", count: 0 },
			{ symbol: "Cn", count: 0 },
			{ symbol: "Nh", count: 0 },
			{ symbol: "Fl", count: 0 },
			{ symbol: "Mc", count: 0 },
			{ symbol: "Lv", count: 0 },
			{ symbol: "Ts", count: 0 },
			{ symbol: "Og", count: 0 },
			{ symbol: "La", count: 0 },
			{ symbol: "Ce", count: 0 },
			{ symbol: "Pr", count: 0 },
			{ symbol: "Nd", count: 0 },
			{ symbol: "Pm", count: 0 },
			{ symbol: "Sm", count: 0 },
			{ symbol: "Eu", count: 0 },
			{ symbol: "Gd", count: 0 },
			{ symbol: "Tb", count: 0 },
			{ symbol: "Dy", count: 0 },
			{ symbol: "Ho", count: 0 },
			{ symbol: "Er", count: 0 },
			{ symbol: "Tm", count: 0 },
			{ symbol: "Yb", count: 0 },
			{ symbol: "Lu", count: 0 },
			{ symbol: "Ac", count: 0 },
			{ symbol: "Th", count: 0 },
			{ symbol: "Pa", count: 0 },
			{ symbol: "U", count: 0 },
			{ symbol: "Np", count: 0 },
			{ symbol: "Pu", count: 0 },
			{ symbol: "Am", count: 0 },
			{ symbol: "Cm", count: 0 },
			{ symbol: "Bk", count: 0 },
			{ symbol: "Cf", count: 0 },
			{ symbol: "Es", count: 0 },
			{ symbol: "Fm", count: 0 },
			{ symbol: "Md", count: 0 },
			{ symbol: "No", count: 0 },
			{ symbol: "Lr", count: 0 }
		],

		productCountList: [
			{ symbol: "H", count: 2 },
			{ symbol: "He", count: 0 },
			{ symbol: "Li", count: 0 },
			{ symbol: "Be", count: 0 },
			{ symbol: "B", count: 0 },
			{ symbol: "C", count: 0 },
			{ symbol: "N", count: 0 },
			{ symbol: "O", count: 1 },
			{ symbol: "F", count: 0 },
			{ symbol: "Ne", count: 0 },
			{ symbol: "Na", count: 0 },
			{ symbol: "Mg", count: 0 },
			{ symbol: "Al", count: 0 },
			{ symbol: "Si", count: 0 },
			{ symbol: "P", count: 0 },
			{ symbol: "S", count: 0 },
			{ symbol: "Cl", count: 0 },
			{ symbol: "Ar", count: 0 },
			{ symbol: "K", count: 0 },
			{ symbol: "Ca", count: 0 },
			{ symbol: "Sc", count: 0 },
			{ symbol: "Ti", count: 0 },
			{ symbol: "V", count: 0 },
			{ symbol: "Cr", count: 0 },
			{ symbol: "Mn", count: 0 },
			{ symbol: "Fe", count: 0 },
			{ symbol: "Co", count: 0 },
			{ symbol: "Ni", count: 0 },
			{ symbol: "Cu", count: 0 },
			{ symbol: "Zn", count: 0 },
			{ symbol: "Ga", count: 0 },
			{ symbol: "Ge", count: 0 },
			{ symbol: "As", count: 0 },
			{ symbol: "Se", count: 0 },
			{ symbol: "Br", count: 0 },
			{ symbol: "Kr", count: 0 },
			{ symbol: "Rb", count: 0 },
			{ symbol: "Sr", count: 0 },
			{ symbol: "Y", count: 0 },
			{ symbol: "Zr", count: 0 },
			{ symbol: "Nb", count: 0 },
			{ symbol: "Mo", count: 0 },
			{ symbol: "Tc", count: 0 },
			{ symbol: "Ru", count: 0 },
			{ symbol: "Rh", count: 0 },
			{ symbol: "Pd", count: 0 },
			{ symbol: "Ag", count: 0 },
			{ symbol: "Cd", count: 0 },
			{ symbol: "In", count: 0 },
			{ symbol: "Sn", count: 0 },
			{ symbol: "Sb", count: 0 },
			{ symbol: "Te", count: 0 },
			{ symbol: "I", count: 0 },
			{ symbol: "Xe", count: 0 },
			{ symbol: "Cs", count: 0 },
			{ symbol: "Ba", count: 0 },
			{ symbol: "Hf", count: 0 },
			{ symbol: "Ta", count: 0 },
			{ symbol: "W", count: 0 },
			{ symbol: "Re", count: 0 },
			{ symbol: "Os", count: 0 },
			{ symbol: "Ir", count: 0 },
			{ symbol: "Pt", count: 0 },
			{ symbol: "Au", count: 0 },
			{ symbol: "Hg", count: 0 },
			{ symbol: "Tl", count: 0 },
			{ symbol: "Pb", count: 0 },
			{ symbol: "Bi", count: 0 },
			{ symbol: "Pi", count: 0 },
			{ symbol: "At", count: 0 },
			{ symbol: "Rn", count: 0 },
			{ symbol: "Fr", count: 0 },
			{ symbol: "Ra", count: 0 },
			{ symbol: "Rf", count: 0 },
			{ symbol: "Db", count: 0 },
			{ symbol: "Sg", count: 0 },
			{ symbol: "Bh", count: 0 },
			{ symbol: "Hs", count: 0 },
			{ symbol: "Mt", count: 0 },
			{ symbol: "Ds", count: 0 },
			{ symbol: "Rg", count: 0 },
			{ symbol: "Cn", count: 0 },
			{ symbol: "Nh", count: 0 },
			{ symbol: "Fl", count: 0 },
			{ symbol: "Mc", count: 0 },
			{ symbol: "Lv", count: 0 },
			{ symbol: "Ts", count: 0 },
			{ symbol: "Og", count: 0 },
			{ symbol: "La", count: 0 },
			{ symbol: "Ce", count: 0 },
			{ symbol: "Pr", count: 0 },
			{ symbol: "Nd", count: 0 },
			{ symbol: "Pm", count: 0 },
			{ symbol: "Sm", count: 0 },
			{ symbol: "Eu", count: 0 },
			{ symbol: "Gd", count: 0 },
			{ symbol: "Tb", count: 0 },
			{ symbol: "Dy", count: 0 },
			{ symbol: "Ho", count: 0 },
			{ symbol: "Er", count: 0 },
			{ symbol: "Tm", count: 0 },
			{ symbol: "Yb", count: 0 },
			{ symbol: "Lu", count: 0 },
			{ symbol: "Ac", count: 0 },
			{ symbol: "Th", count: 0 },
			{ symbol: "Pa", count: 0 },
			{ symbol: "U", count: 0 },
			{ symbol: "Np", count: 0 },
			{ symbol: "Pu", count: 0 },
			{ symbol: "Am", count: 0 },
			{ symbol: "Cm", count: 0 },
			{ symbol: "Bk", count: 0 },
			{ symbol: "Cf", count: 0 },
			{ symbol: "Es", count: 0 },
			{ symbol: "Fm", count: 0 },
			{ symbol: "Md", count: 0 },
			{ symbol: "No", count: 0 },
			{ symbol: "Lr", count: 0 }
		],
		editFormulaSection: "REACTANTS",
		editFormulaDrawerActive: false,
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
			console.log( `Updating ${ formulaSection } Count to ${ newCountList }` )
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
		setEditFormulaDrawerActive: ( isActive ) =>
			set( ( state ) => {
				state.editFormulaDrawerActive = isActive
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
		setHoverStatus: ( formulaSection, index, newFormulaStatus ) =>
			set( ( state ) => {
				formulaSection === "REACTANTS"
					? state.formula.reactants[ index ].isHovered = newFormulaStatus
					: state.formula.products[ index ].isHovered = newFormulaStatus
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
