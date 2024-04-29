import { useContext, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";

const screen = {
    MAX_MOBILE_WIDTH: 425,
    MAX_TABLET_WIDTH: 768,
    MAX_LAPTOP_WIDTH: 1024,
    MAX_DESKTOP_WIDTH: 1280,
};

interface cType {
    mobile: any;
    tablet?: any;
    laptop?: any;
    desktop?: any;
}

const useMedia = () => {
    const { width } = useWindowDimensions() as {
        width: number;
        height: number;
    };

    const onMobile = () => {
        return width < screen.MAX_MOBILE_WIDTH;
    };

    const onTablet = () => {
        return (
            width >= screen.MAX_MOBILE_WIDTH && width < screen.MAX_TABLET_WIDTH
        );
    };

    const onLaptop = () => {
        return (
            width >= screen.MAX_TABLET_WIDTH && width < screen.MAX_LAPTOP_WIDTH
        );
    };

    const onDesktop = () => {
        return width >= screen.MAX_LAPTOP_WIDTH;
    };

    const verify = () => {
        let answer = "unknown";

        if (onMobile()) {
            answer = "mobile";
        }

        if (onTablet()) {
            answer = "tablet";
        }

        if (onLaptop()) {
            answer = "laptop";
        }

        if (onDesktop()) {
            answer = "desktop";
        }

        return answer;
    };

    const choice = (config: cType) => {
        const _default = config.mobile;
        let res = _default;

        if (onMobile()) {
            res = config.mobile;
        }

        if (onTablet()) {
            res = config.tablet;
        }

        if (onLaptop()) {
            res = config.laptop;
        }

        if (onDesktop()) {
            res = config.desktop;
        }

        if (!res) {
            return _default;
        }

        return res;
    };

    const onGreaterThanMobile = () => {
        return width >= screen.MAX_MOBILE_WIDTH;
    };
    const onLessThanTablet = () => {
        return width < screen.MAX_TABLET_WIDTH;
    };

    const onGreaterThanTablet = () => {
        return width >= screen.MAX_MOBILE_WIDTH;
    };

    const onLessThanLaptop = () => {
        return width < screen.MAX_LAPTOP_WIDTH;
    };

    const onGreaterThanLaptop = () => {
        return width >= screen.MAX_TABLET_WIDTH;
    };

    const onLessthanDesktop = () => {
        return width < screen.MAX_DESKTOP_WIDTH;
    };

    const onGreaterThanDesktop = () => {
        return width >= screen.MAX_DESKTOP_WIDTH;
    };

    return {
        width,
        onMobile,
        onTablet,
        onLaptop,
        onDesktop,
        choice,
        verify,
        onGreaterThanMobile,
        onLessThanTablet,
        onGreaterThanTablet,
        onLessThanLaptop,
        onGreaterThanLaptop,
        onLessthanDesktop,
        onGreaterThanDesktop,
    };
};

export default useMedia;