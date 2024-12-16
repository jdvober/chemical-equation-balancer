import ErrorPage from '@/routes/ErrorPage'
import { createBrowserRouter } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { Balancer } from '@/components/Balancer/Balancer'
import { FormulaEditor } from '@/components/FormulaEditor/FormulaEditor'
import { ColorViewerDev } from '@/theme/colors/ColorViewerDev'
import { AnimatePresence, motion } from 'motion/react'

const animationGenerator = (element: JSX.Element) => {
	// Make animations for when you switch routes
	return (
		<AnimatePresence>
			<motion.div
				key={uuid()}
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
			>
				{element}
			</motion.div>
		</AnimatePresence>
	)
}

export const Router = createBrowserRouter([
	{
		path: '/',
		element: animationGenerator(<Balancer />),
		errorElement: <ErrorPage />,
	},
	{
		path: '/balancer',
		element: animationGenerator(<Balancer />),
		errorElement: <ErrorPage />,
	},
	{
		path: '/editor',
		element: animationGenerator(<FormulaEditor />),
		errorElement: <ErrorPage />,
	},
	{
		path: '/colors',
		element: <ColorViewerDev />,
		errorElement: <ErrorPage />,
	},
])
