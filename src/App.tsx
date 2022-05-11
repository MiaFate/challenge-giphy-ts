import React, { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import { Box, ChakraProvider, ColorModeScript, Flex } from "@chakra-ui/react"
import theme from "./theme"
import { GlobalProvider } from "./context"
// @ts-ignore
//const Login = lazy(() => import("./components/Login"))
import Login from "./components/Login";

// @ts-ignore
//const Loader = lazy(() => import("./components/Loader"))
import Loader from "./components/Loader";
// @ts-ignore
//const Detail = lazy(() => import("./components/Detail"))
import Detail from "./components/Detail";
// @ts-ignore
//const Home = lazy(() => import("./components/Home"))
import Home from "./components/Home";

function App() {
  const ErrorFallback = () => {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <h1>Something went wrong</h1>
      </Flex>
    )
  }

  return (
    <ChakraProvider theme={theme} >
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <GlobalProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loader />}>
            <BrowserRouter>
              <Box  >
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/home" element={<Home />} />
                  <Route path={`/detail/:id`} element={<Detail />} />
                </Routes>
              </Box>
            </BrowserRouter>
          </Suspense>
        </ErrorBoundary>
      </GlobalProvider>
    </ChakraProvider>

  )
}

export default App
