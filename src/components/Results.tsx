import Pagination from './Pagination'

const Results = ({ data, loading }: any) => {
	if (loading) return <p className='border mt-3 p-2'>Loading...</p>
	if (!data) return <p className='border mt-3 p-2'>No Results</p>

	return (
		<div className='mt-3'>
			<div className='mt-2 border p-2'>Total Pages : {data?.nbHits}</div>

			<div className='mt-2 border p-2'>
				{data?.hits.map((item: any) => (
					<li key={item.id}>{item.title}</li>
				))}
			</div>
		</div>
	)
}

export default Results
