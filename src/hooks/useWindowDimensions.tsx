import { useState, useEffect, useCallback } from "react";

export default function useWindowDimensions() {
    const hasWindow = typeof window !== "undefined";

    const getWindowDimensions = () => {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    };

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        if (hasWindow) {
            window.addEventListener("resize", () => setWindowDimensions(getWindowDimensions()));
            return () => window.removeEventListener("resize", () => setWindowDimensions(getWindowDimensions()));
        }
    }, [hasWindow]);

    return windowDimensions;
}
