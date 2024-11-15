import { useState } from "react"

import { Flex, Text, VStack } from "@chakra-ui/react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

import { useMainStore } from "../../stores/MainStore"

export const DraggableElement = ({
	id,
	eID,
	index,
	symbol,
	parent,
	subscript,
	subscriptColor,
}: {
	id: string
	eID: string
	index: number
	symbol: ChemicalSymbol | "" | "🚫"
	parent: string
	subscript: number
	subscriptColor:
		| "dracula.dracPurple"
		| "dracula.dracGreen"
		| "dracula.dracRed"
}) => {
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
	const [col, setCol] = useState("dracula.dracFG")
	const [sym, setSym] = useState(symbol)

	const formulaEditorChemicalSectionItems = useMainStore(
		(state) => state.formulaEditorChemicalSectionItems
	)

	const setFormulaEditorChemicalSectionItems = useMainStore(
		(state) => state.setFormulaEditorChemicalSectionItems
	)
	// const [position, setPosition] = useState({ x: 0, y: 0 })
	const [position, setPosition] = useState({
		startX: 0,
		startY: 0,
		endX: 0,
		endY: 0,
	})

	const handleMouseDown = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		// const startX = e.clientX - position.x
		// const startY = e.clientY - position.y

		setPosition({
			startX: e.clientX,
			startY: e.clientY,
			endX: position.endX,
			endY: position.endY,
		})
		// const handleMouseMove = (e: any) => {
		// 	setPosition({
		// 		x: e.clientX - startX,
		// 		y: e.clientY - startY,
		// 	})
		// }

		// const handleMouseUp = () => {
		// 	window.removeEventListener("mousemove", handleMouseMove)
		// 	window.removeEventListener("mouseup", handleMouseUp)
		// }

		// window.addEventListener("mousemove", handleMouseMove)
		// window.addEventListener("mouseup", handleMouseUp)
	}

	const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setPosition({
			startX: position.startX,
			startY: position.startY,
			endX: e.clientX,
			endY: e.clientY,
		})
		if (parent === "FormulaEditorElementSection") {
			// If you haven't dragged too far
			if (
				Math.abs(position.startX - position.endX) < 30 &&
				Math.abs(position.startY - position.endY) < 30
			) {
				console.log(eID)
				setFormulaEditorChemicalSectionItems([
					...formulaEditorChemicalSectionItems,
					{
						eID: eID,
						index: formulaEditorChemicalSectionItems.length,
						symbol: symbol,
						subscript: 1,
						subscriptColor: "dracula.dracPurple",
					},
				] as ChemicalSectionItem[])
			}
			return
		} else {
			console.log("Remove element?")
			setFormulaEditorChemicalSectionItems(
				[...formulaEditorChemicalSectionItems].filter((item) => {
					return item.eID != eID
				})
			)
		}
		setPosition({
			startX: 0,
			startY: 0,
			endX: 0,
			endY: 0,
		})
	}

	const handleMouseEnter = () => {
		if (parent === "FormulaEditorChemicalSection") {
			// console.log(`Enter ${symbol}`)
			setSym("🚫")
			console.log(eID)
		} else {
			setCol("dracula.dracRed")
		}
	}
	const handleMouseLeave = () => {
		if (parent === "FormulaEditorChemicalSection") {
			// console.log(`Leave ${symbol}`)
			setSym(symbol)
			setCol("purple")
		} else {
			setCol("dracula.dracFG")
		}
	}

	const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
		if (e.deltaY < 0) {
			// Increment
			console.log(e.deltaY)
			// let newItems = formulaEditorChemicalSectionItems

			// setFormulaEditorChemicalSectionItems()

			return
		}
		// Decrement
		console.log(e.deltaY)
	}

	return (
		<Flex
			padding="3"
			backgroundColor={
				symbol === "" || parent !== "FormulaEditorElementSection"
					? ""
					: col
			}
			color={
				parent !== "FormulaEditorChemicalSection"
					? "dracula.dracCurrentLine"
					: "dracula.dracPurple"
			}
			w={`3vw`}
			h={`3vw`}
			mb=".25vw"
			ml=".125vw"
			mr={
				parent === "FormulaEditorChemicalSection"
					? formulaEditorChemicalSectionItems[
							formulaEditorChemicalSectionItems.indexOf({
								eID: eID,
								index: index,
								symbol: symbol as ChemicalSymbol,
								subscript: subscript,
								subscriptColor: "dracula.dracPurple",
							}) == -1
								? 0
								: formulaEditorChemicalSectionItems.indexOf({
										eID: eID,
										index: index,
										symbol: symbol as ChemicalSymbol,
										subscript: subscript,
										subscriptColor: "dracula.dracPurple",
								  })
					  ].subscript <= 1
						? "-1vw"
						: ".125vw"
					: ".125vw"
			}
			align="center"
			justify={"center"}
			borderRadius="8"
			border={
				symbol === "" || parent === "FormulaEditorChemicalSection"
					? ""
					: "2px solid gray.500"
			}
			boxShadow={
				symbol === "" || parent === "FormulaEditorChemicalSection"
					? ""
					: "0px 0px 5px 2px #2121213b"
			}
			transform={style.transform}
			{...listeners}
			{...attributes}
			ref={setNodeRef}
			userSelect={"none"}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseDown={(e) => {
				handleMouseDown(e)
			}}
			onMouseUp={(e) => {
				handleMouseUp(e)
			}}
			onWheel={(e) => {
				handleWheel(e)
			}}
		>
			<VStack>
				<Flex
					direction={"row"}
					justifyContent={"center"} /*justify ==> along main axis*/
					alignItems={"center"} /*align ==> along cross axis*/
				>
					<Text
						fontSize={
							parent === "FormulaEditorChemicalSection"
								? "2vw"
								: "1.5vw"
						}
						color={
							parent === "FormulaEditorChemicalSection"
								? "dracula.dracPurple"
								: "dracula.dracBG"
						}
						userSelect={"none"}
						justifySelf="center"
					>
						{sym}
					</Text>
					<Text
						fontSize={
							parent === "FormulaEditorChemicalSection"
								? "2vw"
								: "1.5vw"
						}
						color={subscriptColor}
						opacity={subscript === 1 ? "0%" : "100%"}
						userSelect={"none"}
					>
						{parent === "FormulaEditorChemicalSection" &&
						sym === symbol ? (
							<sub>
								{
									formulaEditorChemicalSectionItems[index]
										.subscript
								}
							</sub>
						) : (
							""
						)}
					</Text>
				</Flex>
			</VStack>
		</Flex>
	)
}
