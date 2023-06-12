import {put, select} from 'redux-saga/effects'
import {postsResponse} from '../../api/posts.ts'
import {getPostsSuccess, setLoading} from '../reducers/postsSlice.ts'

export function* getAllPostsSaga(): Generator {
	yield put(setLoading())
	const state = yield select(state1 => state1)
	const response = yield postsResponse(state)
	yield put(getPostsSuccess(response))
}

export const GET_POSTS = 'posts/getPosts'