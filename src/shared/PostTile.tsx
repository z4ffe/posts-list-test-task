import {FC, useState} from 'react'
import {Button, Collapse, Image, Stack} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {fetchCommentsByPostId} from '../api/comments.ts'
import avatar from '../assets/images/avatar-icon.svg'
import {IComments} from '../types/interfaces/comments.ts'
import {IPosts} from '../types/interfaces/posts.ts'
import {CommentsSection} from './CommentsSection.tsx'

export const PostTile: FC<IPosts> = ({title, body, id, userId}) => {
	const [commentsList, setCommentsList] = useState<IComments[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const COMMENTS_BUTTON_TEXT = isLoading ? 'Loading...' : commentsList.length ? 'Hide comments' : 'Show comments'

	const handleComments = async () => {
		if (commentsList.length) {
			setCommentsList([])
			return
		}
		setIsLoading(true)
		const comments = await fetchCommentsByPostId(id)
		setCommentsList(comments)
		setIsLoading(false)
	}

	return (
		<Collapse in={!isLoading}>
			<Stack gap={1} className='pb-2 border border-black p-3 rounded-2'>
				<h1 className='text-center' style={{fontSize: '2rem'}}>{title}</h1>
				<p className='text-center'>{body}</p>
				<Stack direction='horizontal' className='justify-content-end gap-3'>
					<Link to={`/user/${userId}`}>
						<Image src={avatar} width='30px' />
					</Link>
					<Button disabled={isLoading} size='sm' variant={commentsList.length ? 'secondary' : 'primary'}
							  onClick={handleComments}>{COMMENTS_BUTTON_TEXT}</Button>
				</Stack>
				{commentsList.length ? <CommentsSection commentsList={commentsList} /> : null}
			</Stack>
		</Collapse>
	)
}