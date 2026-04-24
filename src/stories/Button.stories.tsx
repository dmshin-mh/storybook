import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronRightIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'CVA 기반 버튼 컴포넌트. 다양한 variant와 size 지원.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: [
				'default', 'outline', 'outline-gray', 'gray',
				'ghost', 'link', 'destructive', 'page', 'page-select',
			],
		},
		size: {
			control: 'select',
			options: ['xl', 'default', 'md', 'sm', 'xs', 'icon', 'page'],
		},
		disabled: { control: 'boolean' },
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { children: '기본 버튼', variant: 'default', size: 'md' },
};

export const Outline: Story = {
	args: { children: '아웃라인', variant: 'outline', size: 'md' },
};

export const OutlineGray: Story = {
	name: 'Outline Gray',
	args: { children: '회색 아웃라인', variant: 'outline-gray', size: 'md' },
};

export const Gray: Story = {
	args: { children: '회색', variant: 'gray', size: 'md' },
};

export const Ghost: Story = {
	args: { children: '고스트', variant: 'ghost', size: 'md' },
};

export const Disabled: Story = {
	args: { children: '비활성화', variant: 'default', size: 'md', disabled: true },
};

export const AllSizes: Story = {
	name: '모든 사이즈',
	render: () => (
		<div className="flex items-end gap-3">
			<Button size="xl">XL</Button>
			<Button size="default">Default</Button>
			<Button size="md">MD</Button>
			<Button size="sm">SM</Button>
			<Button size="xs">XS</Button>
		</div>
	),
};

export const TextButtonWithArrow: Story = {
	name: 'TextButton with Arrow (Figma)',
	render: () => (
		<Button variant="ghost" size="sm" className="text-gray600 gap-0.5">
			상담 일정 전체
			<ChevronRightIcon className="size-4" />
		</Button>
	),
};
