import {
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
} from '@/components/ui/select'
import { formulaToString } from '@/functions/GlobalFunctions.ts'
import { Box, createListCollection } from '@chakra-ui/react'
import React from 'react'
import { v4 as uuid } from 'uuid'
import { PresetFormulas } from '../../../stores/PresetFormulas.ts'

type Props = {}
type PresetSelectProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const PresetSelect: PresetSelectProps = () => {
	const presetForms = createListCollection({
		items: PresetFormulas.map((formula) => {
			return { label: formula.formulaID, value: formulaToString(formula) }
		}),
	})
	return (
		<Box className='PresetSelect'>
			<SelectRoot key={uuid()} collection={presetForms} w='15vw'>
				<SelectLabel color='comment'>Preset Formulas</SelectLabel>
				<SelectTrigger>
					<SelectValueText placeholder='Formula' />
					<SelectContent>
						{presetForms.items.map((form) => {
							return (
								<SelectItem item={form} key={form.value}>
									{form.value}
								</SelectItem>
							)
						})}
					</SelectContent>
				</SelectTrigger>
			</SelectRoot>
		</Box>
	)
}
