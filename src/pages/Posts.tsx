import {useAppSelector} from '../lib/redux/hooks.ts'

export const Posts = () => {
	const postsStore = useAppSelector(state => state.posts)

	return (
		<div>
			<h1>Posts</h1>
		</div>
	)
}