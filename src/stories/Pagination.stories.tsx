import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import Pagination from '@/components/atoms/Pagination';

const meta = {
	title: 'Components/Pagination',
	component: Pagination,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'페이지네이션 컴포넌트. Figma `InputAtomsPagenation`과 동일한 디자인. `atoms/Pagination` + `ui/pagination` 조합.',
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

function PaginationWithState(args: React.ComponentProps<typeof Pagination>) {
	const [page, setPage] = useState(args.page ?? 1);
	const totalPages = Math.ceil(args.total / (args.paginationPageSize ?? 10));
	return (
		<Pagination
			{...args}
			page={page}
			onPageSelect={setPage}
			onPagePrevious={() => setPage((p) => Math.max(1, p - 1))}
			onPageNext={() => setPage((p) => Math.min(totalPages, p + 1))}
		/>
	);
}

export const Default: Story = {
	args: { total: 50, page: 1, paginationPageSize: 10 },
	render: (args) => <PaginationWithState {...args} />,
};

export const MiddlePage: Story = {
	name: '중간 페이지 (2번 활성)',
	args: { total: 50, page: 2, paginationPageSize: 10 },
	render: (args) => <PaginationWithState {...args} />,
};

export const LastPage: Story = {
	name: '마지막 페이지',
	args: { total: 50, page: 5, paginationPageSize: 10 },
	render: (args) => <PaginationWithState {...args} />,
};

export const ManyPages: Story = {
	name: '많은 페이지 (11번째)',
	args: { total: 200, page: 11, paginationPageSize: 10 },
	render: (args) => <PaginationWithState {...args} />,
};

export const Empty: Story = {
	name: '데이터 없음',
	args: { total: 0, page: 1, paginationPageSize: 10 },
	render: (args) => <PaginationWithState {...args} />,
};
