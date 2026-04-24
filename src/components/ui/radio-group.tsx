import * as React from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { CircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function RadioGroup({
	className,
	...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
	return (
		<RadioGroupPrimitive.Root
			data-slot="radio-group"
			className={cn('flex gap-3', className)}
			{...props}
		/>
	);
}

function RadioGroupItem({
	className,
	...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
	return (
		<RadioGroupPrimitive.Item
			data-slot="radio-group-item"
			className={cn(
				'border-gray300 data-[state=checked]:bg-info500 data-[state=checked]:border-info500 aspect-square size-[18px] shrink-0 rounded-full border-2 shadow-xs transition-all outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator className="relative flex items-center justify-center">
				<CircleIcon className="fill-white text-white absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2" />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	);
}

export { RadioGroup, RadioGroupItem };
