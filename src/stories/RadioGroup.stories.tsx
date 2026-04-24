import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const meta = {
	title: 'Components/RadioGroup',
	component: RadioGroup,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: '라디오 그룹 컴포넌트. 단일 선택.',
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	name: '기본',
	render: () => (
		<RadioGroup defaultValue="1">
			<div className="flex items-center gap-2">
				<RadioGroupItem id="r1" value="1" />
				<Label htmlFor="r1">남성</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroupItem id="r2" value="2" />
				<Label htmlFor="r2">여성</Label>
			</div>
		</RadioGroup>
	),
};

export const Horizontal: Story = {
	name: '가로 배열',
	render: () => (
		<RadioGroup defaultValue="a" className="flex-row">
			{['옵션 A', '옵션 B', '옵션 C'].map((label, i) => (
				<div key={i} className="flex items-center gap-2">
					<RadioGroupItem id={`h-${i}`} value={String.fromCharCode(97 + i)} />
					<Label htmlFor={`h-${i}`}>{label}</Label>
				</div>
			))}
		</RadioGroup>
	),
};

export const Disabled: Story = {
	name: '비활성화',
	render: () => (
		<RadioGroup defaultValue="1" disabled>
			<div className="flex items-center gap-2">
				<RadioGroupItem id="d1" value="1" />
				<Label htmlFor="d1">선택됨 (비활성화)</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroupItem id="d2" value="2" />
				<Label htmlFor="d2">미선택 (비활성화)</Label>
			</div>
		</RadioGroup>
	),
};

export const Counseling: Story = {
	name: '상담 유형 선택',
	render: () => (
		<RadioGroup defaultValue="online" className="flex-col gap-3">
			{[
				{ value: 'online', label: '온라인 상담' },
				{ value: 'phone', label: '전화 상담' },
				{ value: 'visit', label: '방문 상담' },
			].map(({ value, label }) => (
				<div key={value} className="flex items-center gap-2">
					<RadioGroupItem id={value} value={value} />
					<Label htmlFor={value}>{label}</Label>
				</div>
			))}
		</RadioGroup>
	),
};
