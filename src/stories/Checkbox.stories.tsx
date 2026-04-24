import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const meta = {
	title: 'Components/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: '체크박스 컴포넌트. Figma Toggle Switch/Checkbox 패턴.',
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Checked: Story = {
	name: '체크된 상태',
	args: { defaultChecked: true },
};

export const Disabled: Story = {
	name: '비활성화',
	args: { disabled: true },
};

export const DisabledChecked: Story = {
	name: '비활성화 + 체크',
	args: { disabled: true, defaultChecked: true },
};

export const WithLabel: Story = {
	name: '라벨 포함',
	render: () => (
		<div className="flex flex-col gap-3">
			{['개인정보 수집 동의 (필수)', '마케팅 정보 수신 동의 (선택)', '서비스 이용약관 동의 (필수)'].map(
				(label, i) => (
					<div key={i} className="flex items-center gap-2">
						<Checkbox id={`cb-${i}`} />
						<Label htmlFor={`cb-${i}`}>{label}</Label>
					</div>
				),
			)}
		</div>
	),
};

export const Controlled: Story = {
	name: '제어 컴포넌트',
	render: () => {
		const [checked, setChecked] = useState(false);
		return (
			<div className="flex items-center gap-2">
				<Checkbox
					id="controlled"
					checked={checked}
					onCheckedChange={(v) => setChecked(v === true)}
				/>
				<Label htmlFor="controlled">{checked ? '체크됨' : '체크 안됨'}</Label>
			</div>
		);
	},
};
