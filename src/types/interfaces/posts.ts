interface IPosts {
	userId: number
	id: number
	title: string
	body: string
}

export interface IPostsSlice {
	posts: Array<IPosts>
	loading: boolean
	error: string | null
}