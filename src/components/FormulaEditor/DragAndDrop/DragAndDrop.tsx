import { useState } from "react"
import { v4 as uuid } from "uuid"

import { Box } from "@chakra-ui/react"
import { DndContext } from "@dnd-kit/core"

import { Draggable } from "./Draggable"
import { Droppable } from "./Droppable"

export function DragAndDrop() {
	const droppableAreas = ["A", "B", "C"]
	const [parent, setParent] = useState(null)
	const draggableMarkup = <Draggable id={uuid().slice(-4)} disabled={false} />

	return (
		<DndContext onDragEnd={handleDragEnd}>
			{parent === null ? draggableMarkup : null}

			{droppableAreas.map((droppableAreaId) => (
				// We updated the Droppable component so it would accept an `id`
				// prop and pass it to `useDroppable`
				<Box border={"1px solid blue"} color="dracula.dracFG">
					<Droppable
						key={droppableAreaId}
						droppableAreaId={droppableAreaId}
						parent={parent}
					/>
				</Box>
			))}
		</DndContext>
	)

	function handleDragEnd(event: any) {
		const { over } = event

		// If the item is dropped over a container, set it as the parent
		// otherwise reset the parent to `null`
		setParent(over ? over.id : null)
	}
}
