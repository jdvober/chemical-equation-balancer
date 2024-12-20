import React from 'react'
import { v4 as uuid } from 'uuid'

import { Grid } from '@chakra-ui/react'

import { PeriodicTableDraggableElement } from '@/components/FormulaEditor/PeriodicTableSection/PeriodicTableDraggableElement'
import { Elements } from '../../../stores/elements.ts'

type Props = {}
type EditorPeriodicTableSectionProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const EditorPeriodicTableSection: EditorPeriodicTableSectionProps =
	() => {
		return (
			<Grid
				key={uuid()}
				templateColumns="repeat(18, 1fr)"
				templateRows="repeat(10, 1fr)"
				alignSelf="center"
				margin="auto"
				justifySelf="center"
				gap=".7rem"
			>
				{Elements.map((element) => {
					const uniqueID = `${element}-${uuid()}`
					return (
						<PeriodicTableDraggableElement
							symbol={element}
							id={uniqueID}
							parent={'FormulaEditorElementSection'}
							key={uuid()}
						/>
					)
				})}
			</Grid>
		)
	}
