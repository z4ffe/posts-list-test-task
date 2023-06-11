import {FC} from 'react'
import {Button, Stack} from 'react-bootstrap'
import {IPosts} from '../types/interfaces/posts.ts'

export const PostTile: FC<Omit<IPosts, 'id' | 'userId'>> = ({title, body}) => {
	return (
		<Stack>
			<h1>{title}</h1>
			<p>{body}</p>
			<Button></Button>
		</Stack>
	)
}