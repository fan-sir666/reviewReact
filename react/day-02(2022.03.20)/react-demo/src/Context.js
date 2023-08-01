import { createContext } from "react"

// 用户上下文对象
export const UserContext = createContext({
    userName: "",
    setUserName: () => {},
});