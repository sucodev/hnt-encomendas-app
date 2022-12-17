import { configureStore } from '@reduxjs/toolkit';

import { persistStore } from 'redux-persist'
import { userMiddleware } from './middleware/userMiddleware';

import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }).concat([
        userMiddleware.middleware
    ])
})

const persistor = persistStore(store);

export { store, persistor }