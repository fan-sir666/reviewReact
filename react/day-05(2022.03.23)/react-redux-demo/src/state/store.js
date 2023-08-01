import { createStore } from "redux";
import rootReducer from "./reducers";
// 创建并到处store
export const store = createStore(rootReducer);