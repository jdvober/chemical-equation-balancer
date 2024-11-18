import React from "react" // Suspense allows developers to easily specify a “loading” state while waiting on asynchronous tasks. In other words, when we have an action that is considered “blocking”, such as a request for data, we must provide a “non-blocking” version. This non-blocking version is called a “fallback” in Suspense.
import { createRoot } from "react-dom/client"

// React-dnd
import { DndContext } from "@dnd-kit/core"

// Providers
import { GoogleOAuthProvider } from "@react-oauth/google"
// @ts-ignore

// React Router
import { Provider } from "@/components/ui/provider"
import { Router } from "@/routes/Router.tsx"
import { RouterProvider } from "react-router-dom"

// import { App } from "./App.tsx"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore

const elementToRender = (
	<React.StrictMode>
		<GoogleOAuthProvider clientId="331937028829-5foai9sutn20jv1qsgpb4bbrgt1dker6.apps.googleusercontent.com">
			<Provider>
				<DndContext>
					<RouterProvider router={Router} />
				</DndContext>
			</Provider>
		</GoogleOAuthProvider>
	</React.StrictMode>
)

// Rendering with ReactDOM
// ReactDOM.render(elementToRender, document.getElementById("root"))
const root = createRoot(document.getElementById("root") as HTMLElement)
root.render(elementToRender)
