import { dracPurple } from '@/theme/colors/colors'
import { v4 as uuid } from 'uuid'

export const PresetFormulas: ChemicalFormula[] = [
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
]
