import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const meta = {
	title: 'Components/Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: '토글 스위치 컴포넌트. Figma Toggle Switch 패턴과 동일.',
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Checked: Story = {
	name: '켜진 상태',
	args: { defaultChecked: true },
};

export const Disabled: Story = {
	name: '비활성화',
	args: { disabled: true },
};

export const WithLabel: Story = {
	name: '라벨 포함',
	render: () => (
		<div className="flex flex-col gap-4">
			{[
				{ id: 'notif', label: '알림 수신', defaultChecked: true },
				{ id: 'email', label: '이메일 수신', defaultChecked: false },
				{ id: 'sms', label: 'SMS 수신', defaultChecked: false },
			].map(({ id, label, defaultChecked }) => (
				<div key={id} className="flex items-center justify-between gap-8">
					<Label htmlFor={id}>{label}</Label>
					<Switch id={id} defaultChecked={defaultChecked} />
				</div>
			))}
		</div>
	),
};

export const Controlled: Story = {
	name: '제어 컴포넌트',
	render: () => {
		const [on, setOn] = useState(false);
		return (
			<div className="flex items-center gap-3">
				<Switch checked={on} onCheckedChange={setOn} id="ctrl" />
				<Label htmlFor="ctrl">{on ? 'ON' : 'OFF'}</Label>
			</div>
		);
	},
};
