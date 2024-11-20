import ErrorPage from "@/routes/ErrorPage"
import { createBrowserRouter } from "react-router-dom"

import { Balancer } from "@/components/Balancer"
import { FormulaEditor } from "@/components/FormulaEditor/FormulaEditor"

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <Balancer />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/editor",
		element: <FormulaEditor />,
		errorElement: <ErrorPage />,
	},
])
