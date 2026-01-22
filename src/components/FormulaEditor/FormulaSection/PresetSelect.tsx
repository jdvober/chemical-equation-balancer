import {
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
} from '@/components/ui/select'
import { formulaToString } from '@/functions/GlobalFunctions.ts'
import { useMainStore } from '@/stores/MainStore.ts'
import { Colors } from '@/theme/colors/colors.ts'
import { Box, createListCollection, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
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
			// return { label: formula.formulaID, value: formulaToString(formula) }
			return { label: formulaToString(formula), value: formula.formulaID }
		}),
	})

	const setReactants = useMainStore((state) => state.setReactants)
	const setProducts = useMainStore((state) => state.setProducts)

	const [value, setValue] = useState<string[]>([])

	return (
		<Box className='PresetSelect'>
			<SelectRoot
				key={uuid()}
				collection={presetForms}
				w='15vw'
				value={value}
				onValueChange={(e) => {
					setValue(e.value)
					// Find the matching preset formula based on it's ID, and then assign the reactants and products to the active reactants and products
					PresetFormulas.forEach((formula) => {
						if (formula.formulaID === e.value[0]) {
							setReactants(formula.reactants)
							setProducts(formula.products)
							return
						}
					})
				}}
			>
				<SelectLabel color='comment'>Preset Formulas</SelectLabel>
				<SelectTrigger>
					<SelectValueText
						placeholder='Formula'
						color={Colors.pink.DEFAULT.value}
					/>
					<SelectContent>
						{presetForms.items.map((form) => {
							return (
								<SelectItem item={form} key={form.label}>
									{form.label.split('').map((char) => {
										if (char >= '0' && char <= '9') {
											// Is a number
											return <sub>{char}</sub>
										}
										return <Text>{char}</Text>
									})}
								</SelectItem>
							)
						})}
					</SelectContent>
				</SelectTrigger>
			</SelectRoot>
		</Box>
	)
}
