import { useState } from "react"

import { Flex } from "@chakra-ui/react"
import { DndContext, rectIntersection } from "@dnd-kit/core"

import AddCard from "./AddCard"
import { Droppable } from "./Droppable"

/* The implementation details of <Item> and <ScrollableList> are not
 * relevant for this example and are therefore omitted. */

export const DragAndDrop = () => {
	const [todoItems, setTodoItems] = useState<Array<any>>([])
	const [doneItems, setDoneItems] = useState<Array<any>>([])
	const [inProgressItems, setInProgressItems] = useState<Array<any>>([])
	const [uItems, setuItems] = useState<Array<any>>([])
	const addNewCard = (title: string) => {
		setuItems([...uItems, { title }])
	}

	return (
		<DndContext
			collisionDetection={rectIntersection}
			onDragEnd={(e) => {
				const container = e.over?.id
				const title = e.active.data.current?.title ?? ""
				const index = e.active.data.current?.index ?? 0
				const parent = e.active.data.current?.parent ?? "ToDo"
				if (container === "ToDo") {
					setTodoItems([...todoItems, { title }])
				} else if (container === "Done") {
					setDoneItems([...doneItems, { title }])
				} else if (container === "Unassigned") {
					setuItems([...uItems, { title }])
				} else {
					setInProgressItems([...inProgressItems, { title }])
				}
				if (parent === "ToDo") {
					setTodoItems([
						...todoItems.slice(0, index),
						...todoItems.slice(index + 1),
					])
				} else if (parent === "Done") {
					setDoneItems([
						...doneItems.slice(0, index),
						...doneItems.slice(index + 1),
					])
				} else if (parent === "Unassigned") {
					setuItems([
						...uItems.slice(0, index),
						...uItems.slice(index + 1),
					])
				} else {
					setInProgressItems([
						...inProgressItems.slice(0, index),
						...inProgressItems.slice(index + 1),
					])
				}
			}}
		>
			<Flex flexDirection="column">
				<AddCard addCard={addNewCard} />
				<Flex flex="3">
					<Droppable title="ToDo" items={todoItems} />
					<Droppable title="In Progress" items={inProgressItems} />
					<Droppable title="Done" items={doneItems} />
					<Droppable title="Unassigned" items={uItems} />
				</Flex>
			</Flex>
		</DndContext>
	)

	// function handleDragStart(event: any) {
	// 	setActiveId(event.active.id)
	// }

	// function handleDragEnd() {
	// 	setActiveId(null)
	// }
}
