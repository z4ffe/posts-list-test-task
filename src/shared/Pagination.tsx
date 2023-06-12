import {Pagination} from 'react-bootstrap'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks.ts'
import {getPosts, nextPage, prevPage, setPage} from '../store/reducers/postsSlice.ts'

export const PaginationEl = () => {
	const dispatch = useAppDispatch()
	const {total, page, limit} = useAppSelector(state => state.posts)
	const paginationList = []

	const handleSetPage = (page: number) => {
		dispatch(setPage(page))
		dispatch(getPosts())
	}

	const handleNextPage = () => {
		if (page * limit >= total) {
			return
		}
		dispatch(nextPage())
		dispatch(getPosts())
	}

	const handlePrevPage = () => {
		if (page * limit <= limit) {
			return
		}
		dispatch(prevPage())
		dispatch(getPosts())
	}

	const handleFirstPage = () => {
		dispatch(setPage(1))
		dispatch(getPosts())
	}


	for (let i = 1; i < total / limit; i++) {
		paginationList.push(<Pagination.Item key={i} active={i === page}
														 onClick={() => handleSetPage(i)}>{i}</Pagination.Item>)
	}

	return (
		<Pagination className='mx-auto mt-2'>
			<Pagination.First onClick={handleFirstPage} />
			<Pagination.Prev onClick={handlePrevPage} />
			{paginationList.map(el => el)}
			<Pagination.Next onClick={handleNextPage} />
			<Pagination.Last />
		</Pagination>
	)
}