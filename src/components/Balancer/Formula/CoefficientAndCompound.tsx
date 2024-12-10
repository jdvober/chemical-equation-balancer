import { ChemicalCompound } from "@/components/Balancer/Formula/ChemicalCompound/ChemicalCompound"
import { Coefficient } from "@/components/Balancer/Formula/Coefficient/Coefficient"
import { Box, HStack } from "@chakra-ui/react"
import { v4 as uuid } from "uuid"

interface CoefficientAndCompoundProps {
	item: ChemicalReactant
	itemIndex: number
}

export const CoefficientAndCompound: React.FC<CoefficientAndCompoundProps> = ({
	item,
	itemIndex,
}) => {
	return (
		<Box key={uuid()} w="auto" alignSelf="center" alignContent="center">
			<HStack alignItems={"center"}>
				<Box className={`coefficient-${item}-${itemIndex}-container`}>
					<Coefficient
						index={itemIndex}
						formulaSection={item.formulaSection}
					/>
				</Box>
				<Box alignItems="center" alignSelf="center">
					<ChemicalCompound
						compound={item}
						formulaSection={item.formulaSection}
						index={itemIndex}
						includeSymbols={true}
						location="FORMULA"
					/>
				</Box>
			</HStack>
		</Box>
	)
}
