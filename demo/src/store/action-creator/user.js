import { Axios } from "@/utils/request";
import { LOGIN_SETTOKEN, GET_USERINFO, CLEAR_USERINFO } from "../action-types/user";

export const loginAction = ({ mobile, code }) => async (dispatch) => {
    const res = await Axios("/authorizations", "post", {
        mobile, code
    })
    const { token } = res.data
    dispatch({ type: LOGIN_SETTOKEN, payload: token })
}

export const userInfoAction = () => async (dispatch) => {
    const { data } = await Axios("/user/profile", "get")
    dispatch({
        type: GET_USERINFO,
        payload: data
    })
}

export const logoutAction = () => ({
    type: CLEAR_USERINFO,
})