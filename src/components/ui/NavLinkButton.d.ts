import React from "react";
type Props = {
    to: string;
    children?: React.ReactNode;
    [key: string]: any;
};
type NavLinkButtonProps = Props extends Record<string, never> ? React.FC<Record<string, never>> : React.FC<Props>;
export declare const NavLinkButton: NavLinkButtonProps;
export {};
