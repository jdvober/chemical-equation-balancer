import "./App.css"

import { ChemicalElement } from "./components/ChemicalElement/ChemicalElement"

export const App = () => {
	return (
		<div>
			<ChemicalElement chemicalElement="H" subscript={2} />
		</div>
	)
}
