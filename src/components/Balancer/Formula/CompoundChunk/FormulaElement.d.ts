type FormulaElementProps = {
    id: string;
    eID: string;
    symbol: ChemicalSymbol;
    chunkID: string;
    subscript: {
        value: number;
        color: string;
    };
};
export declare const FormulaElement: ({ id, eID, symbol, subscript, }: FormulaElementProps) => import("react/jsx-runtime").JSX.Element;
export {};
