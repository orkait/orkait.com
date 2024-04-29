import { createContext } from "react";
const UserContext = createContext({
    menuOpen: false,
    setMenuOpen: (menuOpen: boolean) => {},
    width: 0,
});

export default UserContext;
