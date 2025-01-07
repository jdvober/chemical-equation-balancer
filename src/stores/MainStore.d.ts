type State = {
    formula: {
        reactants: ChemicalReactant[];
        products: ChemicalProduct[];
    };
    formulaHeightEM: number;
    countList: {
        symbol: ChemicalSymbol;
        reactantCount: number;
        productCount: number;
    }[];
    formulaEditorActive: boolean;
    elements: ChemicalSymbol[][];
    subscriptColor: string;
    editorConstructionSectionChunks: CompoundChunk[];
    reactantAndProductElementListsMatch: boolean;
    selectedConstructionCompoundIDs: string[];
    animatedCompoundConstructionChunkIDs: {
        latest: string;
        history: string[];
    };
};
type Action = {
    setReactants: (newReactants: ChemicalReactant[] | ChemicalCompound[]) => void;
    setProducts: (newFormula: ChemicalProduct[] | ChemicalCompound[]) => void;
    setCoefficient: (formulaSection: FormulaSection, index: number, newCoefficient: number) => void;
    setCountList: (newCountList: ElementCountList) => void;
    setFormulaEditorActive: (isActive: boolean) => void;
    setConstructionSelectionItemSubscriptColor: (newSubscriptColor: string, chunkIndex: number, elementIndex: number) => void;
    setEditorConstructionSectionChunks: (newFormulaEditorConstructionSectionChunks: CompoundChunk[]) => void;
    setEditorConstructionSectionItemSubscriptValue: (newSubscriptValue: number, chunkIndex: number, elementIndex: number) => void;
    setHoverStatus: (formulaSection: FormulaSection, index: number, newHoverStatus: boolean) => void;
    setReactantAndProductElementListsMatch: (newBoolean: boolean) => void;
    setSelectedConstructionCompoundIDs: (selectedCompounds: string[]) => void;
    setAnimatedChunkIDs: (newChunkIDsList: {
        latest: string;
        history: string[];
    }) => void;
};
export declare const useMainStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<State & Action>, "setState"> & {
    setState(nextStateOrUpdater: (State & Action) | Partial<State & Action> | ((state: {
        formula: {
            reactants: {
                coefficient: number;
                formulaSection: FormulaSection;
                isHovered: boolean;
                chunks: {
                    parenthesesSubscript: number;
                    elements: {
                        eID: string;
                        index: number;
                        symbol: ChemicalSymbol;
                        subscript: {
                            value: number;
                            color: string;
                        };
                    }[];
                    chunkID: string;
                }[];
            }[];
            products: {
                coefficient: number;
                formulaSection: FormulaSection;
                isHovered: boolean;
                chunks: {
                    parenthesesSubscript: number;
                    elements: {
                        eID: string;
                        index: number;
                        symbol: ChemicalSymbol;
                        subscript: {
                            value: number;
                            color: string;
                        };
                    }[];
                    chunkID: string;
                }[];
            }[];
        };
        formulaHeightEM: number;
        countList: {
            symbol: ChemicalSymbol;
            reactantCount: number;
            productCount: number;
        }[];
        formulaEditorActive: boolean;
        elements: ChemicalSymbol[][];
        subscriptColor: string;
        editorConstructionSectionChunks: {
            parenthesesSubscript: number;
            elements: {
                eID: string;
                index: number;
                symbol: ChemicalSymbol;
                subscript: {
                    value: number;
                    color: string;
                };
            }[];
            chunkID: string;
        }[];
        reactantAndProductElementListsMatch: boolean;
        selectedConstructionCompoundIDs: string[];
        animatedCompoundConstructionChunkIDs: {
            latest: string;
            history: string[];
        };
        setReactants: (newReactants: ChemicalReactant[] | ChemicalCompound[]) => void;
        setProducts: (newFormula: ChemicalProduct[] | ChemicalCompound[]) => void;
        setCoefficient: (formulaSection: FormulaSection, index: number, newCoefficient: number) => void;
        setCountList: (newCountList: ElementCountList) => void;
        setFormulaEditorActive: (isActive: boolean) => void;
        setConstructionSelectionItemSubscriptColor: (newSubscriptColor: string, chunkIndex: number, elementIndex: number) => void;
        setEditorConstructionSectionChunks: (newFormulaEditorConstructionSectionChunks: CompoundChunk[]) => void;
        setEditorConstructionSectionItemSubscriptValue: (newSubscriptValue: number, chunkIndex: number, elementIndex: number) => void;
        setHoverStatus: (formulaSection: FormulaSection, index: number, newHoverStatus: boolean) => void;
        setReactantAndProductElementListsMatch: (newBoolean: boolean) => void;
        setSelectedConstructionCompoundIDs: (selectedCompounds: string[]) => void;
        setAnimatedChunkIDs: (newChunkIDsList: {
            latest: string;
            history: string[];
        }) => void;
    }) => void), shouldReplace?: boolean | undefined): void;
}>;
export {};
