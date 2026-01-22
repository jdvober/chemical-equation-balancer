// import { Router } from '@/routes/Router.tsx'
import { system } from '@/theme/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { DndContext } from '@dnd-kit/core'
import React from 'react' // Suspense allows developers to easily specify a “loading” state while waiting on asynchronous tasks. In other words, when we have an action that is considered “blocking”, such as a request for data, we must provide a “non-blocking” version. This non-blocking version is called a “fallback” in Suspense.
import { createRoot } from 'react-dom/client'

// import { App } from "./App.tsx"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { v4 as uuid } from 'uuid'

import { AnimatePresence, motion } from 'motion/react'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { Balancer } from './components/Balancer/Balancer'
import ErrorPage from './routes/ErrorPage'
import { FormulaEditor as Editor } from './components/FormulaEditor/FormulaEditor'

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

const elementToRender = (
    <React.StrictMode>
        <ChakraProvider value={system}>
            <DndContext>
                <Router>
                    <Routes>
                        <Route
                            path='/'
                            element={animationGenerator(<Balancer />)}
                            errorElement={<ErrorPage />}
                        />
                        <Route
                            path='/balancer'
                            element={animationGenerator(<Balancer />)}
                            errorElement={<ErrorPage />}
                        />
                        <Route
                            path='/editor'
                            element={animationGenerator(<Editor />)}
                            errorElement={<ErrorPage />}
                        />
                    </Routes>
                </Router>
            </DndContext>
        </ChakraProvider>
    </React.StrictMode>
)

// Rendering with ReactDOM
// ReactDOM.render(elementToRender, document.getElementById("root"))
const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(elementToRender)
