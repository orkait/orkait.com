import type { AppProps } from "next/app";
import UserContext from "@/context/UserContext";
import useWindowDimensions from "@/components/hooks/useWindowDimensions";
import { useState } from "react";
import "@/styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
    const { width } = useWindowDimensions();
    const [menuOpen, setMenuOpen] = useState(false);

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