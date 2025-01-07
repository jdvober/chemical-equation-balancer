type EditorFormulaElementProps = {
    id: string;
    eID: string;
    symbol: ChemicalSymbol;
    chunkID: string;
    subscript: {
        value: number;
        color: string;
    };
};
export declare const EditorFormulaElement: ({ id, eID, symbol, subscript, }: EditorFormulaElementProps) => import("react/jsx-runtime").JSX.Element;
export {};
