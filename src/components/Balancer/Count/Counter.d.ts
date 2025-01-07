import React from 'react';
type Props = {
    formulaSection: FormulaSection;
};
type CounterProps = Props extends Record<string, never> ? React.FC<Record<string, never>> : React.FC<Props>;
export declare const Counter: CounterProps;
export {};
