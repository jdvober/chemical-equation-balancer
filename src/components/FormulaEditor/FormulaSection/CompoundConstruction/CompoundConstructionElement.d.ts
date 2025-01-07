type CompoundConstructionElementProps = {
    id: string;
    eID: string;
    symbol: ChemicalSymbol;
    chunkID: string;
    subscript: {
        value: number;
        color: string;
    };
};
export declare const CompoundConstructionElement: ({ id, eID, symbol, chunkID, subscript, }: CompoundConstructionElementProps) => import("react/jsx-runtime").JSX.Element;
export {};
