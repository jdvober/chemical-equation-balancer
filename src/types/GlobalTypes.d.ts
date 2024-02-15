/*

Put Global Types you want to be available everywhere in this file.  Do not export these types.  Included in the tsconfig.json "include" is a wildcard to pick up any *.d.ts files

Example:

type Compound = {
	subscript: number
}

*/
type ChemicalSymbol = "H"
	| "He"
	| "Li"
	| "Be"
	| "B"
	| "C"
	| "N"
	| "O"
	| "F"
	| "Ne"
	| "Na"
	| "Mg"
	| "Al"
	| "Si"
	| "P"
	| "S"
	| "Cl"
	| "Ar"
	| "K"
	| "Ca"
	| "Sc"
	| "Ti"
	| "V"
	| "Cr"
	| "Mn"
	| "Fe"
	| "Co"
	| "Ni"
	| "Cu"
	| "Zn"
	| "Ga"
	| "Ge"
	| "As"
	| "Se"
	| "Br"
	| "Kr"
	| "Rb"
	| "Sr"
	| "Y"
	| "Zr"
	| "Nb"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
	| "Ne"
//TODO Add remaining elements

type FormulaSection = "REACTANTS" | "PRODUCTS"

type ElementListElement = {
	elementListIndex: number
	symbol: string
	count: number
}

type ElementCountList = ElementListElement[]

type ChemicalElement = {
	symbol: ChemicalSymbol
	subscript: number
}

type ChemicalCompound = {
	coefficient: number,
	elements: ChemicalElement[],
	formulaSection: FormulaSection
}

type ChemicalReactant = ChemicalCompound
type ChemicalProduct = ChemicalCompound
type ChemicalFormula = {
	reactants: ChemicalReactant[],
	products: ChemicalProduct[]
}
