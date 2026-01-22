import React from 'react';
type Props = {
    item: ChemicalCompound;
};
type ChemicalDisplayFormulaProps = Props extends Record<string, never> ? React.FC<Record<string, never>> : React.FC<Props>;
export declare const ChemicalDisplayFormula: ChemicalDisplayFormulaProps;
export {};
