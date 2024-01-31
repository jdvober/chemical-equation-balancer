import React from "react"

import { Box } from "@chakra-ui/react"

type ChemicalElementProps = { chemicalElement: string }
export const ChemicalElement: React.FC<ChemicalElementProps> = ({
	chemicalElement,
}) => {
	return <Box className="ChemicalElement">{chemicalElement}</Box>
}
