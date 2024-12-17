import { Flex, Text, VStack } from '@chakra-ui/react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

import { dracOrange, dracPurple } from '@/theme/colors/colors'
import { useMainStore } from '../../../../stores/MainStore'

// If no values, use this:
// type CompoundConstructionElementProps = Record<string, never>
// If values, fill in the object below
type CompoundConstructionElementProps = {
	id: string
	eID: string
	symbol: ChemicalSymbol
	chunkID: string
	subscript: { value: number; color: string }
}

export const CompoundConstructionElement = ({
	id,
	eID,
	symbol,
	chunkID,
	subscript,
}: CompoundConstructionElementProps) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: id,
		data: {
			symbol: symbol,
			parent: parent,
		},
	})

	const style = {
		transform: CSS.Translate.toString(transform),
	}
	const selectedConstructionCompoundIDs = useMainStore(
		(state) => state.selectedConstructionCompoundIDs
	)
	const setSelectedConstructionCompoundIDs = useMainStore(
		(state) => state.setSelectedConstructionCompoundIDs
	)

	const editorConstructionSectionChunks = useMainStore(
		(state) => state.editorConstructionSectionChunks
	)

	const setEditorConstructionSectionChunks = useMainStore(
		(state) => state.setEditorConstructionSectionChunks
	)

	const removeElement = () => {
		console.log(chunkID, eID)

		console.log(editorConstructionSectionChunks)
		console.log('Remove element?')

		//Determine Index of the element

		let indexes = { chunk: -1, element: -1 }

		editorConstructionSectionChunks.forEach((chunk, i) => {
			chunk.elements.forEach((element, j) => {
				element.eID === eID
					? (indexes = { chunk: i, element: j })
					: (indexes = { chunk: -1, element: -1 })
			})
		})

		if (indexes.chunk >= 0 && indexes.element >= 0) {
			let newChunks: CompoundChunk[] = []

			editorConstructionSectionChunks.forEach((chunk) => {
				let newElements: ChemicalElement[] = []
				chunk.elements.forEach((element) => {
					if (element.eID != eID) {
						newElements.push(element)
					}
				})
				newChunks.push({
					elements: newElements,
					parenthesesSubscript: chunk.parenthesesSubscript,
					chunkID: chunk.chunkID,
				})
			})

			setEditorConstructionSectionChunks(newChunks)
		} else {
			console.log(
				'eID was either not found or never set to a number besides -1'
			)
		}
	}

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.nativeEvent.button === 0) {
			// Handling Left Click
			setSelectedConstructionCompoundIDs(
				selectedConstructionCompoundIDs.includes(eID)
					? [...selectedConstructionCompoundIDs].filter((id) => {
							return id != eID
						})
					: [...selectedConstructionCompoundIDs, eID]
			)
		} else if (e.nativeEvent.button === 2) {
			// Handling Right Click
			e.preventDefault()
			removeElement()
		}
	}

	return (
		<Flex
			backgroundColor={'none'}
			color={
				selectedConstructionCompoundIDs.includes(eID)
					? dracOrange
					: dracPurple
			}
			align="center"
			justify={'center'}
			transform={style.transform}
			{...listeners}
			{...attributes}
			ref={setNodeRef}
			onContextMenu={(e) => {
				handleClick(e)
			}}
			onClick={(e) => {
				handleClick(e)
			}}
		>
			<VStack>
				<Flex
					direction={'row'}
					justifyContent={'center'} /*justify ==> along main axis*/
					alignItems={'center'} /*align ==> along cross axis*/
				>
					<Text
						fontSize={'2rem'}
						color={
							selectedConstructionCompoundIDs.includes(eID)
								? dracOrange
								: dracPurple
						}
						justifySelf="center"
					>
						{symbol}
					</Text>
					<Text
						fontSize={'2rem'}
						color={
							selectedConstructionCompoundIDs.includes(eID)
								? dracOrange
								: dracPurple
						}
					>
						<sub
							color={
								selectedConstructionCompoundIDs.includes(eID)
									? dracOrange
									: dracPurple
							}
						>
							{subscript.value > 1 ? subscript.value : null}
						</sub>
					</Text>
				</Flex>
			</VStack>
		</Flex>
	)
}
