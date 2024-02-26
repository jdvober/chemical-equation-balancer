// import { Box } from "@chakra-ui/react"
// import { useDraggable } from "@dnd-kit/core"

// type DraggableArguments = {
// 	id: string | number
// 	disabled: boolean
// 	// data: Record<string, any>
// }

// export const Draggable: React.FC<DraggableArguments> = ({
// 	id,
// 	disabled,
// }: // data,
// DraggableArguments) => {
// 	const { attributes, listeners, setNodeRef, transform } = useDraggable({
// 		id: id,
// 	})
// 	const style = transform
// 		? {
// 				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
// 		  }
// 		: undefined

// 	return (
// 		<button ref={setNodeRef} style={style} {...listeners} {...attributes}>
// 			<Box border="1px solid orange" color="dracula.dracFG">
// 				{disabled ? "Disabled" : ""}
// 				{"Draggable"}
// 			</Box>
// 		</button>
// 	)
// }

import { Flex, Text } from "@chakra-ui/react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

export const Draggable = ({
	title,
	index,
	parent,
}: {
	title: string
	index: number
	parent: string
}) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: title,
		data: {
			title,
			index,
			parent,
		},
	})
	const style = {
		transform: CSS.Translate.toString(transform),
	}
	return (
		<Flex
			padding="3"
			backgroundColor="white"
			margin="2"
			borderRadius="8"
			border="2px solid gray.500"
			boxShadow="0px 0px 5px 2px #2121213b"
			transform={style.transform}
			{...listeners}
			{...attributes}
			ref={setNodeRef}
		>
			<Text>{title}</Text>
		</Flex>
	)
}
