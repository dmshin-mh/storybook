import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

const meta = {
	title: 'Components/Select',
	component: Select,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: '드롭다운 선택 컴포넌트. Figma Select/Dropdown 패턴과 동일.',
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	name: '기본',
	render: () => (
		<Select>
			<SelectTrigger>
				<SelectValue placeholder="선택하세요" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="1">옵션 1</SelectItem>
				<SelectItem value="2">옵션 2</SelectItem>
				<SelectItem value="3">옵션 3</SelectItem>
			</SelectContent>
		</Select>
	),
};

export const WithLabel: Story = {
	name: '라벨 포함',
	render: () => (
		<div className="flex flex-col gap-1.5">
			<Label>상담 유형</Label>
			<Select defaultValue="online">
				<SelectTrigger size="l">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="online">온라인 상담</SelectItem>
					<SelectItem value="phone">전화 상담</SelectItem>
					<SelectItem value="visit">방문 상담</SelectItem>
				</SelectContent>
			</Select>
		</div>
	),
};

export const WithGroups: Story = {
	name: '그룹 포함',
	render: () => (
		<Select>
			<SelectTrigger>
				<SelectValue placeholder="지역 선택" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="seoul">서울</SelectItem>
				<SelectItem value="gyeonggi">경기</SelectItem>
				<SelectSeparator />
				<SelectItem value="busan">부산</SelectItem>
				<SelectItem value="daegu">대구</SelectItem>
				<SelectItem value="gwangju">광주</SelectItem>
			</SelectContent>
		</Select>
	),
};

export const Sizes: Story = {
	name: '사이즈 비교',
	render: () => (
		<div className="flex items-center gap-3">
			<Select>
				<SelectTrigger size="s">
					<SelectValue placeholder="소 (S)" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="1">옵션 1</SelectItem>
					<SelectItem value="2">옵션 2</SelectItem>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger size="l">
					<SelectValue placeholder="대 (L)" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="1">옵션 1</SelectItem>
					<SelectItem value="2">옵션 2</SelectItem>
				</SelectContent>
			</Select>
		</div>
	),
};
