import axios from 'axios'
import { FormEventHandler, useState } from 'react'
import Pagination from './components/Pagination'
import Results from './components/Results'

function App() {
	const [query, setQuery] = useState<string>('google')
	const [data, setData] = useState<any>(null)
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<any>(null)
	const [currentPage, setCurrentPage] = useState<number>(1)

	const getData = async () => {
		try {
			setLoading(true)
			const res = await axios.get(
				`https://hn.algolia.com/api/v1/search?query=${query}&page=${currentPage}`
			)

			setData(res.data)
			setLoading(false)
		} catch (err) {
			setError(err)
			setLoading(false)
		}
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		getData()
	}
	return (
		<div className='container-sm '>
			<form className='d-flex mt-5' onSubmit={handleSubmit}>
				<input
					className='form-control me-2'
					type='text'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder='search'
				/>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
			{data && (
				<div className='mt-2 border p-2'>
					<Pagination
						getData={getData}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</div>
			)}
			<Results data={data} loading={loading} getData={getData} />
		</div>
	)
}

export default App
