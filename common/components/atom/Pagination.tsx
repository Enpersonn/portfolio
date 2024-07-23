type PaginationProps = {
	page: number;
	total: number;
	nextPage: () => void;
	prevPage: () => void;
};

const Pagination = ({ page, total, nextPage, prevPage }: PaginationProps) => {
	return (
		<div className="flex justify-center gap-5">
			<button
				type="button"
				onClick={prevPage}
				disabled={page === 1}
				className="text-gray-500"
			>
				Prev
			</button>
			<p className="text-gray-500">
				{page} of {total}
			</p>
			<button
				type="button"
				onClick={nextPage}
				disabled={page === total}
				className="text-gray-500"
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
