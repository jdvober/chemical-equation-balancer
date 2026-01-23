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

const CO2 = (parenthesesSubscript: number) => {
    return {
        chunkID: uuid(),
        parenthesesSubscript: parenthesesSubscript,
        elements: [
            {
                eID: uuid(),
                index: 0,
                symbol: 'C',
                subscript: { value: 1, color: dracPurple },
            },
            {
                eID: uuid(),
                index: 1,
                symbol: 'O',
                subscript: { value: 2, color: dracPurple },
            },
        ]
    } as CompoundChunk
}
const H2O = (parenthesesSubscript: number) => {
    return {
        chunkID: uuid(),
        parenthesesSubscript: parenthesesSubscript,
        elements: [
            {
                eID: uuid(),
                index: 0,
                symbol: 'H',
                subscript: { value: 2, color: dracPurple },
            },
            {
                eID: uuid(),
                index: 1,
                symbol: 'O',
                subscript: { value: 1, color: dracPurple },
            },
        ]
    } as CompoundChunk
}

const O2 = (parenthesesSubscript: number) => {
    return {
        chunkID: uuid(),
        parenthesesSubscript: parenthesesSubscript,
        elements: [
            {
                eID: uuid(),
                index: 0,
                symbol: 'O',
                subscript: { value: 2, color: dracPurple },
            },
        ]
    } as CompoundChunk
}
const NO3 = (parenthesesSubscript: number) => {
    return {
        chunkID: uuid(),
        parenthesesSubscript: parenthesesSubscript,
        elements: [
            {
                eID: uuid(),
                index: 0,
                symbol: 'N',
                subscript: { value: 1, color: dracPurple },
            },
            {
                eID: uuid(),
                index: 1,
                symbol: 'O',
                subscript: { value: 3, color: dracPurple },
            },
        ]
    } as CompoundChunk
}
const NH4 = (parenthesesSubscript: number) => {
    return {
        chunkID: uuid(),
        parenthesesSubscript: parenthesesSubscript,
        elements: [
            {
                eID: uuid(),
                index: 0,
                symbol: 'N',
                subscript: { value: 1, color: dracPurple },
            },
            {
                eID: uuid(),
                index: 1,
                symbol: 'H',
                subscript: { value: 4, color: dracPurple },
            },
        ]
    } as CompoundChunk
}
const PO4 = (parenthesesSubscript: number) => {
    return {
        chunkID: uuid(),
        parenthesesSubscript: parenthesesSubscript,
        elements: [
            {
                eID: uuid(),
                index: 0,
                symbol: 'P',
                subscript: { value: 1, color: dracPurple },
            },
            {
                eID: uuid(),
                index: 0,
                symbol: 'O',
                subscript: { value: 4, color: dracPurple },
            },
        ]
    } as CompoundChunk
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
                    O2(1)
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
    // SnO2 + H2 --> Sn + H2O
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
                            {
                                eID: uuid(),
                                index: 0,
                                symbol: 'O',
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
                                symbol: 'H',
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
                    O2(0)
                ],
            },
        ],
        products: [
            {
                coefficient: 1,
                formulaSection: 'PRODUCTS',
                isHovered: false,
                chunks: [
                    CO2(0),
                ],
            },
            {
                coefficient: 1,
                formulaSection: 'PRODUCTS',
                isHovered: false,
                chunks: [
                    H2O(0),
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
                    O2(0)
                ],
            },
        ],
        products: [
            {
                coefficient: 1,
                formulaSection: 'PRODUCTS',
                isHovered: false,
                chunks: [
                    CO2(0),
                ],
            },
            {
                coefficient: 1,
                formulaSection: 'PRODUCTS',
                isHovered: false,
                chunks: [
                    H2O(0),
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
                                symbol: 'Ca',
                                subscript: { value: 3, color: dracPurple },
                            },
                        ],
                    },
                    PO4(2)
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
                                symbol: 'Ca',
                                subscript: { value: 1, color: dracPurple },
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
                                symbol: 'Ca',
                                subscript: { value: 1, color: dracPurple },
                            },
                        ],
                    },
                    {
                        chunkID: uuid(),
                        parenthesesSubscript: 2,
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
                                symbol: 'P',
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
                                symbol: 'Se',
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                eID: uuid(),
                                index: 0,
                                symbol: 'Cl',
                                subscript: { value: 6, color: dracPurple },
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
                                symbol: 'Se',
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
                                symbol: 'Cl',
                                subscript: { value: 2, color: dracPurple },
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
                                subscript: { value: 2, color: dracPurple },
                            },
                            {
                                eID: uuid(),
                                index: 0,
                                symbol: 'H',
                                subscript: { value: 6, color: dracPurple },
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
                                symbol: 'K',
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                eID: uuid(),
                                index: 0,
                                symbol: 'O',
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                eID: uuid(),
                                index: 0,
                                symbol: 'H',
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
                                subscript: { value: 3, color: dracPurple },
                            },
                            {
                                index: 0,
                                eID: uuid(),
                                symbol: 'P',
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
                                symbol: 'K',
                                subscript: { value: 3, color: dracPurple },
                            },
                            {
                                index: 0,
                                eID: uuid(),
                                symbol: 'P',
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
                                symbol: 'N',
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                eID: uuid(),
                                index: 0,
                                symbol: 'H',
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
                                symbol: 'N',
                                subscript: { value: 1, color: dracPurple },
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
                                symbol: 'N',
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                eID: uuid(),
                                index: 0,
                                symbol: 'H',
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
                                symbol: 'N',
                                subscript: { value: 1, color: dracPurple },
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
    // BF3 + Li2SO3 --> B2(SO3)3 + LiF
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
                                symbol: 'B',
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                eID: uuid(),
                                index: 0,
                                symbol: 'F',
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
                                symbol: 'Li',
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
                                symbol: 'B',
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
                                symbol: 'Li',
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                index: 1,
                                eID: uuid(),
                                symbol: 'F',
                                subscript: { value: 1, color: dracPurple },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    // End of Formula
    // B2Br6 + HNO3 --> B(NO3)3 + HBr
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
                                symbol: 'B',
                                subscript: { value: 2, color: dracPurple },
                            },
                            {
                                eID: uuid(),
                                index: 0,
                                symbol: 'Br',
                                subscript: { value: 6, color: dracPurple },
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
                                symbol: 'N',
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
                                symbol: 'B',
                                subscript: { value: 1, color: dracPurple },
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
                                symbol: 'N',
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
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                index: 1,
                                eID: uuid(),
                                symbol: 'Br',
                                subscript: { value: 1, color: dracPurple },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    // End of Formula
    // (NH4)3PO4 + Pb(NO3)4 --> Pb3(PO4)4 + NH4NO3
    {
        formulaID: uuid(),
        reactants: [
            {
                coefficient: 1,
                formulaSection: 'REACTANTS',
                isHovered: false,
                chunks: [
                    NH4(3),
                    PO4(0)
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
                                symbol: 'Pb',
                                subscript: { value: 1, color: dracPurple },
                            },
                        ],
                    },
                    NO3(4)
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
                                symbol: 'Pb',
                                subscript: { value: 3, color: dracPurple },
                            },
                        ],
                    },
                    PO4(4)
                ],
            },
            {
                coefficient: 1,
                formulaSection: 'PRODUCTS',
                isHovered: false,
                chunks: [
                    NH4(0),
                    NO3(0)
                ],
            },
        ],
    },
    // End of Formula
    // SiCl4 + H2O --> SiO2 + HCl
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
                                symbol: 'Si',
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                eID: uuid(),
                                index: 0,
                                symbol: 'Cl',
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
                                symbol: 'H',
                                subscript: { value: 2, color: dracPurple },
                            },
                            {
                                index: 0,
                                eID: uuid(),
                                symbol: 'O',
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
                                symbol: 'Si',
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
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                index: 1,
                                eID: uuid(),
                                symbol: 'Cl',
                                subscript: { value: 1, color: dracPurple },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    // End of Formula
    // V2O5 + HCl --> VOCl3 + H2O
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
                                symbol: 'V',
                                subscript: { value: 2, color: dracPurple },
                            },
                            {
                                eID: uuid(),
                                index: 0,
                                symbol: 'O',
                                subscript: { value: 5, color: dracPurple },
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
                                symbol: 'V',
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                index: 0,
                                eID: uuid(),
                                symbol: 'O',
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
    // Zn + HCl --> ZnCl2 + H2
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
                                symbol: 'Zn',
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
                                symbol: 'Zn',
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                index: 1,
                                eID: uuid(),
                                symbol: 'Cl',
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
                        ],
                    },
                ],
            },
        ],
    },
    // End of Formula
    // As + NaOH --> Na3AsO3 + H2
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
                                symbol: 'As',
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
                                symbol: 'Na',
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                index: 0,
                                eID: uuid(),
                                symbol: 'O',
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                index: 0,
                                eID: uuid(),
                                symbol: 'H',
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
                                symbol: 'Na',
                                subscript: { value: 3, color: dracPurple },
                            },
                            {
                                index: 0,
                                eID: uuid(),
                                symbol: 'As',
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
                        ],
                    },
                ],
            },
        ],
    },
    // End of Formula
    // Au2S3 + H2 --> Au + H2S
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
                                symbol: 'Au',
                                subscript: { value: 2, color: dracPurple },
                            },
                            {
                                eID: uuid(),
                                index: 0,
                                symbol: 'S',
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
                                symbol: 'Au',
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
    // HClO4 + P4O10 --> H3PO4 + Cl2O7
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
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                eID: uuid(),
                                index: 0,
                                symbol: 'Cl',
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                eID: uuid(),
                                index: 0,
                                symbol: 'O',
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
                                symbol: 'P',
                                subscript: { value: 4, color: dracPurple },
                            },
                            {
                                index: 0,
                                eID: uuid(),
                                symbol: 'O',
                                subscript: { value: 10, color: dracPurple },
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
                                subscript: { value: 3, color: dracPurple },
                            },
                            {
                                index: 1,
                                eID: uuid(),
                                symbol: 'P',
                                subscript: { value: 1, color: dracPurple },
                            },
                            {
                                index: 1,
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
                                index: 0,
                                eID: uuid(),
                                symbol: 'Cl',
                                subscript: { value: 2, color: dracPurple },
                            },
                            {
                                index: 1,
                                eID: uuid(),
                                symbol: 'O',
                                subscript: { value: 7, color: dracPurple },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    // End of Formula
]
