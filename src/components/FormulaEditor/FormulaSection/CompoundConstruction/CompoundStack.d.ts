import React from 'react';
type Props = {
    chunk: CompoundChunk;
    chunkIndex: number;
};
type CompoundStackProps = Props extends Record<string, never> ? React.FC<Record<string, never>> : React.FC<Props>;
export declare const CompoundStack: CompoundStackProps;
export {};
