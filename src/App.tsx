import Collection from '@/components/Collection'
import Footer from '@/components/Footer'
import Form from '@/components/Form'
import Header from '@/components/Header'
import Replica from '@/components/Replica'
import Reproductions from '@/components/Reproductions'
import './App.css'

function App() {
	return (
		<>
			<Header />
			<Replica />
			<Reproductions />
			<Collection />
			<Form />
			<Footer />
		</>
	)
}

export default App
