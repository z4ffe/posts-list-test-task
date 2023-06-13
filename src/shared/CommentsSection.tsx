import {FC} from 'react'
import {Stack} from 'react-bootstrap'
import {IComments} from '../types/interfaces/comments.ts'
import {CommentTile} from './CommentTile.tsx'

interface Props {
	commentsList: IComments[]
}

export const CommentsSection: FC<Props> = ({commentsList}) => {
	return (
		<Stack gap={2} className='border-top border-2 border-black pt-2 mt-2'>
			<h5 className='mt-2'>Comments</h5>
			{commentsList.map((comment) => {
				return (
					<CommentTile {...comment} />
				)
			})}
		</Stack>
	)
}