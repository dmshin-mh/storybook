import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icons } from '@/assets';

const meta = {
	title: 'Assets/Icons',
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: '프로젝트에서 사용하는 SVG 아이콘 모음.',
			},
		},
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const iconEntries = Object.entries(Icons) as [string, React.FC<React.SVGProps<SVGSVGElement>>][];

export const AllIcons: Story = {
	name: '전체 아이콘',
	render: () => (
		<div className="grid grid-cols-6 gap-4">
			{iconEntries.map(([name, Icon]) => (
				<div
					key={name}
					className="flex flex-col items-center gap-2 p-3 border border-gray100 rounded-lg hover:border-gray300 transition-colors"
				>
					<Icon width={24} height={24} />
					<span className="text-b6r-12 text-gray500 text-center">{name}</span>
				</div>
			))}
		</div>
	),
};

export const LargeIcons: Story = {
	name: '크게 보기',
	render: () => (
		<div className="grid grid-cols-4 gap-6">
			{iconEntries.map(([name, Icon]) => (
				<div
					key={name}
					className="flex flex-col items-center gap-3 p-4 border border-gray100 rounded-xl"
				>
					<Icon width={36} height={36} />
					<span className="text-b5m-14 text-gray600">{name}</span>
				</div>
			))}
		</div>
	),
};
