import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}
const reducerPersist = persistReducer(persistConfig, rootReducer)

// 创建store
const store = createStore(reducerPersist, composeWithDevTools(applyMiddleware(thunk)))
let persistor = persistStore(store)

export { store, persistor }


