import {put, select} from 'redux-saga/effects'
import {fetchPosts} from '../../api/posts.ts'
import {getPostsSuccess, setLoading} from '../reducers/postsSlice.ts'

export function* getAllPostsSaga(): Generator {
	yield put(setLoading())

	// TODO: fix any

	const state: any = yield select((state1) => state1)
	const response = yield fetchPosts(state)
	yield put(getPostsSuccess(response))
}

export const GET_POSTS = 'posts/getPosts'