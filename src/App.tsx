import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer.tsx'
import {Header} from './components/Header.tsx'
import {MainLayout} from './Layouts/MainLayout.tsx'
import {AboutMe} from './pages/AboutMe.tsx'
import {NotFound} from './pages/NotFound.tsx'
import {Posts} from './pages/Posts.tsx'
import {UserProfile} from './pages/UserProfile.tsx'

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<MainLayout>
				<Routes>
					<Route path='/' Component={Posts} />
					<Route path='aboutme' Component={AboutMe} />
					<Route path='/user/:id' Component={UserProfile} />
					<Route path='*' Component={NotFound} />
				</Routes>
			</MainLayout>
			<Footer />
		</BrowserRouter>
	)
}

export default App