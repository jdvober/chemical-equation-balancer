// custom-elements.d.ts or declarations.d.ts

import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
	namespace JSX {
		interface IntrinsicElements {
			// Define the 'math' element and its basic props
			math: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
				xmlns?: string;
			};
			// Add other necessary MathML elements as needed
			mi: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
			mo: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
			mn: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
			mrow: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
			msub: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
			msup: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
			// ... other MathML tags like msup, msub, mfrac, etc.
		}
	}
}
