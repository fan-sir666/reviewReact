import { createAction } from 'redux-actions'

export const searchStart = createAction('search_start')
export const searchSuccess = createAction('search_success')
export const searchError = createAction('search_error')