export interface IPosts {
	userId: number
	id: number
	title: string
	body: string
}

export interface IPostsSlice {
	posts: Array<IPosts>
	total: number
	page: number
	limit: number
	loading: boolean
	error: string | null
}