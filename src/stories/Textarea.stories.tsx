import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const meta = {
	title: 'Components/Textarea',
	component: Textarea,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: '멀티라인 텍스트 입력 컴포넌트.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		disabled: { control: 'boolean' },
		placeholder: { control: 'text' },
	},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { placeholder: '내용을 입력하세요', className: 'w-80 border border-gray200 rounded-lg' },
};

export const WithLabel: Story = {
	name: '라벨 포함',
	render: () => (
		<div className="flex flex-col gap-1.5 w-80">
			<Label htmlFor="content">상담 내용</Label>
			<Textarea
				id="content"
				placeholder="상담 내용을 입력하세요"
				className="border border-gray200 rounded-lg min-h-[120px]"
			/>
		</div>
	),
};

export const Disabled: Story = {
	name: '비활성화',
	args: {
		disabled: true,
		defaultValue: '비활성화된 텍스트 영역입니다.',
		className: 'w-80 border border-gray200 rounded-lg',
	},
};
