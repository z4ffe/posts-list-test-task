import {useEffect} from 'react'
import {Spinner, Stack} from 'react-bootstrap'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks.ts'
import {PaginationEl} from '../shared/Pagination.tsx'
import {PostTile} from '../shared/PostTile.tsx'
import {getPosts, resetState} from '../store/reducers/postsSlice.ts'

export const Posts = () => {
	const {posts, loading} = useAppSelector(state => state.posts)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getPosts())
		return () => {
			dispatch(resetState())
		}
	}, [])

	return (
		<Stack gap={2}>
			{!loading ? posts.map(el => {
				return (
					<PostTile key={el.id} title={el.title} body={el.body} />
				)
			}) : <Spinner animation='grow' />}
			<PaginationEl />
		</Stack>
	)
}