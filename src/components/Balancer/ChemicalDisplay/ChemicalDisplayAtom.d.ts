import React from 'react';
type Props = {
    item: ChemicalCompound;
};
type ChemicalDisplayAtomProps = Props extends Record<string, never> ? React.FC<Record<string, never>> : React.FC<Props>;
export declare const ChemicalDisplayAtom: ChemicalDisplayAtomProps;
export {};
