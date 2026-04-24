import { useEffect, useState } from 'react';

import {
	Pagination as PaginationUI,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationLink,
	PaginationNext,
} from '@/components/ui/pagination';

interface PaginationProps {
	total: number;
	page: number;
	paginationPageSize?: number;
	onPageNext?: () => void;
	onPagePrevious?: () => void;
	onPageSelect?: (page: number) => void;
}

const Pagination = ({
	total,
	page,
	paginationPageSize = 10,
	onPageNext,
	onPagePrevious,
	onPageSelect,
}: PaginationProps) => {
	const totalPages = Math.ceil(total / paginationPageSize);
	const [pages, setPages] = useState<number[]>([1]);

	const lastPage = total > 0 ? totalPages : 0;
	const start =
		page % 10 === 0
			? (Math.floor(page / 10) - 1) * 10 + 1
			: Math.floor(page / 10) * 10 + 1;
	const buttonCount = lastPage - start < 10 ? lastPage - start + 1 : 10;

	useEffect(() => {
		if (buttonCount && buttonCount > 0) {
			setPages(Array.from({ length: buttonCount }, (_, i) => start + i));
		} else {
			setPages([1]);
		}
	}, [page, paginationPageSize, total]);

	return (
		<PaginationUI>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={() => onPagePrevious?.()}
						disabled={page === 1}
					/>
				</PaginationItem>
				{pages.map((value) => (
					<PaginationItem key={value}>
						<PaginationLink
							isActive={value === page}
							onClick={() => onPageSelect?.(value)}
						>
							{value}
						</PaginationLink>
					</PaginationItem>
				))}
				<PaginationItem>
					<PaginationNext
						onClick={() => onPageNext?.()}
						disabled={page === totalPages || total === 0}
					/>
				</PaginationItem>
			</PaginationContent>
		</PaginationUI>
	);
};

export default Pagination;
