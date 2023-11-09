import { createContext } from "react";

const ReactContext = createContext({
    loggedInUser: "default User",
});

export default ReactContext;