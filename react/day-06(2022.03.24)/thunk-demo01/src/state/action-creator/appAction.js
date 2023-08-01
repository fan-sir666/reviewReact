import axios from 'axios'
import { SEARCH_ERROR, SEARCH_START, SEARCH_SUCCESS } from "../action-types/appActionType"

export const searchPackages = (key) => async (dispatch) => {
    // 修改loading状态
    dispatch({ type: SEARCH_START })
    try {
        // 发送请求
        const { data } = await axios.get(`https://registry.npmjs.org/-/v1/search`, {
            params: {
                text: key,
            },
        });
        dispatch({
            type: SEARCH_SUCCESS, payload: data.objects.map((item) => item.package.name)
        })
    } catch (error) {
        dispatch({ type: SEARCH_ERROR, error: error.message });
    }
}