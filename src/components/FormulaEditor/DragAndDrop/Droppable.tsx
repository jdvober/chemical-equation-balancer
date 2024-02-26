import { v4 as uuid } from "uuid"

import { useDroppable } from "@dnd-kit/core"

import { Draggable } from "./Draggable"

type DroppableArguments = {
	droppableAreaId: string | number
	parent: any
}
export function Droppable({ droppableAreaId: id, parent }: DroppableArguments) {
	const { isOver, setNodeRef } = useDroppable({
		id: id,
	})
	const style = {
		color: isOver ? "green" : undefined,
	}

	return (
		<div ref={setNodeRef} style={style}>
			{parent === id ? (
				<Draggable id={uuid()} disabled={false} />
			) : (
				`Droppable-${id}`
			)}
		</div>
	)
}
