import {ReactElement} from 'react'
import {Pagination} from 'react-bootstrap'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks.ts'
import {nextPage, prevPage, setPage} from '../store/reducers/postsSlice.ts'

export const PaginationEl = () => {
	const dispatch = useAppDispatch()
	const {total, page, limit} = useAppSelector(state => state.posts)

	const paginationList: ReactElement[] = []
	const TOTAL_PAGE = total / limit

	const handleSetPage = (page: number) => {
		dispatch(setPage(page))
	}

	const handleNextPage = () => {
		if (page * limit >= total) {
			return
		}
		dispatch(nextPage())
	}

	const handlePrevPage = () => {
		if (page * limit <= limit) {
			return
		}
		dispatch(prevPage())
	}

	const handleFirstPage = () => {
		dispatch(setPage(1))
	}

	const handleLastPage = () => {
		dispatch(setPage(TOTAL_PAGE))
	}


	for (let i = 1; i < TOTAL_PAGE + 1; i++) {
		paginationList.push(<Pagination.Item key={i} active={i === page}
														 onClick={() => handleSetPage(i)}>{i}</Pagination.Item>)
	}

	return (
		<Pagination className='mx-auto mt-2'>
			<Pagination.First onClick={handleFirstPage} />
			<Pagination.Prev onClick={handlePrevPage} />
			{paginationList.map(el => el)}
			<Pagination.Next onClick={handleNextPage} />
			<Pagination.Last onClick={handleLastPage} />
		</Pagination>
	)
}