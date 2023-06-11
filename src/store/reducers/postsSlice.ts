import {createAction, createSlice} from '@reduxjs/toolkit'
import {IPostsSlice} from '../../types/interfaces/posts.ts'

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

// saga

export const fetchAllPosts = createAction()

//

export const {getPostsSuccess} = postsSlice.actions
export default postsSlice.reducer

