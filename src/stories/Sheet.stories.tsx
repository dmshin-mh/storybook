import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

const meta = {
	title: 'Components/Sheet',
	component: Sheet,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: '슬라이드 패널 컴포넌트. Figma Bottom Sheet 패턴과 동일.',
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BottomSheet: Story = {
	name: '바텀 시트',
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button>바텀 시트 열기</Button>
			</SheetTrigger>
			<SheetContent side="bottom">
				<SheetHeader>
					<SheetTitle>상담 일정 선택</SheetTitle>
					<SheetDescription>원하시는 상담 날짜와 시간을 선택해 주세요.</SheetDescription>
				</SheetHeader>
				<div className="px-5 py-3 space-y-3">
					{['2024.06.01 (토) 오전 10:00', '2024.06.03 (월) 오후 2:00', '2024.06.05 (수) 오후 4:00'].map(
						(time, i) => (
							<div key={i}>
								<button className="w-full text-left py-3 text-b5m-14 text-gray700 hover:text-primary600 transition-colors">
									{time}
								</button>
								{i < 2 && <Separator />}
							</div>
						),
					)}
				</div>
				<SheetFooter>
					<Button className="w-full" size="md">
						선택 완료
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	),
};

export const RightPanel: Story = {
	name: '우측 패널',
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">메뉴 열기</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<SheetHeader>
					<SheetTitle>메뉴</SheetTitle>
				</SheetHeader>
				<nav className="px-5 py-3 space-y-1">
					{['홈', '상담 예약', '내 상담', '공지사항', '설정'].map((item, i) => (
						<button
							key={i}
							className="w-full text-left py-3 px-2 text-b4m-16 text-gray700 hover:bg-gray50 rounded-lg transition-colors"
						>
							{item}
						</button>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	),
};
