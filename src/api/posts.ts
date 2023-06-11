import {JSON_FAKE_API} from '../lib/redux/axios.ts'


export const postsResponse = async () => {
	try {
		const response = await JSON_FAKE_API.get('/posts')
		return response.data
	} catch (error) {
		throw error
	}
}