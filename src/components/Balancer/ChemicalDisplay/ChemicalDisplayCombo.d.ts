import React from 'react';
type Props = {
    formulaSection: FormulaSection;
};
type ChemicalDisplayComboProps = Props extends Record<string, never> ? React.FC<Record<string, never>> : React.FC<Props>;
export declare const ChemicalDisplayCombo: ChemicalDisplayComboProps;
export {};
