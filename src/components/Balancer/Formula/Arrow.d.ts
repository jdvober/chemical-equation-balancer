import React from 'react';
type Props = {};
type ArrowProps = Props extends Record<string, never> ? React.FC<Record<string, never>> : React.FC<Props>;
export declare const Arrow: ArrowProps;
export {};
