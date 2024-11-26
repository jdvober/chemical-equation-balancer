import { Flex, Text, VStack } from "@chakra-ui/react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

import { dracOrange, dracPurple } from "@/theme/colors/colors"
import { useMainStore } from "../../stores/MainStore"

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

	const formulaEditorChemicalSectionChunks = useMainStore(
		(state) => state.editorChemicalSectionChunks
	)

	const setFormulaEditorChemicalSectionChunks = useMainStore(
		(state) => state.setEditorChemicalSectionChunks
	)

	const removeElement = () => {
		console.log(eID)

		console.log(formulaEditorChemicalSectionChunks)
		console.log("Remove element?")

		//Determine Index of the element

		let indexes = { chunk: -1, element: -1 }

		formulaEditorChemicalSectionChunks.forEach((chunk, i) => {
			chunk.elements.forEach((element, j) => {
				element.eID === eID
					? (indexes = { chunk: i, element: j })
					: (indexes = { chunk: -1, element: -1 })
			})
		})

		if (indexes.chunk >= 0 && indexes.element >= 0) {
			let newChunks: CompoundChunk[] = []

			formulaEditorChemicalSectionChunks.forEach((chunk) => {
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

			setFormulaEditorChemicalSectionChunks(newChunks)

			// setFormulaEditorChemicalSectionChunks(
			// 	[...formulaEditorChemicalSectionChunks].filter((chunk) => {
			// 		chunk.elements[indexes.element].eID != eID
			// 	})
			// )
		} else {
			console.log(
				"eID was either not found or never set to a number besides -1"
			)
		}
	}

	const handleContextMenu = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		e.preventDefault()
		removeElement()
	}
	const handleClick = () => {
		setSelectedConstructionCompoundIDs(
			selectedConstructionCompoundIDs.includes(eID)
				? [...selectedConstructionCompoundIDs].filter((id) => {
						return id != eID
				  })
				: [...selectedConstructionCompoundIDs, eID]
		)
	}

	return (
		<Flex
			padding="3"
			backgroundColor={"none"}
			color={
				selectedConstructionCompoundIDs.includes(eID)
					? dracOrange
					: dracPurple
			}
			w={`3vw`}
			h={`3vw`}
			mb=".25vw"
			ml=".125vw"
			// mr={
			// 	formulaEditorChemicalSectionChunks[
			// 		formulaEditorChemicalSectionChunks.indexOf({
			// 			eID: eID,
			// 			index: index,
			// 			symbol: symbol as ChemicalSymbol,
			// 			subscript: subscript,
			// 			subscriptColor: dracPurple,
			// 		}) == -1
			// 			? 0
			// 			: formulaEditorChemicalSectionChunks.indexOf({
			// 					eID: eID,
			// 					index: index,
			// 					symbol: symbol as ChemicalSymbol,
			// 					subscript: subscript,
			// 					subscriptColor: dracPurple,
			// 			  })
			// 	].subscript <= 1
			// 		? "-1vw"
			// 		: ".125vw"
			// }
			align="center"
			justify={"center"}
			transform={style.transform}
			{...listeners}
			{...attributes}
			ref={setNodeRef}
			userSelect={"none"}
			onContextMenu={(e) => {
				handleContextMenu(e)
			}}
			onClick={() => {
				handleClick()
			}}
			_hover={{ transform: "scale(1.2)" }}
		>
			<VStack>
				<Flex
					direction={"row"}
					justifyContent={"center"} /*justify ==> along main axis*/
					alignItems={"center"} /*align ==> along cross axis*/
				>
					<Text
						fontSize={"3.75vh"}
						color={
							selectedConstructionCompoundIDs.includes(eID)
								? dracOrange
								: dracPurple
						}
						userSelect={"none"}
						justifySelf="center"
					>
						{symbol}
					</Text>
					<Text
						fontSize={"3.25vh"}
						color={
							selectedConstructionCompoundIDs.includes(eID)
								? dracOrange
								: dracPurple
						}
						// opacity={subscript === 1 ? "0%" : "100%"}
						userSelect={"none"}
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
