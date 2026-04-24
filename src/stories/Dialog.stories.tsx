import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

const meta = {
	title: 'Components/Dialog',
	component: Dialog,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: '모달 다이얼로그 컴포넌트. Figma Modal 패턴과 동일.',
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	name: '기본 모달',
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button>모달 열기</Button>
			</DialogTrigger>
			<DialogContent className="max-w-sm">
				<DialogHeader>
					<DialogTitle>상담 취소 확인</DialogTitle>
					<DialogDescription>
						상담을 취소하시겠습니까? 취소 후에는 되돌릴 수 없습니다.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button variant="outline-gray" size="md">
						닫기
					</Button>
					<Button variant="destructive" size="md">
						취소하기
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};

export const Confirm: Story = {
	name: '확인 모달',
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button>확인 모달</Button>
			</DialogTrigger>
			<DialogContent className="max-w-sm" isClose={false}>
				<DialogHeader>
					<DialogTitle>상담이 완료되었습니다</DialogTitle>
					<DialogDescription>
						상담 후기를 작성해 주시면 더 나은 서비스를 제공할 수 있습니다.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button variant="default" size="md" className="w-full">
						후기 작성하기
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};

export const WithContent: Story = {
	name: '내용이 있는 모달',
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">상세 정보</Button>
			</DialogTrigger>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle>상담사 정보</DialogTitle>
				</DialogHeader>
				<div className="px-5 py-3 space-y-3">
					<div className="flex justify-between text-b5m-14">
						<span className="text-gray500">이름</span>
						<span className="text-gray900">김상담</span>
					</div>
					<div className="flex justify-between text-b5m-14">
						<span className="text-gray500">경력</span>
						<span className="text-gray900">10년</span>
					</div>
					<div className="flex justify-between text-b5m-14">
						<span className="text-gray500">전문 분야</span>
						<span className="text-gray900">우울증, 불안장애</span>
					</div>
				</div>
				<DialogFooter>
					<Button size="md" className="w-full">
						상담 예약하기
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};
