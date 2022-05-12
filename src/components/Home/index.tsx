import { useEffect, lazy, Suspense } from "react";
import SearchBox from "../SearchBox";
// @ts-ignore
const Cards = lazy(() => import("../Cards"));
// @ts-ignore
import Loader from "../Loader";
import { Flex } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { SWRConfig } from "swr";
import Cookies from "universal-cookie";

const Home = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const isLogged = cookies.get("logged");
    useEffect(() => {
        if (isLogged === "false" || isLogged == undefined) {
            navigate("/");
        }
    });
// @ts-ignore
    const ErrorFallback = ({ error }) => {
        console.log(error)
        return (
            <Flex justifyContent="center" alignItems="center" height="100vh">
                <h1>{`${error}`}</h1>
            </Flex>
        )
    }

    return (
        <>
            <h1>Giphy Challenge ADV JS Study Group</h1>
            <SearchBox placeholder={"Search GIPHY"} />
            <Flex direction='column' align='center'>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<Loader />}>
                        <SWRConfig
                            value={{
                                // @ts-ignore
                                fetcher: (...args) =>
                                // @ts-ignore
                                    fetch(...args).then((res) => {
                                        if (res.ok) {
                                            return res.json();
                                        } else {
                                            throw new Error("Fetch failed");
                                        }
                                    }),
                            }}
                        >
                            <Cards />
                        </SWRConfig>
                    </Suspense>
                </ErrorBoundary>
            </Flex>
        </>
    );

}

export default Home;