import { Axios } from "@/utils/request";
import { ARTICLE_SETCHANNELS, ARTICLE_SETARTICLES } from "../action-types/article";

export const getChanels = () => async (dispatch) => {
    const { data } = await Axios('/channels', 'get')
    dispatch({ type: ARTICLE_SETCHANNELS, payload: data.channels })
}

// 获取文章列表
export const getArticles = (params) => async (dispatch) => {
    const { data } = await Axios('mp/articles', 'get', { ...params })
    dispatch({ type: ARTICLE_SETARTICLES, payload: data })
}

// 删除文章
export const delArticle = id => async () => {
    await Axios(`mp/articles/${id}`, 'delete')
}

// 发布文章
export const addArticle = (params, draft = false) => async () => {
    await Axios(`mp/articles?draft=${draft}`, 'post', params)
}

// 获取文章详情
export const getArticleDetail = (id) => async () => {
    const { data } = await Axios(`mp/articles/${id}`, 'get')
    return data
}

// 编辑文章
export const editArticle = (params, draft = false) => async () => {
    await Axios(`mp/articles/${params.id}?draft=${draft}`, 'put', params)
}
