import { Flex, Text, VStack } from "@chakra-ui/react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

import { useMainStore } from "@/stores/MainStore"
import { dracOrange, dracPurple } from "@/theme/colors/colors"

// If no values, use this:
// type CompoundConstructionElementProps = Record<string, never>
// If values, fill in the object below
type FormulaElementProps = {
	id: string
	eID: string
	symbol: ChemicalSymbol
	chunkID: string
	subscript: { value: number; color: string }
}

export const FormulaElement = ({
	id,
	eID,
	symbol,
	subscript,
}: FormulaElementProps) => {
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

	return (
		<Flex
			backgroundColor={"none"}
			color={
				selectedConstructionCompoundIDs.includes(eID)
					? dracOrange
					: dracPurple
			}
			align="center"
			justify={"center"}
			transform={style.transform}
			{...listeners}
			{...attributes}
			ref={setNodeRef}
		>
			<VStack>
				<Flex
					direction={"row"}
					justifyContent={"center"} /*justify ==> along main axis*/
					alignItems={"center"} /*align ==> along cross axis*/
				>
					<Text
						fontSize={"2rem"}
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
						fontSize={"2rem"}
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
