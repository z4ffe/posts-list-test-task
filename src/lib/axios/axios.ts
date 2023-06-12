import axios from 'axios'

export const JSON_FAKE_API = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
	timeout: 5000
})

