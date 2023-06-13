import {FC} from 'react'
import {Stack} from 'react-bootstrap'
import {IComments} from '../types/interfaces/comments.ts'

interface Props extends IComments {
}

export const CommentTile: FC<Props> = (comment) => {
	return (
		<Stack className='border border-black p-2 rounded-2'>
			<h6 className='border-bottom border-black w-25 pb-2'>{comment.email}</h6>
			<p className='m-0'>{comment.body}</p>
		</Stack>
	)
}