/*

Put Global Types you want to be available everywhere in this file.  Do not export these types.  Included in the tsconfig.json "include" is a wildcard to pick up any *.d.ts files

Example:

type Compound = {
	subscript: number
}

*/

type ChemicalFormula = {
	reactants: ChemicalReactant[],
	products: ChemicalProduct[]
}

type ChemicalReactant = ChemicalCompound
type ChemicalProduct = ChemicalCompound

type ChemicalCompound = {
	coefficient: number,
	formulaSection: FormulaSection,
	isHovered: boolean
	chunks: CompoundChunk[]
}

type FormulaSection = "REACTANTS" | "PRODUCTS"

type CompoundChunk = {
	parenthesesSubscript: number, // 0 = No parentheses, 1=Show parens with no subscript, 2+ = show parens with subscript
	elements: ChemicalElement[]
}

type ChemicalElement = {
	eID: string
	index: number
	symbol: ChemicalSymbol
	subscript: number
}

type Cards = {
	title: string
}

type ElementListElement = {
	symbol: string
	count: number
}

type ElementCountListEntry = {
	symbol: ChemicalSymbol,
	reactantCount: number,
	productCount: number
}

type ElementCountList = ElementCountListEntry[]

// Extend
interface CompoundConstructer extends ChemicalElement {
	subscriptColor: string
}

type ChemicalSymbol =
	"H"
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
	| "Mo"
	| "Tc"
	| "Ru"
	| "Rh"
	| "Pd"
	| "Ag"
	| "Cd"
	| "In"
	| "Sn"
	| "Sb"
	| "Te"
	| "I"
	| "Xe"
	| "Cs"
	| "Ba"
	| "La"
	| "Ce"
	| "Pr"
	| "Nd"
	| "Pm"
	| "Sm"
	| "Eu"
	| "Gd"
	| "Tb"
	| "Dy"
	| "Ho"
	| "Er"
	| "Tm"
	| "Yb"
	| "Lu"
	| "Hf"
	| "Ta"
	| "W"
	| "Re"
	| "Os"
	| "Ir"
	| "Pt"
	| "Au"
	| "Hg"
	| "Tl"
	| "Pb"
	| "Bi"
	| "Pi"
	| "At"
	| "Rn"
	| "Fr"
	| "Ra"
	| "Ac"
	| "Th"
	| "Pa"
	| "U"
	| "Np"
	| "Pu"
	| "Am"
	| "Cm"
	| "Bk"
	| "Cf"
	| "Es"
	| "Fm"
	| "Md"
	| "No"
	| "Lr"
	| "Rf"
	| "Db"
	| "Sg"
	| "Bh"
	| "Hs"
	| "Mt"
	| "Ds"
	| "Rg"
	| "Cn"
	| "Nh"
	| "Fl"
	| "Mc"
	| "Lv"
	| "Ts"
	| "Og"
