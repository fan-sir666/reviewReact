import * as actionCreators from './action-creator'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreators, dispatch)
}

export * from './store'