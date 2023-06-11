import {createAction, createSlice} from '@reduxjs/toolkit'
import {IPostsSlice} from '../../types/interfaces/posts.ts'
import {GET_POSTS} from '../saga/postsSaga.ts'

const initialState: IPostsSlice = {
	posts: [],
	loading: false,
	error: null,
}

const postsSlice = createSlice({
	name: 'posts',
	initialState: initialState,
	reducers: {
		getPostsSuccess: (state, action) => {
			state.posts = action.payload
		},
	},
})

export const getPosts = createAction(GET_POSTS)

export const {getPostsSuccess} = postsSlice.actions
export default postsSlice.reducer

