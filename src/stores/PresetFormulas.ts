import { dracPurple } from '@/theme/colors/colors'
import { v4 as uuid } from 'uuid'

export const PresetFormulaGenerator = (
	reactants: ChemicalReactant[],
	products: ChemicalProduct[]
) => {
	return {
		formulaID: uuid(),
		reactants: reactants,
		products: products,
	}
}

export const PresetFormulas: ChemicalFormula[] = [
	// H2 + O2 --> H2O
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	// Cu + S --> Cu2S
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'Cu',
								subscript: { value: 1, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
								symbol: 'S',
								subscript: { value: 1, color: dracPurple },
							},
						],
					},
				],
			},
		],
		products: [
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'Cu',
								subscript: { value: 2, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'S',
								subscript: { value: 1, color: dracPurple },
							},
						],
					},
				],
			},
		],
	},
	// End of Formula
	// P4 + O2 --> P2O3
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'P',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'P',
								subscript: { value: 2, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 3, color: dracPurple },
							},
						],
					},
				],
			},
		],
	},
	// End of Formula
	// Sn + H2 --> Sn + H2O
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'Sn',
								subscript: { value: 1, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'Sn',
								subscript: { value: 1, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	// CH4 + O2 --> CO2 + H2O
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	// Al + O2 --> Al2O3
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'Al',
								subscript: { value: 1, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
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
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula

	// Al + HCl --> AlCl3 + H2
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'Al',
								subscript: { value: 1, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
								symbol: 'H',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 0,
								eID: uuid(),
								symbol: 'Cl',
								subscript: { value: 1, color: dracPurple },
							},
						],
					},
				],
			},
		],
		products: [
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'Al',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'Cl',
								subscript: { value: 3, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'H',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
		],
	},
	// End of Formula

	// Ca3(PO4)2 + H2SO4 --> CaSO4 + Ca(H2PO4)2
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula

	// SeCl6 + O2 --> SeO2 + Cl3
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	// C2H6 + O2 --> SeO2 --> Cl2
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	// KOH + H3PO4 --> K3PO4 + H2O
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	// NH3 + O2 --> NO + H2O
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	// KNO3 + H2CO3 --> K2CO3 + HNO3
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'K',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'N',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'O',
								subscript: { value: 3, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
								symbol: 'H',
								subscript: { value: 2, color: dracPurple },
							},
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 0,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 3, color: dracPurple },
							},
						],
					},
				],
			},
		],
		products: [
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'K',
								subscript: { value: 2, color: dracPurple },
							},
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 3, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'H',
								subscript: { value: 2, color: dracPurple },
							},
							{
								index: 0,
								eID: uuid(),
								symbol: 'N',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 3, color: dracPurple },
							},
						],
					},
				],
			},
		],
	},
	// End of Formula
	// Fe + H2SO4 --> Fe2(SO4)3 + H2
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'Fe',
								subscript: { value: 1, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
								symbol: 'H',
								subscript: { value: 2, color: dracPurple },
							},
							{
								index: 0,
								eID: uuid(),
								symbol: 'S',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 0,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
		],
		products: [
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'Fe',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
					{
						chunkID: uuid(),
						parenthesesSubscript: 3,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'S',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 0,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 1,
								eID: uuid(),
								symbol: 'H',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
		],
	},
	// End of Formula
	//
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	//
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	//
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	//
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	//
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	//
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	//
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	//
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	//
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
	//
	{
		formulaID: uuid(),
		reactants: [
			{
				coefficient: 1,
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
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								eID: uuid(),
								index: 0,
								symbol: 'H',
								subscript: { value: 4, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
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
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
						elements: [
							{
								index: 0,
								eID: uuid(),
								symbol: 'C',
								subscript: { value: 1, color: dracPurple },
							},
							{
								index: 1,
								eID: uuid(),
								symbol: 'O',
								subscript: { value: 2, color: dracPurple },
							},
						],
					},
				],
			},
			{
				coefficient: 1,
				formulaSection: 'PRODUCTS',
				isHovered: false,
				chunks: [
					{
						chunkID: uuid(),
						parenthesesSubscript: 0,
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
	// End of Formula
]
