import { combineReducers } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'
import { persistReducer} from 'redux-persist'

import { userReducer } from './slices'


export const userPersistConfig = {
    key: 'user',
    version: 0,
    storage,
    migrate: (state: any) => {
        console.log('Migration Running!', state)
        return Promise.resolve(state)
    }
}

const appReducer = combineReducers({
    user: persistReducer(userPersistConfig, userReducer)
})

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
}

export default rootReducer