import {FC} from 'react'
import {Stack} from 'react-bootstrap'
import {IComments} from '../types/interfaces/comments.ts'

interface IProps {
	commentsList: IComments[]
}

export const CommentsSection: FC<IProps> = ({commentsList}) => {
	return (
		<Stack>
			{commentsList.map((comment) => {
				return (
					<div key={comment.id}>{comment.body}</div>
				)
			})}
		</Stack>
	)
}