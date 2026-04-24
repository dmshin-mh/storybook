import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icons } from '@/assets';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const meta = {
	title: 'Components/Accordion',
	component: Accordion,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component:
					'공지사항/FAQ 아코디언 컴포넌트. Figma 공지사항 Row 패턴과 동일. `FaqList`에서 사용 중.',
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
	{
		id: '1',
		title: '[공지] 서비스 점검 안내',
		content: '2024년 5월 1일 오전 2시~4시 서비스 점검이 진행됩니다. 이용에 불편을 드려 죄송합니다.',
	},
	{
		id: '2',
		title: '[공지] 개인정보 처리방침 변경',
		content: '2024년 6월 1일부로 개인정보 처리방침이 변경됩니다. 자세한 내용은 본문을 확인해 주세요.',
	},
	{
		id: '3',
		title: '[공지] 신규 기능 업데이트',
		content: '상담 일정 관리 기능이 업데이트되었습니다. 달력에서 바로 일정을 등록할 수 있습니다.',
	},
];

export const Default: Story = {
	name: '기본 (single)',
	render: () => (
		<div className="w-[600px] border border-gray200 rounded-xl overflow-hidden">
			<Accordion type="single" collapsible>
				{items.map((item) => (
					<AccordionItem
						key={item.id}
						value={item.id}
						className="py-4 px-8 flex flex-col data-[state=open]:bg-gray50"
					>
						<AccordionTrigger className="[&[data-state=open]>svg]:rotate-0 flex gap-1.5 items-center p-0 bg-transparent h-full">
							<div className="flex gap-1.5 items-center">
								<Icons.Notice />
								<h3 className="text-b4m-16">{item.title}</h3>
							</div>
						</AccordionTrigger>
						<AccordionContent className="text-left px-6 pb-0 pt-3">
							<p className="text-b4m-16 text-gray600">{item.content}</p>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	),
};

export const Multiple: Story = {
	name: '다중 열기 (multiple)',
	render: () => (
		<div className="w-[600px] border border-gray200 rounded-xl overflow-hidden">
			<Accordion type="multiple">
				{items.map((item) => (
					<AccordionItem
						key={item.id}
						value={item.id}
						className="py-4 px-8 flex flex-col data-[state=open]:bg-gray50"
					>
						<AccordionTrigger className="[&[data-state=open]>svg]:rotate-0 flex gap-1.5 items-center p-0 bg-transparent h-full">
							<div className="flex gap-1.5 items-center">
								<Icons.Notice />
								<h3 className="text-b4m-16">{item.title}</h3>
							</div>
						</AccordionTrigger>
						<AccordionContent className="text-left px-6 pb-0 pt-3">
							<p className="text-b4m-16 text-gray600">{item.content}</p>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	),
};

export const SingleItem: Story = {
	name: '단일 아이템',
	render: () => (
		<div className="w-[600px] border border-gray200 rounded-xl overflow-hidden">
			<Accordion type="single" collapsible>
				<AccordionItem value="1" className="py-4 px-8 flex flex-col data-[state=open]:bg-gray50">
					<AccordionTrigger className="[&[data-state=open]>svg]:rotate-0 flex gap-1.5 items-center p-0 bg-transparent h-full">
						<div className="flex gap-1.5 items-center">
							<Icons.Notice />
							<h3 className="text-b4m-16">Q. 상담 취소는 어떻게 하나요?</h3>
						</div>
					</AccordionTrigger>
					<AccordionContent className="text-left px-6 pb-0 pt-3">
						<p className="text-b4m-16 text-gray600">
							마이페이지 &gt; 상담 내역에서 취소 가능합니다. 상담 24시간 전까지 취소할 수 있습니다.
						</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	),
};
