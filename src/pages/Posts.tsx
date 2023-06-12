import {useEffect} from 'react'
import {Spinner, Stack} from 'react-bootstrap'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks.ts'
import {PaginationEl} from '../shared/PaginationEl.tsx'
import {PostTile} from '../shared/PostTile.tsx'
import {getPosts} from '../store/reducers/postsSlice.ts'

export const Posts = () => {
	const {posts, loading, page} = useAppSelector(state => state.posts)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getPosts())
	}, [page])

	return (
		<Stack gap={2}>
			{!loading ? posts.map(el => {
				return (
					<PostTile key={el.id} id={el.id} title={el.title} body={el.body} />
				)
			}) : <Spinner animation='grow' />}
			<PaginationEl />
		</Stack>
	)
}