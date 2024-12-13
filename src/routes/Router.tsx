import ErrorPage from '@/routes/ErrorPage'
import { createBrowserRouter } from 'react-router-dom'

import { Balancer } from '@/components/Balancer/Balancer'
import { FormulaEditor } from '@/components/FormulaEditor/FormulaEditor'
import { ColorViewerDev } from '@/theme/colors/ColorViewerDev'

export const Router = createBrowserRouter([
	{
		path: '/',
		element: <Balancer />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/balancer',
		element: <Balancer />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/editor',
		element: <FormulaEditor />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/colors',
		element: <ColorViewerDev />,
		errorElement: <ErrorPage />,
	},
])
