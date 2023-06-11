import {useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks.ts'
import {PostTile} from '../shared/PostTile.tsx'
import {getPosts} from '../store/reducers/postsSlice.ts'

export const Posts = () => {
	const postsStore = useAppSelector(state => state.posts)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getPosts())
	}, [])

	return (
		<div>
			{postsStore.posts.length ? postsStore.posts.map(el => {
				return (
					<PostTile key={el.id} title={el.title} body={el.body} />
				)
			}) : <Spinner animation='grow' />}
		</div>
	)
}