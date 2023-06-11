import {put} from 'redux-saga/effects'
import {postsResponse} from '../../api/posts.ts'
import {getPostsSuccess} from '../reducers/postsSlice.ts'

export function* getAllPostsSaga(): Generator {
	const response = yield postsResponse()
	yield put(getPostsSuccess(response))
}

export const GET_POSTS = 'posts/getPosts'