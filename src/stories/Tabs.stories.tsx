import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const meta = {
	title: 'Components/Tabs',
	component: Tabs,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: '탭 네비게이션 컴포넌트. Figma Tab Navigation 패턴과 동일.',
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	name: '기본 (하단 보더)',
	render: () => (
		<Tabs defaultValue="upcoming" className="w-[480px]">
			<TabsList>
				<TabsTrigger value="upcoming">예정된 상담</TabsTrigger>
				<TabsTrigger value="past">지난 상담</TabsTrigger>
				<TabsTrigger value="canceled">취소된 상담</TabsTrigger>
			</TabsList>
			<TabsContent value="upcoming">
				<p className="text-b5m-14 text-gray600 py-4">예정된 상담 목록이 여기에 표시됩니다.</p>
			</TabsContent>
			<TabsContent value="past">
				<p className="text-b5m-14 text-gray600 py-4">지난 상담 목록이 여기에 표시됩니다.</p>
			</TabsContent>
			<TabsContent value="canceled">
				<p className="text-b5m-14 text-gray600 py-4">취소된 상담 목록이 여기에 표시됩니다.</p>
			</TabsContent>
		</Tabs>
	),
};

export const Secondary: Story = {
	name: '세컨더리 (박스형)',
	render: () => (
		<Tabs defaultValue="all">
			<TabsList className="border-0 gap-1.5">
				{['전체', '온라인', '전화', '방문'].map((label) => (
					<TabsTrigger
						key={label}
						value={label}
						variant="secondary"
						size="select-m"
					>
						{label}
					</TabsTrigger>
				))}
			</TabsList>
			<TabsContent value="전체">
				<p className="text-b5m-14 text-gray600 py-4">전체 상담 내역</p>
			</TabsContent>
		</Tabs>
	),
};

export const SizeLarge: Story = {
	name: '대형 탭 (select-l)',
	render: () => (
		<Tabs defaultValue="counselor">
			<TabsList className="border-0 gap-2">
				{['상담사', '내담자'].map((label) => (
					<TabsTrigger
						key={label}
						value={label}
						variant="secondary"
						size="select-l"
					>
						{label}
					</TabsTrigger>
				))}
			</TabsList>
		</Tabs>
	),
};

export const SizeSmall: Story = {
	name: '소형 탭 (select-s)',
	render: () => (
		<Tabs defaultValue="week">
			<TabsList className="border-0 gap-1">
				{['주간', '월간', '연간'].map((label) => (
					<TabsTrigger
						key={label}
						value={label}
						variant="secondary"
						size="select-s"
					>
						{label}
					</TabsTrigger>
				))}
			</TabsList>
		</Tabs>
	),
};
