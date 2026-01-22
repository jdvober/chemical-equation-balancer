import React from 'react'

import { GridItem, SimpleGrid } from '@chakra-ui/react'

// If values, fill in the object below
//type ChemicalDisplayProps = {}
import { ChemicalDisplayCombo } from '@/components/Balancer/ChemicalDisplay/ChemicalDisplayCombo'

// If no values, use this:
type ChemicalDisplayProps = Record<string, never>

export const ChemicalDisplay: React.FC<ChemicalDisplayProps> = () => {
    return (
        <SimpleGrid w="96vw" columns={2} gap={'2vw'}>
            <GridItem
                colSpan={1}
                border={`1px solid`}
                borderColor="cyan"
                p="2vh"
                borderRadius="1vw"
            >
                <ChemicalDisplayCombo formulaSection="REACTANTS" />
            </GridItem>
            <GridItem
                colSpan={1}
                border={`1px solid`}
                borderColor="cyan"
                p="2vh"
                borderRadius="1vw"
            >
                <ChemicalDisplayCombo formulaSection="PRODUCTS" />
            </GridItem>
        </SimpleGrid>
    )
}
