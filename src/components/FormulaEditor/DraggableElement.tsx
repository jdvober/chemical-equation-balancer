import { useState } from "react"
import { v4 as uuid } from "uuid"

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
}: {
	id: string
	eID: string
	index: number
	symbol: ChemicalSymbol | ""
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
	const [col2, setCol2] = useState("dracula.dracPurple")

	const formulaEditorChemicalSectionItems = useMainStore(
		(state) => state.editorChemicalSectionItems
	)

	const setFormulaEditorChemicalSectionItems = useMainStore(
		(state) => state.setEditorChemicalSectionItems
	)

	const handleClick = () => {
		if (parent === "FormulaEditorElementSection") {
			console.log(eID)
			setFormulaEditorChemicalSectionItems([
				...formulaEditorChemicalSectionItems,
				{
					eID: uuid(),
					index: formulaEditorChemicalSectionItems.length,
					symbol: symbol,
					subscript: 1,
					subscriptColor: "dracula.dracPurple",
				},
			] as ChemicalSectionItem[])
			console.log(formulaEditorChemicalSectionItems)
		} else {
			console.log(eID)

			console.log(formulaEditorChemicalSectionItems)
			console.log("Remove element?")
			setFormulaEditorChemicalSectionItems(
				[...formulaEditorChemicalSectionItems].filter((item) => {
					return item.eID != eID
				})
			)
		}
	}

	const handleMouseEnter = () => {
		if (parent === "FormulaEditorElementSection") {
			setCol("dracula.dracRed")
		} else if (parent === "FormulaEditorChemicalSection") {
			setCol2("dracula.dracRed")
		}
	}
	const handleMouseLeave = () => {
		if (parent === "FormulaEditorElementSection") {
			setCol("dracula.dracFG")
		} else if (parent === "FormulaEditorChemicalSection") {
			setCol2("dracula.dracPurple")
		}
	}

	const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
		if (e.deltaY < 0) {
			// Increment
			let newItems = [...formulaEditorChemicalSectionItems]
			let updatedItem = formulaEditorChemicalSectionItems.find((item) => {
				console.log(`${item.eID} === ${eID}`)
				return item.eID === eID
			})
			if (updatedItem != undefined) {
				newItems[
					formulaEditorChemicalSectionItems.indexOf(updatedItem)
				] = {
					eID: eID,
					index: index,
					symbol: symbol as ChemicalSymbol,
					subscript: subscript <= 98 ? subscript + 1 : 99,
					subscriptColor: "dracula.dracPurple",
				}
			}
			setFormulaEditorChemicalSectionItems(newItems)
			return
		}
		// Decrement
		let newItems = [...formulaEditorChemicalSectionItems]
		let updatedItem = formulaEditorChemicalSectionItems.find((item) => {
			console.log(`${item.eID} === ${eID}`)
			return item.eID === eID
		})
		if (updatedItem != undefined) {
			newItems[formulaEditorChemicalSectionItems.indexOf(updatedItem)] = {
				eID: eID,
				index: index,
				symbol: symbol as ChemicalSymbol,
				subscript: subscript >= 2 ? subscript - 1 : 1,
				subscriptColor: "dracula.dracPurple",
			}
		}
		setFormulaEditorChemicalSectionItems(newItems)
		return
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
					: col2
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
			borderRadius="lg"
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
			onClick={() => {
				handleClick()
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
								? col2
								: "dracula.dracBG"
						}
						userSelect={"none"}
						justifySelf="center"
					>
						{symbol}
					</Text>
					<Text
						fontSize={
							parent === "FormulaEditorChemicalSection"
								? "2vw"
								: "1.5vw"
						}
						color={col2}
						opacity={subscript === 1 ? "0%" : "100%"}
						userSelect={"none"}
					>
						{parent === "FormulaEditorChemicalSection" ? (
							<sub color={col2}>
								{
									formulaEditorChemicalSectionItems[index]
										.subscript
								}
							</sub>
						) : null}
					</Text>
				</Flex>
			</VStack>
		</Flex>
	)
}
