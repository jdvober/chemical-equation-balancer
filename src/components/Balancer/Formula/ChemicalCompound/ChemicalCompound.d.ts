import React from 'react';
type ChemicalCompoundProps = {
    compound: ChemicalCompound;
    formulaSection: FormulaSection;
    index: number;
    includeSymbols: boolean;
    location: CompoundLocation;
};
export declare const ChemicalCompound: React.FC<ChemicalCompoundProps>;
export {};
