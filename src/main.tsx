import React from "react" // Suspense allows developers to easily specify a “loading” state while waiting on asynchronous tasks. In other words, when we have an action that is considered “blocking”, such as a request for data, we must provide a “non-blocking” version. This non-blocking version is called a “fallback” in Suspense.
import { createRoot } from "react-dom/client"

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { GoogleOAuthProvider } from "@react-oauth/google"

import { App } from "./App"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { ThemeOverrides } from "./theme/theme"

const elementToRender = (
	<React.StrictMode>
		<GoogleOAuthProvider clientId="331937028829-5foai9sutn20jv1qsgpb4bbrgt1dker6.apps.googleusercontent.com">
			<ChakraProvider theme={ThemeOverrides}>
				<ColorModeScript
					initialColorMode={ThemeOverrides.config.initialColorMode}
				/>
				<App />
			</ChakraProvider>
		</GoogleOAuthProvider>
	</React.StrictMode>
)

// Rendering with ReactDOM
// ReactDOM.render(elementToRender, document.getElementById("root"))
const root = createRoot(document.getElementById("root") as HTMLElement)
root.render(elementToRender)
