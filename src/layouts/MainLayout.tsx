import {FC, PropsWithChildren} from 'react'
import {Container} from 'react-bootstrap'

export const MainLayout: FC<PropsWithChildren> = ({children}) => {
	return (
		<Container className='my-2'>
			{children}
		</Container>
	)
}