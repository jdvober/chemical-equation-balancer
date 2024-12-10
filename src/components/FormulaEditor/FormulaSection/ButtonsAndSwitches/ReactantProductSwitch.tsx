import React, { useState } from "react"

import { useMainStore } from "@/stores/MainStore"
import { Flex, Text } from "@chakra-ui/react"
import { motion } from "motion/react"
import "../../../../customCSS/ReactantProductSwitch.css"

// If no values, use this:
type ReactantProductSwitchProps = Record<string, never>
// If values, fill in the object below
//type ReactantProductSwitchProps = {}

export const ReactantProductSwitch: React.FC<
	ReactantProductSwitchProps
> = () => {
	const setEditFormulaSection = useMainStore(
		(state) => state.setEditFormulaSection
	)

	const editFormulaSection = useMainStore((state) => state.editFormulaSection)

	const spring = {
		type: "spring",
		stiffness: 700,
		damping: 30,
	}

	const [isOn, setIsOn] = useState(false)

	const toggleSwitch = () => {
		setIsOn(!isOn)
		setEditFormulaSection(
			editFormulaSection === "REACTANTS" ? "PRODUCTS" : "REACTANTS"
		)
	}

	return (
		<Flex
			direction={"row"}
			className="ReactantProductSwitch"
			alignItems="center"
			justifyContent={"space-between"}
			h="20%"
		>
			<Text fontSize=".75rem">Reactants</Text>
			<div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
				<motion.div className="handle" layout transition={spring} />
			</div>
			<Text fontSize=".75rem">Products</Text>
		</Flex>
	)
}
