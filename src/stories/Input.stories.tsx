import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const meta = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: '텍스트 입력 컴포넌트. Figma Input Atoms 패턴과 동일. 하단 보더 스타일.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		disabled: { control: 'boolean' },
		placeholder: { control: 'text' },
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { placeholder: '입력하세요' },
};

export const WithLabel: Story = {
	name: '라벨 포함',
	render: () => (
		<div className="flex flex-col gap-1.5 w-80">
			<Label htmlFor="name">이름</Label>
			<Input id="name" placeholder="홍길동" />
		</div>
	),
};

export const WithValue: Story = {
	name: '값 입력된 상태',
	args: { defaultValue: '김상담사', placeholder: '이름을 입력하세요' },
};

export const Disabled: Story = {
	name: '비활성화',
	args: { disabled: true, defaultValue: '비활성화 상태', placeholder: '입력 불가' },
};

export const Password: Story = {
	name: '비밀번호',
	render: () => (
		<div className="flex flex-col gap-1.5 w-80">
			<Label htmlFor="pw">비밀번호</Label>
			<Input id="pw" type="password" placeholder="비밀번호를 입력하세요" />
		</div>
	),
};

export const AllStates: Story = {
	name: '모든 상태',
	render: () => (
		<div className="flex flex-col gap-6 w-80">
			<div className="flex flex-col gap-1.5">
				<Label>기본</Label>
				<Input placeholder="입력하세요" />
			</div>
			<div className="flex flex-col gap-1.5">
				<Label>입력됨</Label>
				<Input defaultValue="텍스트 입력 상태" />
			</div>
			<div className="flex flex-col gap-1.5">
				<Label>비활성화</Label>
				<Input disabled defaultValue="비활성화" />
			</div>
		</div>
	),
};
