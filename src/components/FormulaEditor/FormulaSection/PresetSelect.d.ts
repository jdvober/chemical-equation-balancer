import React from 'react';
type Props = {};
type PresetSelectProps = Props extends Record<string, never> ? React.FC<Record<string, never>> : React.FC<Props>;
export declare const PresetSelect: PresetSelectProps;
export {};
