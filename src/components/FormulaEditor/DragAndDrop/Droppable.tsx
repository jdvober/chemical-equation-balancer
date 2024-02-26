import { Flex, Text } from "@chakra-ui/react"
import { useDroppable } from "@dnd-kit/core"

import { Draggable } from "./Draggable"

type DroppableArguments = {
	title: string
	items: any[]
}

export function Droppable({ title, items }: DroppableArguments) {
	const { isOver, setNodeRef } = useDroppable({
		id: title,
	})
	const style = {
		color: isOver ? "green" : undefined,
	}

	return (
		<Flex flex="3" padding="5" flexDirection="column" minH="10rem">
			<Text fontWeight="bold">{title}</Text>
			<Flex
				ref={setNodeRef}
				backgroundColor="gray.200"
				borderRadius="8"
				flex="1"
				padding="2"
				flexDirection="column"
			>
				{items.map(({ title: cardTitle }, key) => (
					<Draggable
						title={cardTitle}
						key={key}
						index={key}
						parent={title}
					/>
				))}
			</Flex>
		</Flex>
	)
}
