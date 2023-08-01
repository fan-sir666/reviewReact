import * as actionCreators from "./action-creators";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export function useActions() {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreators, dispatch)
}
export * from "./store";