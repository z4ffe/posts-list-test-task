import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import postsSlice from './reducers/postsSlice.ts'
import {index} from './saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
	devTools: true,
	reducer: {
		posts: postsSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
})

sagaMiddleware.run(index)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>