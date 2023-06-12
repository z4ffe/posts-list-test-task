import {FC, useState} from 'react'
import {Button, Image, Stack} from 'react-bootstrap'
import {fetchCommentsByPostId} from '../api/comments.ts'
import avatar from '../assets/images/avatar-icon.svg'
import {IComments} from '../types/interfaces/comments.ts'
import {IPosts} from '../types/interfaces/posts.ts'
import {CommentsSection} from './CommentsSection.tsx'

export const PostTile: FC<Omit<IPosts, 'userId'>> = ({title, body, id}) => {
	const [commentsList, setCommentsList] = useState<IComments[]>([])

	const handleComments = async () => {
		const comments = await fetchCommentsByPostId(id)
		setCommentsList(comments)
	}

	return (
		<Stack gap={1} className='pb-2 border border-black p-3 rounded-2'>
			<h1 className='text-center' style={{fontSize: '2rem'}}>{title}</h1>
			<p className='text-center'>{body}</p>
			<Stack direction='horizontal' className='justify-content-end gap-3'>
				<Image src={avatar} width='30px' />
				<Button size='sm' onClick={handleComments}>Show comments</Button>
			</Stack>
			<CommentsSection commentsList={commentsList} />
		</Stack>
	)
}