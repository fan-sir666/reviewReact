import { ARTICLE_SETARTICLES, ARTICLE_SETCHANNELS } from "../action-types/article";

const initialState = {
    // 频道
    channels: [],
    results: [],
    page: 1,
    per_page: 10,
    total_count: 0
}

const article = (state = initialState, action) => {
    switch (action.type) {
        case ARTICLE_SETCHANNELS:
            return {
                ...state,
                channels: action.payload
            }
        case ARTICLE_SETARTICLES:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default article