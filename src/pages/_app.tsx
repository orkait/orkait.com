import type { AppProps } from "next/app";
import UserContext from "@/context/UserContext";
import useWindowDimensions from "@/components/hooks/useWindowDimensions";
import { useState } from "react";
import "@/styles/globals.scss";
import env from "@/env";

function App({ Component, pageProps }: AppProps) {
    const { width } = useWindowDimensions();
    const [menuOpen, setMenuOpen] = useState(false);

    if (env.OFFLINE_MODE) {
        return (
            <div
                className="md:container mx-auto px-5 flex flex-col justify-center items-center h-[100vh]  ">
                <h1
                    className="text-5xl text-center"
                >
                    Website is in offline mode, please contact the owner
                </h1>
                <p className="text-4xl text-center my-2 italic ">
                    {env.OWNER_EMAIL}
                </p>
            </div>
        )
    }

    return (

        <UserContext.Provider
            value={{
                menuOpen,
                setMenuOpen,
                width: width || 0,
            }}
        >
            <div className="md:container mx-auto px-5 ">
                <Component {...pageProps} />
            </div>
        </UserContext.Provider>
    );
}


export default App;