import {Stack} from 'react-bootstrap'
import {currentYear} from '../utils/currentYear.ts'

export const Footer = () => {
	return (
		<Stack className='border-top' style={{height: '50px'}}>
			<p className='text-black-50 text-center mt-auto'>Paul Lightman - {currentYear()}</p>
		</Stack>
	)
}

export default Footer