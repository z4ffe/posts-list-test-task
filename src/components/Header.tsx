import {Button, Container, Form, Nav, Navbar, Stack} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const Header = () => {
	return (
		<Container className='border-bottom'>
			<Stack className='justify-content-between' direction='horizontal'>
				<Navbar variant='light'>
					<Nav>
						<Nav.Link as={Link} to='/'>Posts</Nav.Link>
						<Nav.Link as={Link} to='aboutme'>About Me</Nav.Link>
					</Nav>
				</Navbar>
				<Navbar.Brand as={Link} to='/'>
					<h1 className='m-auto' style={{fontSize: '25px'}}>Posts List</h1>
				</Navbar.Brand>
				<Form className='d-flex'>
					<Form.Control
						type='search'
						placeholder='Search'
						className='me-2'
						aria-label='Search'
					/>
					<Button variant='primary'>Search</Button>
				</Form>
			</Stack>
		</Container>
	)
}