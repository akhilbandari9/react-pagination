const Pagination = ({ getData, setCurrentPage, currentPage }: any) => {
	const goToNext = () => {
		setCurrentPage((prev: number) => prev + 1)
		getData()
	}
	const goToPrev = () => {
		setCurrentPage((prev: number) => prev - 1)
		getData()
	}

	return (
		<div>
			<div className='d-flex gap-5 align-items-center'>
				{currentPage > 1 && (
					<button
						className='btn  btn-outline-primary btn-sm'
						onClick={goToPrev}
					>
						Prev
					</button>
				)}
				<span>{currentPage}</span>
				<button className='btn btn-outline-primary btn-sm' onClick={goToNext}>
					Next
				</button>
			</div>
		</div>
	)
}

export default Pagination
