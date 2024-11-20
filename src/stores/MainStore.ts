import { create } from "zustand"
// import { persist } from "zustand/middleware"
import { v4 as uuid } from "uuid"
import { immer } from "zustand/middleware/immer"

type State = {
	formula: {
		reactants: ChemicalReactant[],
		products: ChemicalProduct[]
	},
	formulaHeightVH: number,
	countList: {
		symbol: ChemicalSymbol
		reactantCount: number
		productCount: number
	}[],
	editFormulaSection: FormulaSection,
	formulaEditorActive: boolean,
	elements: ( ChemicalSymbol | "" )[][]
	subscriptColor: "dracula.dracRed" | "dracula.dracGreen" | "dracula.dracPurple"
	editorChemicalSectionItems: ChemicalSectionItem[]
	reactantAndProductElementListsMatch: boolean,


}

type Action = {

	setReactants: ( newReactants: ChemicalReactant[] | ChemicalCompound[] ) => void,
	setProducts: ( newFormula: ChemicalProduct[] | ChemicalCompound[] ) => void,
	setCoefficient: ( formulaSection: FormulaSection, index: number, newCoefficient: number ) => void,
	setCountList: ( newCountList: ElementCountList ) => void,
	setEditFormulaSection: ( newFormulaSection: FormulaSection ) => void
	setFormulaEditorActive: ( isActive: boolean ) => void,
	setChemicalSelectionItemSubscriptColor: ( newSubscriptColor: "dracula.dracRed" | "dracula.dracGreen" | "dracula.dracPurple", index: number
	) => void
	setEditorChemicalSectionItems: ( newFormulaEditorChemicalSectionItems: ChemicalSectionItem[] ) => void
	setEditorChemicalSectionItemSubscript: ( newSubscript: number, index: number ) => void
	setHoverStatus: ( formulaSection: FormulaSection, index: number, newHoverStatus: boolean ) => void
	setReactantAndProductElementListsMatch: ( newBoolean: boolean ) => void
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
						eID: uuid(),
						index: 0,
						symbol: "H",
						subscript: 2
					}
				],
				parens: [],
				formulaSection: "REACTANTS",
				isHovered: false
			},
			{
				coefficient: 1,
				elements: [
					{
						index: 0,
						eID: uuid(),
						symbol: "O",
						subscript: 2
					}
				],
				parens: [],
				formulaSection: "REACTANTS",
				isHovered: false
			} ],
			products: [

				{
					coefficient: 1,
					elements: [
						{
							index: 0,
							eID: uuid(),
							symbol: "H",
							subscript: 2
						},
						{
							index: 1,
							eID: uuid(),
							symbol: "O",
							subscript: 1
						}
					],
					parens: [],
					formulaSection: "PRODUCTS",
					isHovered: false
				}
			]
		},
		formulaHeightVH: 20,
		countList: [
			{ symbol: "H", reactantCount: 0, productCount: 0 },
			{ symbol: "He", reactantCount: 0, productCount: 0 },
			{ symbol: "Li", reactantCount: 0, productCount: 0 },
			{ symbol: "Be", reactantCount: 0, productCount: 0 },
			{ symbol: "B", reactantCount: 0, productCount: 0 },
			{ symbol: "C", reactantCount: 0, productCount: 0 },
			{ symbol: "N", reactantCount: 0, productCount: 0 },
			{ symbol: "O", reactantCount: 0, productCount: 0 },
			{ symbol: "F", reactantCount: 0, productCount: 0 },
			{ symbol: "Ne", reactantCount: 0, productCount: 0 },
			{ symbol: "Na", reactantCount: 0, productCount: 0 },
			{ symbol: "Mg", reactantCount: 0, productCount: 0 },
			{ symbol: "Al", reactantCount: 0, productCount: 0 },
			{ symbol: "Si", reactantCount: 0, productCount: 0 },
			{ symbol: "P", reactantCount: 0, productCount: 0 },
			{ symbol: "S", reactantCount: 0, productCount: 0 },
			{ symbol: "Cl", reactantCount: 0, productCount: 0 },
			{ symbol: "Ar", reactantCount: 0, productCount: 0 },
			{ symbol: "K", reactantCount: 0, productCount: 0 },
			{ symbol: "Ca", reactantCount: 0, productCount: 0 },
			{ symbol: "Sc", reactantCount: 0, productCount: 0 },
			{ symbol: "Ti", reactantCount: 0, productCount: 0 },
			{ symbol: "V", reactantCount: 0, productCount: 0 },
			{ symbol: "Cr", reactantCount: 0, productCount: 0 },
			{ symbol: "Mn", reactantCount: 0, productCount: 0 },
			{ symbol: "Fe", reactantCount: 0, productCount: 0 },
			{ symbol: "Co", reactantCount: 0, productCount: 0 },
			{ symbol: "Ni", reactantCount: 0, productCount: 0 },
			{ symbol: "Cu", reactantCount: 0, productCount: 0 },
			{ symbol: "Zn", reactantCount: 0, productCount: 0 },
			{ symbol: "Ga", reactantCount: 0, productCount: 0 },
			{ symbol: "Ge", reactantCount: 0, productCount: 0 },
			{ symbol: "As", reactantCount: 0, productCount: 0 },
			{ symbol: "Se", reactantCount: 0, productCount: 0 },
			{ symbol: "Br", reactantCount: 0, productCount: 0 },
			{ symbol: "Kr", reactantCount: 0, productCount: 0 },
			{ symbol: "Rb", reactantCount: 0, productCount: 0 },
			{ symbol: "Sr", reactantCount: 0, productCount: 0 },
			{ symbol: "Y", reactantCount: 0, productCount: 0 },
			{ symbol: "Zr", reactantCount: 0, productCount: 0 },
			{ symbol: "Nb", reactantCount: 0, productCount: 0 },
			{ symbol: "Mo", reactantCount: 0, productCount: 0 },
			{ symbol: "Tc", reactantCount: 0, productCount: 0 },
			{ symbol: "Ru", reactantCount: 0, productCount: 0 },
			{ symbol: "Rh", reactantCount: 0, productCount: 0 },
			{ symbol: "Pd", reactantCount: 0, productCount: 0 },
			{ symbol: "Ag", reactantCount: 0, productCount: 0 },
			{ symbol: "Cd", reactantCount: 0, productCount: 0 },
			{ symbol: "In", reactantCount: 0, productCount: 0 },
			{ symbol: "Sn", reactantCount: 0, productCount: 0 },
			{ symbol: "Sb", reactantCount: 0, productCount: 0 },
			{ symbol: "Te", reactantCount: 0, productCount: 0 },
			{ symbol: "I", reactantCount: 0, productCount: 0 },
			{ symbol: "Xe", reactantCount: 0, productCount: 0 },
			{ symbol: "Cs", reactantCount: 0, productCount: 0 },
			{ symbol: "Ba", reactantCount: 0, productCount: 0 },
			{ symbol: "Hf", reactantCount: 0, productCount: 0 },
			{ symbol: "Ta", reactantCount: 0, productCount: 0 },
			{ symbol: "W", reactantCount: 0, productCount: 0 },
			{ symbol: "Re", reactantCount: 0, productCount: 0 },
			{ symbol: "Os", reactantCount: 0, productCount: 0 },
			{ symbol: "Ir", reactantCount: 0, productCount: 0 },
			{ symbol: "Pt", reactantCount: 0, productCount: 0 },
			{ symbol: "Au", reactantCount: 0, productCount: 0 },
			{ symbol: "Hg", reactantCount: 0, productCount: 0 },
			{ symbol: "Tl", reactantCount: 0, productCount: 0 },
			{ symbol: "Pb", reactantCount: 0, productCount: 0 },
			{ symbol: "Bi", reactantCount: 0, productCount: 0 },
			{ symbol: "Pi", reactantCount: 0, productCount: 0 },
			{ symbol: "At", reactantCount: 0, productCount: 0 },
			{ symbol: "Rn", reactantCount: 0, productCount: 0 },
			{ symbol: "Fr", reactantCount: 0, productCount: 0 },
			{ symbol: "Ra", reactantCount: 0, productCount: 0 },
			{ symbol: "Rf", reactantCount: 0, productCount: 0 },
			{ symbol: "Db", reactantCount: 0, productCount: 0 },
			{ symbol: "Sg", reactantCount: 0, productCount: 0 },
			{ symbol: "Bh", reactantCount: 0, productCount: 0 },
			{ symbol: "Hs", reactantCount: 0, productCount: 0 },
			{ symbol: "Mt", reactantCount: 0, productCount: 0 },
			{ symbol: "Ds", reactantCount: 0, productCount: 0 },
			{ symbol: "Rg", reactantCount: 0, productCount: 0 },
			{ symbol: "Cn", reactantCount: 0, productCount: 0 },
			{ symbol: "Nh", reactantCount: 0, productCount: 0 },
			{ symbol: "Fl", reactantCount: 0, productCount: 0 },
			{ symbol: "Mc", reactantCount: 0, productCount: 0 },
			{ symbol: "Lv", reactantCount: 0, productCount: 0 },
			{ symbol: "Ts", reactantCount: 0, productCount: 0 },
			{ symbol: "Og", reactantCount: 0, productCount: 0 },
			{ symbol: "La", reactantCount: 0, productCount: 0 },
			{ symbol: "Ce", reactantCount: 0, productCount: 0 },
			{ symbol: "Pr", reactantCount: 0, productCount: 0 },
			{ symbol: "Nd", reactantCount: 0, productCount: 0 },
			{ symbol: "Pm", reactantCount: 0, productCount: 0 },
			{ symbol: "Sm", reactantCount: 0, productCount: 0 },
			{ symbol: "Eu", reactantCount: 0, productCount: 0 },
			{ symbol: "Gd", reactantCount: 0, productCount: 0 },
			{ symbol: "Tb", reactantCount: 0, productCount: 0 },
			{ symbol: "Dy", reactantCount: 0, productCount: 0 },
			{ symbol: "Ho", reactantCount: 0, productCount: 0 },
			{ symbol: "Er", reactantCount: 0, productCount: 0 },
			{ symbol: "Tm", reactantCount: 0, productCount: 0 },
			{ symbol: "Yb", reactantCount: 0, productCount: 0 },
			{ symbol: "Lu", reactantCount: 0, productCount: 0 },
			{ symbol: "Ac", reactantCount: 0, productCount: 0 },
			{ symbol: "Th", reactantCount: 0, productCount: 0 },
			{ symbol: "Pa", reactantCount: 0, productCount: 0 },
			{ symbol: "U", reactantCount: 0, productCount: 0 },
			{ symbol: "Np", reactantCount: 0, productCount: 0 },
			{ symbol: "Pu", reactantCount: 0, productCount: 0 },
			{ symbol: "Am", reactantCount: 0, productCount: 0 },
			{ symbol: "Cm", reactantCount: 0, productCount: 0 },
			{ symbol: "Bk", reactantCount: 0, productCount: 0 },
			{ symbol: "Cf", reactantCount: 0, productCount: 0 },
			{ symbol: "Es", reactantCount: 0, productCount: 0 },
			{ symbol: "Fm", reactantCount: 0, productCount: 0 },
			{ symbol: "Md", reactantCount: 0, productCount: 0 },
			{ symbol: "No", reactantCount: 0, productCount: 0 },
			{ symbol: "Lr", reactantCount: 0, productCount: 0 }
		],

		editFormulaSection: "REACTANTS",
		formulaEditorActive: false,
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
		editorChemicalSectionItems: [],
		reactantAndProductElementListsMatch: false,

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
		setCountList: ( newCountList: any ) => set( ( state ) => {
			state.countList = newCountList
		} ),

		setCoefficient: ( formulaSection, index, newCoefficient ) => set( ( state ) => {
			// Check to make sure we have an integer
			if ( !Number.isInteger( newCoefficient ) ) { return }

			// Update the coefficient
			if ( formulaSection === "REACTANTS" ) {
				state.formula.reactants[ index ].coefficient = newCoefficient

			} else if ( formulaSection === "PRODUCTS" ) {

				state.formula.products[ index ].coefficient = newCoefficient
			}
		} ),
		setEditFormulaSection: ( newFormulaSection ) => set( ( state ) => {
			state.editFormulaSection = newFormulaSection
		} ),
		setFormulaEditorActive: ( isActive ) =>
			set( ( state ) => {
				state.formulaEditorActive = isActive
			} ),
		setChemicalSelectionItemSubscriptColor: ( newSubscriptColor, index ) => set( ( state ) => {
			state.editorChemicalSectionItems[ index ].subscriptColor = newSubscriptColor
		} ),
		setEditorChemicalSectionItems: ( newFormulaEditorChemicalSectionItems ) => set( ( state ) => {
			state.editorChemicalSectionItems = newFormulaEditorChemicalSectionItems
		} ),
		setEditorChemicalSectionItemSubscript: ( newSubscript, index ) => set( ( state ) => {
			state.editorChemicalSectionItems[ index ].subscript = newSubscript
		} ),
		setHoverStatus: ( formulaSection, index, newFormulaStatus ) =>
			set( ( state ) => {
				formulaSection === "REACTANTS"
					? state.formula.reactants[ index ].isHovered = newFormulaStatus
					: state.formula.products[ index ].isHovered = newFormulaStatus
			} ),
		setReactantAndProductElementListsMatch: ( newBoolean ) =>
			set( ( state ) => {
				state.reactantAndProductElementListsMatch = newBoolean
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
