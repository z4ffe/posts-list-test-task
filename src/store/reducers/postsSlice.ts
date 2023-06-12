import {createAction, createSlice} from '@reduxjs/toolkit'
import {IPostsSlice} from '../../types/interfaces/posts.ts'
import {GET_POSTS} from '../saga/postsSaga.ts'

const initialState: IPostsSlice = {
	posts: [],
	total: 0,
	page: 1,
	limit: 10,
	loading: false,
	error: null,
}

const postsSlice = createSlice({
	name: 'posts',
	initialState: initialState,
	reducers: {
		getPostsSuccess: (state, action) => {
			state.posts = action.payload.data
			state.total = action.payload.total
			state.loading = false
		},
		nextPage: (state) => {
			state.page += 1
		},
		prevPage: (state) => {
			state.page -= 1
		},
		setPage: (state, action) => {
			state.page = action.payload
		},
		setLoading: (state) => {
			state.loading = true
		},
		resetState: () => initialState,
	},
})

export const getPosts = createAction(GET_POSTS)

export const {getPostsSuccess, resetState, setPage, nextPage, prevPage, setLoading} = postsSlice.actions
export default postsSlice.reducer

