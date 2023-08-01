import { SEARCH_ERROR, SEARCH_START, SEARCH_SUCCESS } from "../action-types/appActionType";

export const search_packages = (payload) => {
    return { type: SEARCH_START, payload }
};
export const search_packages_success = (payload) => ({ type: SEARCH_SUCCESS, payload });
export const search_packages_error = (error) => ({ type: SEARCH_ERROR, error });