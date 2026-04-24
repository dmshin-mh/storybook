import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronDownIcon, LogOutIcon, SettingsIcon } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const meta = {
	title: 'Components/DropdownMenu',
	component: DropdownMenu,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Radix UI 기반 드롭다운. Figma Tab/Dropdown "김상담님" 패턴과 동일.',
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserProfile: Story = {
	name: '사용자 프로필 드롭다운 (Figma)',
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger
				className={cn(buttonVariants({ variant: 'outline-gray', size: 'sm' }))}
			>
				김상담님
				<ChevronDownIcon className="size-4 transition-transform" />
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-40">
				<DropdownMenuItem>
					<SettingsIcon className="size-4" />
					프로필 설정
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="text-destructive">
					<LogOutIcon className="size-4" />
					로그아웃
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};

export const DefaultStyle: Story = {
	name: '기본 스타일',
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger
				className={cn(buttonVariants({ variant: 'default', size: 'md' }))}
			>
				메뉴 열기
				<ChevronDownIcon className="size-4" />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>항목 1</DropdownMenuItem>
				<DropdownMenuItem>항목 2</DropdownMenuItem>
				<DropdownMenuItem>항목 3</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};
