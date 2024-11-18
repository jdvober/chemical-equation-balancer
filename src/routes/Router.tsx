import ErrorPage from "@/routes/ErrorPage"
import { createBrowserRouter } from "react-router-dom"

import { FormulaEditor } from "@/components/FormulaEditor/FormulaEditor"
import { App } from "../App"

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/editor",
		element: <FormulaEditor />,
		errorElement: <ErrorPage />,
	},
])
