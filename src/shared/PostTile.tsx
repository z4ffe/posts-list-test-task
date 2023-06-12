import {FC} from 'react'
import {Button, Image, Stack} from 'react-bootstrap'
import avatar from '../assets/images/avatar-icon.svg'
import {IPosts} from '../types/interfaces/posts.ts'

export const PostTile: FC<Omit<IPosts, 'id' | 'userId'>> = ({title, body}) => {
	return (
		<Stack gap={1} className='border-bottom pb-2'>
			<h1>{title}</h1>
			<p>{body}</p>
			<Image src={avatar} width='40px' />
			<Button>Show comments</Button>
		</Stack>
	)
}