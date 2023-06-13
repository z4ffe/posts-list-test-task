import {Button, Container, Form, Nav, Navbar, NavDropdown, Stack} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom'

export const Header = () => {
	const location = useLocation()
	const isUserPage = location.pathname.includes('user/')

	return (
		<Container className='border-bottom'>
			<Stack>
				<Navbar variant='light' className='justify-content-between'>
					<Nav>
						<Nav.Link as={Link} to='/'>Posts</Nav.Link>
						{isUserPage && <Nav.Link as={Link} to='user/1'>User</Nav.Link>}
						<Nav.Link as={Link} to='aboutme'>About Me</Nav.Link>
						<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
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
				</Navbar>
			</Stack>
		</Container>
	)
}