import { NavLinkButton } from '@/components/ui/NavLinkButton'
import { dracCurrentLine, dracFG } from '@/theme/colors/colors'
import { Center, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}
type EditFormulaButtonProps =
    Props extends Record<string, never>
    ? React.FC<Record<string, never>>
    : React.FC<Props>

export const EditFormulaButton: EditFormulaButtonProps = () => {
    return (
        <NavLinkButton
            to={'/editor'}
            bg={dracCurrentLine}
            color={dracFG}
            width="6rem"
            height="5rem"
            css={{ transition: 'all 0.1s ease-in-out' }}
            _hover={{
                color: 'red',
                boxShadow: `0 5px 15px purple`,
            }}
            borderRadius=".5rem"
            ml="1rem"
        >
            <SimpleGrid>
                <GridItem>
                    <Center>
                        <Text fontSize="1.25rem">Change</Text>
                    </Center>
                </GridItem>
                <GridItem>
                    <Center>
                        <Text fontSize="1.25rem">Formula</Text>
                    </Center>
                </GridItem>
            </SimpleGrid>
        </NavLinkButton>
    )
}
