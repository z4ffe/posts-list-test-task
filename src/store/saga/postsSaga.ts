import {put} from 'redux-saga/effects'
import {JSON_FAKE_API} from '../../lib/redux/axios.ts'
import {getPostsSuccess} from '../reducers/postsSlice.ts'

export async function* fetchAllPostsSaga(): any {
	const response = yield JSON_FAKE_API.get('/posts')
	yield put(getPostsSuccess(response))
}