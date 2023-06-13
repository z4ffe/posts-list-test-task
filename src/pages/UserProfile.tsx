import {useEffect, useState} from 'react'
import {Spinner} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import {fetchUserById} from '../api/user.ts'
import {IUser} from '../types/interfaces/user.ts'

export const UserProfile = () => {
	const [user, setUser] = useState<IUser>()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<any>()
	const {id} = useParams()

	const handleUser = async () => {
		try {
			setIsLoading(true)
			const user = await fetchUserById(Number(id))
			setUser(user)
			setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
			setError(error)
		}
	}

	useEffect(() => {
		handleUser()
	}, [])


	if (error) {
		return (
			<div>
				<h1>Something went wrong</h1>
			</div>
		)
	}

	if (!user || isLoading) {
		return (
			<div>
				<Spinner />
			</div>
		)
	}

	return (
		<div>
			<h4>{user.username}</h4>
			<h1>{user.name}</h1>
			<h2>{user.email}</h2>
			<h4>{user.phone}</h4>
			<h4>{user.address.city}</h4>
		</div>
	)
}