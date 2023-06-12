import {FC} from 'react'
import {Stack} from 'react-bootstrap'
import {IComments} from '../types/interfaces/comments.ts'

export const CommentsSection: FC<IComments[]> = (commentsList) => {
	return (
		<Stack>
			{/* 	{commentsList.map(comment => {
				return (
					<div>{comment.body}</div>
				)
			})} */}
		</Stack>
	)
}