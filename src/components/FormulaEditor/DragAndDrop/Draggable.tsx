import { Box } from "@chakra-ui/react"
import { useDraggable } from "@dnd-kit/core"

type DraggableArguments = {
	id: string | number
	disabled: boolean
	// data: Record<string, any>
}

export const Draggable: React.FC<DraggableArguments> = ({
	id,
	disabled,
}: // data,
DraggableArguments) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: id,
	})
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined

	return (
		<button ref={setNodeRef} style={style} {...listeners} {...attributes}>
			<Box border="1px solid orange" color="dracula.dracFG">
				{disabled ? "Disabled" : ""}
				{"Draggable"}
			</Box>
		</button>
	)
}
