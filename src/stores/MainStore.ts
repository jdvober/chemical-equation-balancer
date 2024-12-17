import { dracPurple } from '@/theme/colors/colors'
import { v4 as uuid } from 'uuid'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { CountList } from './countList'
import { ElementsByPeriod } from './elements'

type State = {
	formula: {
		reactants: ChemicalReactant[]
		products: ChemicalProduct[]
	}
	formulaHeightEM: number
	countList: {
		symbol: ChemicalSymbol
		reactantCount: number
		productCount: number
	}[]
	editFormulaSection: FormulaSection
	formulaEditorActive: boolean
	elements: ChemicalSymbol[][]
	subscriptColor: string
	editorConstructionSectionChunks: CompoundChunk[]
	reactantAndProductElementListsMatch: boolean
	selectedConstructionCompoundIDs: string[]
	animatedCompoundConstructionChunkIDs: { latest: string; history: string[] }
}

type Action = {
	setReactants: (
		newReactants: ChemicalReactant[] | ChemicalCompound[]
	) => void
	setProducts: (newFormula: ChemicalProduct[] | ChemicalCompound[]) => void
	setCoefficient: (
		formulaSection: FormulaSection,
		index: number,
		newCoefficient: number
	) => void
	setCountList: (newCountList: ElementCountList) => void
	setEditFormulaSection: (newFormulaSection: FormulaSection) => void
	setFormulaEditorActive: (isActive: boolean) => void
	setConstructionSelectionItemSubscriptColor: (
		newSubscriptColor: string,
		chunkIndex: number,
		elementIndex: number
	) => void
	setEditorConstructionSectionChunks: (
		newFormulaEditorConstructionSectionChunks: CompoundChunk[]
	) => void
	setEditorConstructionSectionItemSubscriptValue: (
		newSubscriptValue: number,
		chunkIndex: number,
		elementIndex: number
	) => void
	setHoverStatus: (
		formulaSection: FormulaSection,
		index: number,
		newHoverStatus: boolean
	) => void
	setReactantAndProductElementListsMatch: (newBoolean: boolean) => void
	setSelectedConstructionCompoundIDs: (selectedCompounds: string[]) => void
	setAnimatedChunkIDs: (newChunkIDsList: {
		latest: string
		history: string[]
	}) => void
}

export const useMainStore = create<State & Action>()(
	immer((set) => ({
		///////////
		// State //
		///////////
		formula: {
			reactants: [
				{
					coefficient: 4,
					formulaSection: 'REACTANTS',
					isHovered: false,
					chunks: [
						{
							chunkID: uuid(),
							parenthesesSubscript: 0,
							elements: [
								{
									eID: uuid(),
									index: 0,
									symbol: 'H',
									subscript: { value: 2, color: dracPurple },
								},
							],
						},
					],
				},
				{
					coefficient: 2,
					formulaSection: 'REACTANTS',
					isHovered: false,
					chunks: [
						{
							chunkID: uuid(),
							parenthesesSubscript: 0,
							elements: [
								{
									index: 0,
									eID: uuid(),
									symbol: 'O',
									subscript: { value: 2, color: dracPurple },
								},
							],
						},
					],
				},
			],
			products: [
				{
					coefficient: 4,
					formulaSection: 'PRODUCTS',
					isHovered: false,
					chunks: [
						{
							chunkID: uuid(),
							parenthesesSubscript: 3,
							elements: [
								{
									index: 0,
									eID: uuid(),
									symbol: 'H',
									subscript: { value: 2, color: dracPurple },
								},
								{
									index: 1,
									eID: uuid(),
									symbol: 'O',
									subscript: { value: 1, color: dracPurple },
								},
							],
						},
					],
				},
			],
		},
		formulaHeightEM: 5,
		countList: CountList,

		editFormulaSection: 'REACTANTS',
		formulaEditorActive: false,
		elements: ElementsByPeriod,
		subscriptColor: dracPurple,
		editorConstructionSectionChunks: [],
		reactantAndProductElementListsMatch: false,
		selectedConstructionCompoundIDs: [],
		animatedCompoundConstructionChunkIDs: {
			latest: '',
			history: [] as string[],
		},

		////////////////////////////////////////////////////
		////////////////////////////////////////////////////
		////////////////////////////////////////////////////
		////////////////////////////////////////////////////
		///////////////////// Actions //////////////////////
		////////////////////////////////////////////////////
		////////////////////////////////////////////////////
		////////////////////////////////////////////////////
		////////////////////////////////////////////////////

		setReactants: (newReactants) =>
			set((state) => {
				state.formula.reactants = newReactants
			}),
		setProducts: (newProducts) =>
			set((state) => {
				state.formula.products = newProducts
			}),
		setCountList: (newCountList: any) =>
			set((state) => {
				state.countList = newCountList
			}),

		setCoefficient: (formulaSection, index, newCoefficient) =>
			set((state) => {
				// Check to make sure we have an integer
				if (!Number.isInteger(newCoefficient)) {
					return
				}

				// Update the coefficient
				if (formulaSection === 'REACTANTS') {
					state.formula.reactants[index].coefficient = newCoefficient
				} else if (formulaSection === 'PRODUCTS') {
					state.formula.products[index].coefficient = newCoefficient
				}
			}),
		setEditFormulaSection: (newFormulaSection) =>
			set((state) => {
				state.editFormulaSection = newFormulaSection
			}),
		setFormulaEditorActive: (isActive) =>
			set((state) => {
				state.formulaEditorActive = isActive
			}),
		setConstructionSelectionItemSubscriptColor: (
			newSubscriptColor,
			chunkIndex,
			elementIndex
		) =>
			set((state) => {
				let oldValue =
					state.editorConstructionSectionChunks[chunkIndex].elements[
						elementIndex
					].subscript.value
				state.editorConstructionSectionChunks[chunkIndex].elements[
					elementIndex
				].subscript = { color: newSubscriptColor, value: oldValue }
			}),
		setEditorConstructionSectionChunks: (
			newFormulaEditorChemicalSectionItems
		) =>
			set((state) => {
				state.editorConstructionSectionChunks =
					newFormulaEditorChemicalSectionItems
			}),
		setEditorConstructionSectionItemSubscriptValue: (
			newSubscriptValue,
			chunkIndex,
			elementIndex
		) =>
			set((state) => {
				let oldColor =
					state.editorConstructionSectionChunks[chunkIndex].elements[
						elementIndex
					].subscript.color
				state.editorConstructionSectionChunks[chunkIndex].elements[
					elementIndex
				].subscript = { color: oldColor, value: newSubscriptValue }
			}),
		setHoverStatus: (formulaSection, index, newFormulaStatus) =>
			set((state) => {
				formulaSection === 'REACTANTS'
					? (state.formula.reactants[index].isHovered =
							newFormulaStatus)
					: (state.formula.products[index].isHovered =
							newFormulaStatus)
			}),
		setReactantAndProductElementListsMatch: (newBoolean) =>
			set((state) => {
				state.reactantAndProductElementListsMatch = newBoolean
			}),
		setSelectedConstructionCompoundIDs(selectedCompoundIDs) {
			set((state) => {
				state.selectedConstructionCompoundIDs = selectedCompoundIDs
			})
		},
		setAnimatedChunkIDs(newChunkIDList) {
			set((state) => {
				state.animatedCompoundConstructionChunkIDs = newChunkIDList
			})
		},
	}))
)

// ₀₁₂₃₄₅₆₇₈₉→

// 2H₂ + 1O₂ → 2H₂O
