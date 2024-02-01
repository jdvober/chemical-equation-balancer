import React from "react"

import { Box } from "@chakra-ui/react"

type ChemicalCompoundProps = { compound: ChemicalCompound }
export const ChemicalCompound: React.FC<ChemicalCompoundProps> = ({
	compound,
}) => {
	return compound.elements.map((e) => {
		return <Box>{e.symbol}</Box>
	})
}
