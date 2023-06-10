import {useParams} from 'react-router-dom'

export const UserProfile = () => {
	const {id} = useParams()

	return (
		<div>
			<h1>UserProfile {id}</h1>
		</div>
	)
}