import {JSON_FAKE_API} from '../lib/axios/axios.ts'
import {IComments} from '../types/interfaces/comments.ts'

export const fetchCommentsByPostId = async (id: number): Promise<IComments[]> => {
	const response = await JSON_FAKE_API.get(`/comments?postId=${id}`)
	return response.data
}