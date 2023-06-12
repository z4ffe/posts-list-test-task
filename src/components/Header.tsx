import {Button, Container, Form, Nav, Navbar, Stack} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom'

export const Header = () => {
	const location = useLocation()
	const isUserPage = location.pathname.includes('user/')

	return (
		<Container className='border-bottom'>
			<Stack>
				<Navbar variant='light'>
					<Container>
						<Navbar.Brand as={Link} to='/'>Posts List</Navbar.Brand>
						<Nav className='me-auto'>
							<Nav.Link as={Link} to='/'>Posts</Nav.Link>
							{isUserPage && <Nav.Link as={Link} to='user/1'>User</Nav.Link>}
							<Nav.Link as={Link} to='aboutme'>About Me</Nav.Link>
						</Nav>
						<Form className='d-flex'>
							<Form.Control
								type='search'
								placeholder='Search'
								className='me-2'
								aria-label='Search'
							/>
							<Button variant='primary'>Search</Button>
						</Form>
					</Container>
				</Navbar>
			</Stack>
		</Container>
	)
}