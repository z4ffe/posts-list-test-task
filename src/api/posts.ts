import {JSON_FAKE_API} from '../lib/axios/axios.ts'


export const postsResponse = async (state: any) => {
	try {
		const PAGE = state.posts.page
		const LIMIT = state.posts.limit
		const response = await JSON_FAKE_API.get(`/posts?_page=${PAGE}&_limit=${LIMIT}`)
		return {data: response.data, total: response.headers['x-total-count']}
	} catch (error) {
		throw error
	}
}