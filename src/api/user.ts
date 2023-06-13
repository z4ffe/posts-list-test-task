import {JSON_FAKE_API} from '../lib/axios/axios.ts'
import {IUser} from '../types/interfaces/user.ts'

export const fetchUserById = async (id: number): Promise<IUser> => {
	const response = await JSON_FAKE_API.get(`/users/${id}`)
	return response.data
}